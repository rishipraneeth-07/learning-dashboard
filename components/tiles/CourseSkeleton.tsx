// Shown while Supabase data is loading via Suspense
export default function CourseSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-2xl p-5 bg-[#111118] border border-white/5 flex flex-col gap-4 min-h-[160px]"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 animate-pulse" />

          <div className="flex flex-col gap-2">
            <div className="h-3 bg-white/5 rounded-full animate-pulse w-3/4" />
            <div className="h-3 bg-white/5 rounded-full animate-pulse w-1/2" />
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="h-2 bg-white/5 rounded-full animate-pulse w-16" />
              <div className="h-2 bg-white/5 rounded-full animate-pulse w-8" />
            </div>
            <div className="h-1.5 bg-white/5 rounded-full animate-pulse" />
          </div>
        </div>
      ))}
    </>
  )
}