'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import ProgressBar from '@/components/ui/ProgressBar'
import { Course } from '@/lib/supabase'

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[name]
  if (!Icon) return <LucideIcons.BookOpen {...props} />
  return <Icon {...props} />
}

interface CourseCardProps {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.1 * index,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="relative rounded-2xl p-5 bg-[#111118] border border-white/5 overflow-hidden flex flex-col gap-4 cursor-pointer group"
    >

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-indigo-600/5 pointer-events-none" />

 
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent"
        whileHover={{ borderColor: 'rgba(139, 92, 246, 0.4)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      <div className="relative w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
        <DynamicIcon name={course.icon_name} size={18} className="text-violet-400" />
      </div>

     
      <div className="relative flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug">
          {course.title}
        </h3>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/40 text-xs">Progress</span>
          <span className="text-white/60 text-xs font-medium">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}