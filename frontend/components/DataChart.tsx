'use client'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts'
import type { DataPoint } from '@/src/types'

// Convert ISO timestamp to something readable
function formatTimestamp(ts: string) {
    return new Date(ts).toLocaleDateString('en-UK', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })
}

type Props = {
    data: DataPoint[]
}

export default function DataChart({ data }: Props) {
    return (
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">📈 Environmental Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="timestamp"
                        tickFormatter={formatTimestamp}
                        stroke="#8884d8"
                    />
                    <YAxis stroke="#8884d8" />
                    <Tooltip
                        labelFormatter={formatTimestamp}
                        contentStyle={{ backgroundColor: '#f4f4f5', borderRadius: '8px' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        animationDuration={800}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
