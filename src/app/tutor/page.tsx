'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

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
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-0.5 shrink-0">
          <span className="text-xs font-bold text-white">CEC</span>
        </div>
      )}
      <div className={`max-w-[85%] md:max-w-[75%]`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? 'bg-blue-600 text-white rounded-br-sm'
              : 'bg-gray-800 text-gray-200 rounded-bl-sm border border-gray-700'
          }`}
        >
          {message.content.split('\n').map((line, i) => (
            <p key={i} className={line === '' ? 'h-2' : ''}>
              {line}
            </p>
          ))}
        </div>
        <div
          className={`text-xs text-gray-600 mt-1 ${isUser ? 'text-right' : 'text-left'}`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 mt-0.5 shrink-0">
          <span className="text-xs font-bold text-gray-300">You</span>
        </div>
      )}
    </div>
  )
}

export default function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hello! I\'m your CEC (Canadian Electrical Code) study tutor. I can help you understand electrical code rules, explain concepts, work through calculations, and prepare for your exams.\n\nAsk me anything about the CEC — I\'ll cite specific rule numbers and give you practical field examples. What would you like to learn today?',
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
      <div className="flex items-center justify-between p-4 md:px-8 border-b border-gray-700 bg-gray-900 shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-white font-semibold">AI CEC Tutor</h1>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="text-gray-400 text-xs">Powered by Claude</span>
            </div>
          </div>
        </div>
        <button
          onClick={clearChat}
          className="text-gray-500 hover:text-gray-300 text-sm"
        >
          Clear chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:px-8 pb-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 shrink-0">
              <span className="text-xs font-bold text-white">CEC</span>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick prompts */}
      <div className="px-4 md:px-8 pb-2 shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {QUICK_PROMPTS.slice(0, 4).map((prompt, i) => (
            <button
              key={i}
              onClick={() => sendMessage(prompt)}
              disabled={isLoading}
              className="shrink-0 text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full transition-all disabled:opacity-50"
            >
              {prompt.length > 40 ? prompt.slice(0, 40) + '…' : prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 md:px-8 pb-6 md:pb-4 border-t border-gray-700 bg-gray-900 shrink-0">
        {error && (
          <div className="text-red-400 text-xs mb-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
            {error}
          </div>
        )}
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about CEC rules, calculations, or exam topics... (Enter to send)"
            rows={1}
            className="flex-1 bg-gray-800 border border-gray-600 text-white rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-blue-500 transition-colors max-h-32"
            style={{ minHeight: '44px' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = 'auto'
              target.style.height = Math.min(target.scrollHeight, 128) + 'px'
            }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="text-gray-600 text-xs mt-2">
          Shift+Enter for new line · Enter to send
        </div>
      </div>
    </div>
  )
}
