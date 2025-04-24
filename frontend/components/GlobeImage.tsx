'use client'

import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'

type Country = {
    NAME: string
    ISO_A2: string
}

export default function GlobeImage() {
    // Reference to the Globe instance
    const globeEl = useRef<any>(null)

    // Hovered country (for highlighting)
    const [hoverD, setHoverD] = useState<any | null>(null)

    // All countries
    const [countries, setCountries] = useState<Country[]>([])

    // Selected country
    const [selectedCountry, setSelectedCountry] = useState<string>('')

    // State to track whether the Globe component is ready
    const [isGlobeReady, setIsGlobeReady] = useState<boolean>(false)

    // Load GeoJSON data and set polygons
    useEffect(() => {
        fetch('/globe-data/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => {
                setCountries(data.features.map((feat: any) => feat.properties))

                // Adding a small delay to ensure Globe component is ready
                const interval = setInterval(() => {
                    if (globeEl.current && typeof globeEl.current.polygonsData === 'function') {
                        globeEl.current.polygonsData(data.features)
                        setIsGlobeReady(true) // Set the Globe as ready
                        clearInterval(interval) // Stop checking once it's ready
                    }
                }, 100) // Check every 100ms

                return () => clearInterval(interval) // Cleanup on unmount
            })
            .catch(err => {
                console.error('Error loading GeoJSON data:', err)
            })
    }, [])

    // Handle hover on polygons
    const handlePolygonHover = (
        polygon: object | null,
        _prevPolygon: object | null
    ) => {
        setHoverD(polygon)
    }

    // Handle click on polygons
    const handlePolygonClick = (feat: any) => {
        const name = feat.properties.NAME
        setSelectedCountry(name)
        alert(`You selected ${name}`)
    }

    // Rotation animation for the globe using auto-rotation
    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true
            globeEl.current.controls().autoRotateSpeed = 0.9 // Adjust rotation speed here
        }
    }, [isGlobeReady])

    return (
        <div className="w-full h-[600px] relative z-10 flex justify-center items-center cursor-pointer">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="rgba(0, 0, 0, 0)"
                polygonAltitude={d => (d === hoverD ? 0.12 : 0.06)}
                polygonCapColor={d => (d === hoverD ? 'steelblue' : 'rgba(200, 200, 200, 0.6)')}
                polygonSideColor={() => 'rgba(0, 100, 0, 0.05)'}
                polygonStrokeColor={() => '#111'}
                polygonsTransitionDuration={300}
                onPolygonHover={handlePolygonHover}
                onPolygonClick={handlePolygonClick}
                width={window.innerWidth}
                height={800}
            />
        </div>
    )
}
