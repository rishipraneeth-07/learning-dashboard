'use client'

import { motion } from 'framer-motion'
import { Flame, Star } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
      whileHover={{
        scale: 1.01,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="relative rounded-2xl overflow-hidden p-8 bg-[#110e00] border border-amber-900/20 min-h-[200px] h-full flex flex-col justify-between"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-yellow-600/10 pointer-events-none" />

      <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />


      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-white/40 text-sm mb-1">Good morning 👋</p>
          <h1 className="text-white text-3xl font-bold">Welcome back, Rishi</h1>
          <p className="text-white/50 text-sm mt-2">
            You have 3 courses in progress. Keep it up!
          </p>
        </div>


        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2">
          <Flame size={18} className="text-amber-400" />
          <div>
            <p className="text-amber-400 font-bold text-lg leading-none">12</p>
            <p className="text-amber-400/60 text-xs">day streak</p>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-yellow-400" />
            <span className="text-white/60 text-xs">Level 7 — 2,340 XP</span>
          </div>
          <span className="text-white/40 text-xs">3,000 XP to Level 8</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '78%' }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full"
          />
        </div>
      </div>
    </motion.article>
  )
}