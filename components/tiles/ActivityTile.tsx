'use client'

import { motion } from 'framer-motion'

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}
function generateActivityData() {
  return Array.from({ length: 12 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const seed = w * 7 + d
      const rand = seededRandom(seed)
      return {
        week: w,
        day: d,
        value: rand > 0.4 ? Math.floor(seededRandom(seed + 100) * 4) + 1 : 0,
      }
    })
  )
}

const activityData = generateActivityData()

const intensityColors = [
  'bg-white/5',
  'bg-violet-900/60',
  'bg-violet-700/70',
  'bg-violet-500/80',
  'bg-violet-400',
]

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
      whileHover={{
        scale: 1.01,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="relative col-span-1 rounded-2xl p-5 bg-[#111118] border border-white/5 overflow-hidden"
    >
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative">
        <h2 className="text-white font-semibold text-sm mb-1">Learning Activity</h2>
        <p className="text-white/40 text-xs mb-4">Last 12 weeks</p>

        <div className="flex gap-1">
          {activityData.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day) => (
                <motion.div
                  key={`${wi}-${day.day}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4 + wi * 0.03,
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  }}
                  className={`w-3 h-3 rounded-sm ${intensityColors[day.value]}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-white/30 text-xs">Less</span>
          {intensityColors.map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
          <span className="text-white/30 text-xs">More</span>
        </div>
      </div>
    </motion.article>
  )
}