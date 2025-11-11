"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CreatePortfolioCard from "./components/create-portfolio-card"
import { templates } from "@/lib/create_portfolio_data"
import { SelectDemo } from "./components/mobile-filter-select"

const PortfolioTemplates = () =>{
   
  const [activeFilter, setActiveFilter] = useState("all")
  
  const filteredTemplates = templates.filter((template) => {
    if (activeFilter === "all") return true
    return template.category === activeFilter
  })


  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Portfolio Templates</h1>
          <p className="text-muted-foreground mt-2">Choose a template and customize it for your portfolio</p>
        </div>

        <div className="gap-3 mb-8 hidden sm:flex">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("all")}
            className="font-medium"
          >
            All Templates
          </Button>
          <Button
            variant={activeFilter === "used" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("used")}
            className="font-medium"
          >
            Previously Used
          </Button>
          <Button
            variant={activeFilter === "new" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("new")}
            className="font-medium"
          >
            New Templates
          </Button>
        </div>

        <div className="mb-8 sm:hidden">
          <SelectDemo setActiveFilter={setActiveFilter}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <CreatePortfolioCard 
                description={template.description}
                id={template.id}
                name={template.name}
                src={template.screenshot}
                key={template.id}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground mb-4">No templates found</p>
              <Button onClick={() => setActiveFilter("all")}>View All Templates</Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}


export default PortfolioTemplates