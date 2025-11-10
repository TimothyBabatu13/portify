"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Jan 1", views: 120, engagement: 40 },
  { date: "Jan 5", views: 240, engagement: 60 },
  { date: "Jan 10", views: 280, engagement: 75 },
  { date: "Jan 15", views: 320, engagement: 85 },
  { date: "Jan 20", views: 450, engagement: 95 },
  { date: "Jan 25", views: 380, engagement: 70 },
  { date: "Jan 30", views: 520, engagement: 110 },
]

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis
          dataKey="date"
          stroke="var(--muted-foreground)"
          style={{ fontSize: "12px" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis stroke="var(--muted-foreground)" style={{ fontSize: "12px" }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{ color: "var(--foreground)" }}
        />
        <Line type="monotone" dataKey="views" stroke="var(--primary)" strokeWidth={2} dot={false} name="Views" />
        <Line
          type="monotone"
          dataKey="engagement"
          stroke="var(--muted-foreground)"
          strokeWidth={2}
          dot={false}
          name="Engagement"
          opacity={0.5}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
