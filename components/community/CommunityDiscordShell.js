'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const channels = [
  { id: '1', name: 'announcements', type: 'announcement', unread: 2 },
  { id: '2', name: 'jee-physics-doubts', type: 'doubt', unread: 0 },
  { id: '3', name: 'batch-alpha', type: 'batch', unread: 5 },
  { id: '4', name: 'skills-coding', type: 'channel', unread: 0 },
  { id: '5', name: 'off-topic', type: 'channel', unread: 0 },
]

const dummyThread = [
  { id: 'm1', user: 'Faculty · Aditi', time: '10:02', text: 'Drop your doubt screenshots here — use threads for long derivations.', self: false },
  { id: 'm2', user: 'You', time: '10:04', text: 'Can we revisit rotation energy today?', self: true },
  { id: 'm3', user: 'Mentor Rahul', time: '10:06', text: 'Yes — pinned a PDF in resources. Check #batch-alpha resources.', self: false },
]

export default function CommunityDiscordShell() {
  const [active, setActive] = useState(channels[2])
  const [composer, setComposer] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-[calc(100dvh-8rem)] min-h-[420px] max-h-[800px] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
      <AnimatePresence initial={false}>
        {sidebarOpen ? (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="hidden sm:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 shrink-0"
          >
            <div className="p-3 border-b border-gray-200 dark:border-gray-800">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Edgen Community</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Student OS · Beta</p>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
              {channels.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`w-full flex items-center justify-between rounded-lg px-2 py-2 text-left text-sm ${
                    active.id === c.id ? 'bg-primary/15 text-primary font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="truncate">
                    <span className="text-gray-400 mr-1">#</span>
                    {c.name}
                  </span>
                  {c.unread ? <span className="text-[10px] bg-primary text-white rounded-full px-1.5 py-0.5">{c.unread}</span> : null}
                </button>
              ))}
            </div>
            <div className="p-2 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500">
              Real-time WebSocket layer — connect to `/api/chat` in production.
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-12 flex items-center justify-between px-3 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
          <button type="button" className="sm:hidden text-gray-600 p-2" onClick={() => setSidebarOpen((v) => !v)} aria-label="Toggle channels">
            ☰
          </button>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-gray-400 text-sm">#</span>
            <h2 className="font-bold text-gray-900 dark:text-white truncate">{active.name}</h2>
            <span className="hidden md:inline text-xs text-gray-500 truncate">Typing indicators · pins · search — wired next</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" title="Online" />
            <span className="text-xs text-gray-500">Live UI</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f7f8fb] dark:bg-gray-900/50">
          {dummyThread.map((m) => (
            <div key={m.id} className={`flex ${m.self ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 shadow-sm ${
                  m.self ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-md' : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md'
                }`}
              >
                <div className="flex items-center gap-2 text-[11px] opacity-80 mb-0.5">
                  <span className="font-semibold">{m.user}</span>
                  <span>{m.time}</span>
                </div>
                <p className="text-sm leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-end gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2">
            <button type="button" className="text-gray-500 text-sm pb-1" aria-label="Attach">
              +
            </button>
            <textarea
              rows={1}
              value={composer}
              onChange={(e) => setComposer(e.target.value)}
              placeholder={`Message #${active.name}`}
              className="flex-1 bg-transparent resize-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none max-h-24"
            />
            <button type="button" className="rounded-xl bg-primary text-white text-xs font-bold px-3 py-2 hover:opacity-90">
              Send
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2 text-center">Voice notes · reactions · threads — UI ready for socket events.</p>
        </div>
      </div>
    </div>
  )
}
