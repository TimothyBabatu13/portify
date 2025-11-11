"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { templates } from "@/lib/create_portfolio_data"


interface PortfolioTemplateDialogProps {
  template_id: string
  isOpen: boolean
  onClose: () => void
}

export const PortfolioTemplateDialog = ({ template_id, isOpen, onClose }: PortfolioTemplateDialogProps) => {
  const [portfolioName, setPortfolioName] = useState("")
  const [portfolioDescription, setPortfolioDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const template = templates.filter(({id}) => id === template_id)[0]
  console.log(template)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-background border border-border">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-2xl font-bold text-foreground mb-2">Use {template.name}</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Fill in your portfolio information to get started with this template
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Portfolio Name</label>
              <Input
                type="text"
                placeholder="My Design Portfolio"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
                required
                className="bg-card border border-border text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Portfolio Description</label>
              <textarea
                placeholder="Describe your portfolio and your work..."
                value={portfolioDescription}
                onChange={(e) => setPortfolioDescription(e.target.value)}
                required
                className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!portfolioName.trim() || !portfolioDescription.trim() || isSubmitting}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Creating..." : "Create Portfolio"}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
