interface PortfolioTemplate {
  id: string
  name: string
  description: string
  category: "all" | "used" | "new"
  screenshot: string
  preview: string
}

export const templates: PortfolioTemplate[] = [
    {
      id: "1",
      name: "Minimal Showcase",
      description: "Clean, minimalist portfolio template perfect for designers",
      category: "used",
      screenshot: "/minimal-portfolio-template.png",
      preview: "/preview/minimal",
    },
    {
      id: "2",
      name: "Creative Studio",
      description: "Modern template for creative professionals",
      category: "new",
      screenshot: "/creative-studio-portfolio.jpg",
      preview: "/preview/studio",
    },
    {
      id: "3",
      name: "Developer Hub",
      description: "Perfect for showcasing projects and code",
      category: "used",
      screenshot: "/developer-portfolio.png",
      preview: "/preview/developer",
    },
    {
      id: "4",
      name: "Photography Pro",
      description: "Gallery-focused template for photographers",
      category: "new",
      screenshot: "/photography-portfolio.jpg",
      preview: "/preview/photography",
    },
    {
      id: "5",
      name: "Business Profile",
      description: "Professional template for business consultants",
      category: "new",
      screenshot: "/business-portfolio.jpg",
      preview: "/preview/business",
    },
    {
      id: "6",
      name: "Artist Portfolio",
      description: "Artistic template for visual artists",
      category: "used",
      screenshot: "/artist-portfolio.png",
      preview: "/preview/artist",
    },
  ]