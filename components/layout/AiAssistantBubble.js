'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/theme/ThemeProvider'

export default function AiAssistantBubble() {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-40 right-4 z-[58] lg:bottom-24 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-lg shadow-lg hover:scale-105 transition-transform"
        aria-label="AI assistant"
      >
        ✨
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="fixed bottom-[7.5rem] right-4 z-[58] w-[min(100vw-2rem,22rem)] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl p-4"
          >
            <p className="text-sm font-bold text-gray-900 dark:text-white">Edgen AI</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Ask for study plans, summaries or career nudges — connect your model API here ({theme} mode).
            </p>
            <input
              type="text"
              placeholder="Ask anything…"
              className="mt-3 w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
