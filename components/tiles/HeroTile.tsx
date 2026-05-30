'use client'

import { motion } from 'framer-motion'
import { Flame, Star } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="relative col-span-2 flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#111118] p-8"
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-indigo-600/10 pointer-events-none" />

      <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />

      
      <div className="relative flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm text-white/40">Good morning</p>
          <h1 className="text-3xl font-bold text-white">Welcome back, Rishi</h1>
          <p className="mt-2 text-sm text-white/50">
            You have 3 courses in progress. Keep it up!
          </p>
        </div>

       
        <div className="flex items-center gap-2 rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2">
          <Flame size={18} className="text-orange-400" />
          <div>
            <p className="text-lg font-bold leading-none text-orange-400">12</p>
            <p className="text-xs text-orange-400/60">day streak</p>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-yellow-400" />
            <span className="text-xs text-white/60">Level 7 - 2,340 XP</span>
          </div>
          <span className="text-xs text-white/40">3,000 XP to Level 8</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '78%' }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
          />
        </div>
      </div>
    </motion.article>
  )
}
