"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp } from "lucide-react"

interface RecentItemCardProps {
  item: {
    id: number
    title: string
    date: string
    views: number
    engagement: string
  }
}

export function RecentItemCard({ item }: RecentItemCardProps) {
  return (
    <Card className="p-5 border border-border hover:border-border/80 group transition-all cursor-pointer">
      <Link href={`/dashboard/portfolio/${item.id}/edit`}>
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
              {item.title}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Eye className="w-3.5 h-3.5" />
                <span>{item.views} views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{item.engagement}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  )
}
