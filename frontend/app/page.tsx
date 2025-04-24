// app/page.tsx
'use client'

import dynamic from 'next/dynamic'

// Dynamically import GlobeImage with SSR disabled
const GlobeImage = dynamic(() => import('@/components/GlobeImage'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-6">
        🌍 Earth Insights Data Visualisation
      </h1>

      <p className="max-w-2xl mx-auto text-center text-zinc-600 dark:text-zinc-300 mb-8">
        Earth Insights is an interactive scientific data visualisation tool that allows you to explore environmental trends across the globe. Select a country by interacting with the 3D Earth, then choose your date and value ranges to reveal climate patterns over time.
      </p>

      <GlobeImage />
    </main>
  )
}
