'use client'

import { useState, useMemo } from 'react'
import { DataPoint } from '@/src/types'
import DataChart from './DataChart'

type Props = {
    data: DataPoint[]
}

export default function InteractiveChart({ data }: Props) {
    const [start, setStart] = useState<string>('')
    const [end, setEnd] = useState<string>('')
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(100)

    // Filter data by date range and value range
    const filtered = useMemo(() => {
        return data.filter((point) => {
            // Convert point timestamp to YYYY-MM-DD string
            const pointDateOnly = new Date(point.timestamp).toISOString().split('T')[0]

            // Date filtering logic
            const afterStart = start ? pointDateOnly >= start : true
            const beforeEnd = end ? pointDateOnly <= end : true

            // Value filtering logic
            const isValueInRange = point.value >= minValue && point.value <= maxValue

            return afterStart && beforeEnd && isValueInRange
        })
    }, [data, start, end, minValue, maxValue])

    return (
        <div className="space-y-6">
            {/* Date Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                        Start Date
                    </label>
                    <input
                        type="date"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="mt-1 p-2 rounded border bg-white dark:bg-zinc-800 dark:text-white cursor-pointer"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                        End Date
                    </label>
                    <input
                        type="date"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        className="mt-1 p-2 rounded border bg-white dark:bg-zinc-800 dark:text-white cursor-pointer"
                    />
                </div>
            </div>

            {/* Value Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                        Min Value: {minValue}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={minValue}
                        onChange={(e) => setMinValue(Number(e.target.value))}
                        className="mt-1 p-2 rounded border bg-white dark:bg-zinc-800 dark:text-white cursor-pointer"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                        Max Value: {maxValue}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={maxValue}
                        onChange={(e) => setMaxValue(Number(e.target.value))}
                        className="mt-1 p-2 rounded border bg-white dark:bg-zinc-800 dark:text-white cursor-pointer"
                    />
                </div>
            </div>

            {/* Data Chart */}
            {filtered.length === 0 ? (
                <p className="text-zinc-500 dark:text-zinc-400 text-sm italic">
                    No data points match your filters.
                </p>
            ) : (
                <DataChart data={filtered} />
            )}
        </div>
    )
}
