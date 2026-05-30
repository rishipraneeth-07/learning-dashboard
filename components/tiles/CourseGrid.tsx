import { supabase, Course } from '@/lib/supabase'
import CourseCard from './CourseCard'
import { AlertCircle } from 'lucide-react'

async function getCourses(): Promise<{ data: Course[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })

    console.log('COUNT:', data?.length)
    console.log('DATA:', JSON.stringify(data))
    console.log('ERROR:', JSON.stringify(error))

    if (error) return { data: null, error: error.message }
    return { data, error: null }
  } catch (e) {
    console.log('CATCH:', e)
    return { data: null, error: 'Failed to connect' }
  }
}

export default async function CourseGrid() {
  const { data: courses, error } = await getCourses()

  if (error || !courses) {
    return (
      <div className="col-span-3 flex items-center gap-3 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
        <AlertCircle size={20} className="text-red-400 shrink-0" />
        <div>
          <p className="text-red-400 font-medium text-sm">Failed to load courses</p>
          <p className="text-red-400/60 text-xs mt-0.5">{error}</p>
        </div>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="col-span-3 p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
        <p className="text-yellow-400 text-sm">Connected but no courses found!</p>
      </div>
    )
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}