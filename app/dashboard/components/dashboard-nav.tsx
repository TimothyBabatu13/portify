"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DashboardNavProps {
  user: {
    name: string
    email: string
    portfolioName: string
  }
}

export function DashboardNav({ user }: DashboardNavProps) {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="text-2xl font-bold text-foreground">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-foreground hover:text-muted-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/dashboard/items" className="text-foreground hover:text-muted-foreground transition-colors">
              Items
            </Link>
            <Link href="/dashboard/analytics" className="text-foreground hover:text-muted-foreground transition-colors">
              Analytics
            </Link>
            <Link href="/dashboard/settings" className="text-foreground hover:text-muted-foreground transition-colors">
              Settings
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right text-sm">
            <p className="font-medium text-foreground">{user.name}</p>
            <p className="text-muted-foreground">{user.portfolioName}</p>
          </div>
          <Button variant="outline" size="sm">
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  )
}
