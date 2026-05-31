'use client'

import { useState } from 'react'
import { LayoutDashboard, BookOpen, Trophy, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: Trophy, label: 'Achievements', id: 'achievements' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function BottomNav() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#110e00] border-t border-amber-900/20 flex items-center justify-around px-2 py-3">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeItem === item.id

        return (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className="relative flex flex-col items-center gap-1 px-4 py-1"
          >
            {isActive && (
              <motion.div
                layoutId="activeBottomNav"
                className="absolute inset-0 bg-amber-500/15 rounded-lg"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              size={20}
              className={`relative z-10 ${isActive ? 'text-amber-400' : 'text-white/40'}`}
            />
            <span
              className={`relative z-10 text-xs ${isActive ? 'text-amber-400' : 'text-white/40'}`}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}