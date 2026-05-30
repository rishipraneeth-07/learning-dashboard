export default function DashboardLoading() {
  return (
    <div className="flex h-screen">
      {/* Sidebar skeleton */}
      <div className="w-60 h-screen bg-[#111118] border-r border-white/5 shrink-0 animate-pulse" />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
         
          <div className="col-span-2 h-48 rounded-2xl bg-[#111118] border border-white/5 animate-pulse" />
         
          <div className="col-span-1 h-48 rounded-2xl bg-[#111118] border border-white/5 animate-pulse" />
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 rounded-2xl bg-[#111118] border border-white/5 animate-pulse" />
          ))}
        </div>
      </main>
    </div>
  )
}