import { Suspense } from "react"
import { DashboardNav } from "./components/dashboard-nav"

const layout = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <div>
      <Suspense fallback={null}>
        <DashboardNav />
      </Suspense>
      <section>
        {children}
      </section>
    </div>
  )
}

export default layout