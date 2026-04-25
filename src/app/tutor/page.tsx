'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button, Card } from '@/shared/components/ui'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const QUICK_PROMPTS = [
  'Explain CEC Rule 8-200 residential demand calculation',
  'How do I calculate voltage drop for a branch circuit?',
  'What is the difference between bonding and grounding?',
  'Explain motor overcurrent protection per Section 28',
  'What are the GFCI requirements in a bathroom?',
  'How does the SM-2 spaced repetition algorithm work for memorization?',
  'What is the bundling derating factor for 7 conductors in conduit?',
  'Explain the difference between a service entrance and a feeder',
]

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser ? (
        <div className="w-8 h-8 rounded-pill bg-accent flex items-center justify-center mr-2 mt-0.5 shrink-0">
          <span className="text-xs font-mono font-bold text-accent-contrast">CEC</span>
        </div>
      ) : null}
      <div className="max-w-[85%] md:max-w-[75%]">
        {isUser ? (
          <div className="bg-accent text-accent-contrast px-4 py-3 rounded-xl rounded-br-sm text-sm leading-relaxed">
            {message.content.split('\n').map((line, i) => (
              <p key={i} className={line === '' ? 'h-2' : ''}>
                {line}
              </p>
            ))}
          </div>
        ) : (
          <Card elevation="elev-1" padding="md" className="rounded-bl-sm">
            <div className="text-sm text-primary leading-relaxed">
              {message.content.split('\n').map((line, i) => (
                <p key={i} className={line === '' ? 'h-2' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </Card>
        )}
        <div
          className={`text-xs text-muted mt-1 font-mono ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      {isUser ? (
        <div className="w-8 h-8 rounded-pill bg-surface-elevated-2 flex items-center justify-center ml-2 mt-0.5 shrink-0">
          <span className="text-xs font-mono font-bold text-secondary">You</span>
        </div>
      ) : null}
    </div>
  )
}

export default function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm your CEC (Canadian Electrical Code) study tutor. I can help you understand electrical code rules, explain concepts, work through calculations, and prepare for your exams.\n\nAsk me anything about the CEC — I'll cite specific rule numbers and give you practical field examples. What would you like to learn today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(content: string) {
    if (!content.trim() || isLoading) return
    setError(null)

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: content.trim() },
          ],
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error ?? `API error ${response.status}`)
      }

      const data = await response.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message ?? 'No response received.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      setError(msg)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${msg}\n\nMake sure the ANTHROPIC_API_KEY environment variable is set in your .env.local file.`,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  function clearChat() {
    setMessages([
      {
        role: 'assistant',
        content:
          'Chat cleared. How can I help you study the Canadian Electrical Code?',
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="flex flex-col h-screen md:h-[calc(100vh)]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:px-8 border-b border-subtle bg-surface-elevated shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors duration-75"
            aria-label="Back to dashboard"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div>
            <h1 className="text-primary font-display font-semibold">AI CEC Tutor</h1>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 bg-success rounded-pill"
                aria-label="connected"
              />
              <span className="text-secondary text-xs">Powered by Claude</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={clearChat}>
          Clear chat
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:px-8 pb-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {isLoading ? (
          <div className="flex justify-start mb-4">
            <div className="w-8 h-8 rounded-pill bg-accent flex items-center justify-center mr-2 shrink-0">
              <span className="text-xs font-mono font-bold text-accent-contrast">CEC</span>
            </div>
            <Card elevation="elev-1" padding="md" className="rounded-bl-sm">
              <div className="flex gap-1 items-center">
                <div
                  className="w-2 h-2 bg-accent rounded-pill animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
                <div
                  className="w-2 h-2 bg-accent rounded-pill animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <div
                  className="w-2 h-2 bg-accent rounded-pill animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </Card>
          </div>
        ) : null}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick prompts */}
      <div className="px-4 md:px-8 pb-2 shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {QUICK_PROMPTS.slice(0, 4).map((prompt, i) => (
            <Button
              key={i}
              variant="ghost"
              size="sm"
              onClick={() => sendMessage(prompt)}
              disabled={isLoading}
              className="shrink-0 whitespace-nowrap"
            >
              {prompt.length > 40 ? prompt.slice(0, 40) + '…' : prompt}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 md:px-8 pb-6 md:pb-4 border-t border-subtle bg-surface-elevated shrink-0">
        {error ? (
          <div className="text-danger text-xs mb-2 bg-surface-elevated-2 border border-danger rounded-md px-3 py-2">
            {error}
          </div>
        ) : null}
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about CEC rules, calculations, or exam topics... (Enter to send)"
            rows={1}
            className="flex-1 bg-surface-base border border-subtle text-primary rounded-md px-4 py-3 text-sm resize-none outline-none focus:border-strong transition-colors duration-75 max-h-32 placeholder:text-muted"
            style={{ minHeight: '44px' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = 'auto'
              target.style.height = Math.min(target.scrollHeight, 128) + 'px'
            }}
          />
          <Button
            variant="primary"
            size="md"
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </Button>
        </div>
        <div className="text-muted text-xs mt-2">
          Shift+Enter for new line · Enter to send
        </div>
      </div>
    </div>
  )
}
