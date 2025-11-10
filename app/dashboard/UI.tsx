import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { DashboardNav } from "./components/dashboard-nav"
import { PerformanceChart } from "./components/perfomance-chart"
import { RecentItemCard } from "./components/recent-item-card"
import { redirect } from "next/navigation"
import { getUserSession } from "@/lib/session"

export const UI = async () => {
  const user = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    portfolioName: "Web Design Showcase",
  }

  const stats = [
    { label: "Portfolio Views", value: "2,450", change: "+12%", trend: "up" },
    { label: "Portfolio Items", value: "12", change: "+2", trend: "up" },
    { label: "Followers", value: "384", change: "+45", trend: "up" },
    { label: "Engagement Rate", value: "8.2%", change: "+0.5%", trend: "up" },
  ]

  const recentItems = [
    { id: 1, title: "E-commerce Platform", date: "2024-01-15", views: 342, engagement: "24%" },
    { id: 2, title: "SaaS Dashboard", date: "2024-01-10", views: 289, engagement: "18%" },
    { id: 3, title: "Mobile App UI", date: "2024-01-05", views: 156, engagement: "12%" },
  ]
  const response = await getUserSession();


  if(!response) {
    return redirect('/');
  }

  console.log(response.family_name)
  return (
    <main className="min-h-screen bg-background">
      <DashboardNav 
        name={response.name}
        portfolioName={response.name.split(" ")[0] + "'s Portfolio"}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Welcome back, {response.name.split(" ")[0]}
              </h1>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                Track your portfolio performance and manage your creative work
              </p>
            </div>
            <Link href="/dashboard/portfolio">
              <Button size="lg" className="font-medium">
                Edit Portfolio
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border border-border hover:border-border/80 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-tight">{stat.label}</p>
                <div className="text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                  {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </div>
              </div>
              <div className="flex items-end justify-between gap-3">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground/70">{stat.change}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Performance Chart */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border border-border">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-foreground">Performance Overview</h2>
                <p className="text-sm text-muted-foreground mt-1">Last 30 days activity</p>
              </div>
              <PerformanceChart />
            </Card>

            {/* Recent Items Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Recent Items</h2>
                <Link href="/dashboard/items">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {recentItems.map((item) => (
                  <RecentItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Quick Actions */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-foreground">Quick Actions</h2>

              <div className="space-y-3">
                <Link href="/dashboard/portfolio/new">
                  <Button variant="default" className="w-full justify-center font-medium">
                    Add New Item
                  </Button>
                </Link>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full justify-center font-medium bg-transparent">
                    Portfolio Settings
                  </Button>
                </Link>
                <Link href="/portfolio/1">
                  <Button variant="outline" className="w-full justify-center font-medium bg-transparent">
                    View Public Portfolio
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-center font-medium bg-transparent">
                  Share Portfolio
                </Button>
              </div>
            </div>

            <Card className="p-6 border border-border/50 bg-muted/30">
              <h3 className="font-bold text-foreground mb-3 text-sm">Pro Tip</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regular updates to your portfolio attract more viewers and boost your engagement metrics.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
