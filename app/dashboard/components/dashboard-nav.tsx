
import Link from "next/link"
import { LogOutButton } from "./log-out-button"
import { Suspense } from "react"

interface DashboardNavProps {
    name: string
    portfolioName: string
}

export function DashboardNav({ name, portfolioName }: DashboardNavProps) {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-foreground">
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
            <p className="font-medium text-foreground">{name}</p>
            <p className="text-muted-foreground">{portfolioName}</p>
          </div>
          <Suspense fallback={null}>
            <LogOutButton />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
