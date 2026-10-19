import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  const techStack = [
    { name: 'Vite', description: 'Next Generation Frontend Tooling', badge: 'v8.x', color: 'from-purple-500 to-indigo-600' },
    { name: 'React', description: 'The library for web and native user interfaces', badge: 'v19.x', color: 'from-cyan-500 to-blue-600' },
    { name: 'TypeScript', description: 'JavaScript with syntax for types', badge: 'v7.x', color: 'from-blue-600 to-sky-700' },
    { name: 'Tailwind CSS', description: 'A utility-first CSS framework', badge: 'v4.x', color: 'from-teal-400 to-emerald-600' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-white">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <main className="max-w-3xl w-full flex flex-col items-center text-center space-y-8">
        {/* Header badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-slate-300 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Dự án sẵn sàng phát triển</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Vite + React + TypeScript + Tailwind CSS
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Dự án đã được cấu hình hoàn chỉnh với Tailwind CSS v4, sẵn sàng để bạn xây dựng ứng dụng hiện đại và tốc độ cao.
          </p>
        </div>

        {/* Counter Demo */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            className="cursor-pointer px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 transition-all text-white font-semibold shadow-lg shadow-cyan-500/25"
          >
            Số lần bấm: {count}
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="cursor-pointer px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 active:scale-95 transition-all text-slate-300 font-medium text-sm"
          >
            Reset
          </button>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${tech.color}`}>
                  {tech.badge}
                </span>
              </div>
              <p className="text-sm text-slate-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Getting started note */}
        <p className="text-xs text-slate-500">
          Chỉnh sửa <code className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">src/App.tsx</code> để bắt đầu.
        </p>
      </main>
    </div>
  )
}

export default App
