import { Suspense } from "react"
import { UI } from "./UI"

export default async function Dashboard() {
  return (
    <Suspense
        fallback={null}
    >
        <UI />
    </Suspense>
  )
}
