'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full"
      />
    </div>
  )
}