import { Suspense } from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import BottomNav from '@/components/sidebar/BottomNav'
import HeroTile from '@/components/tiles/HeroTile'
import CourseGrid from '@/components/tiles/CourseGrid'
import CourseSkeleton from '@/components/tiles/CourseSkeleton'
import ActivityTile from '@/components/tiles/ActivityTile'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0a0800]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <HeroTile />
            </div>
            <div className="col-span-1">
              <ActivityTile />
            </div>
            <Suspense fallback={<CourseSkeleton />}>
              <CourseGrid />
            </Suspense>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}