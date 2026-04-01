import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT = `You are an expert CEC (Canadian Electrical Code) instructor and electrician trainer. Your role is to help electricians and apprentices studying for their CEC exams and certifications.

Guidelines:
- Always cite specific CEC rule numbers (e.g., "Per Rule 8-200...", "As per Rule 28-304...")
- Explain concepts clearly using practical field examples that electricians can relate to
- When discussing calculations, show the formula and work through the numbers step by step
- Use Canadian electrical terminology (e.g., "luminaire" not "fixture", "overcurrent protective device" or "OCPD", "conductor" not "wire" in formal contexts)
- Reference specific CEC Tables (e.g., Table 1, Table 2, Table 5A, Table 5C, Table 44, Table D3)
- Highlight safety implications of code requirements
- For complex topics, break the explanation into numbered steps
- Be encouraging and supportive to students preparing for exams
- When asked about calculations, provide worked examples with realistic numbers
- Mention practical installation tips where relevant

Topics you are expert in:
- Section 0: Definitions and general rules
- Section 4: Conductors - ampacity, insulation types, colour coding
- Section 6: Services - overhead clearances, service entrance, metering
- Section 8: Ampacity and wire sizing - Rule 8-102 (voltage drop), Rule 8-200 (residential demand), Rule 8-202/8-210 (service calculations)
- Section 10: Grounding and bonding - electrodes, bonding conductors, RGC sizing
- Section 12: Wiring methods - conduit fill, cable types, support requirements
- Section 14: Overcurrent protection - breakers, fuses, GFCI, AFCI
- Section 26: Installation - receptacle requirements, GFCI locations, working clearances
- Section 28: Motors - FLA from Table 44, conductor sizing, OCPD sizing, disconnect requirements, overload protection
- CEC Tables 1, 2, 5A, 5B, 5C, D3, D4, 44
- Ohm's Law and power calculations for electrical systems`

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      messages: { role: 'user' | 'assistant'; content: string }[]
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return Response.json(
        {
          error:
            'ANTHROPIC_API_KEY is not configured. Add it to your .env.local file to use the AI tutor.',
          message:
            'AI Tutor is not configured yet. To enable it:\n\n1. Create a .env.local file in your project root\n2. Add: ANTHROPIC_API_KEY=your_key_here\n3. Get your API key from console.anthropic.com\n4. Restart the development server\n\nIn the meantime, you can study using the Quiz and Flashcard features!',
        },
        { status: 200 }
      )
    }

    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: body.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    })

    const textContent = response.content.find((c) => c.type === 'text')
    const message = textContent?.type === 'text' ? textContent.text : 'No response'

    return Response.json({ message })
  } catch (err) {
    console.error('Chat API error:', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return Response.json(
      { error: message, message: `Error: ${message}` },
      { status: 500 }
    )
  }
}
