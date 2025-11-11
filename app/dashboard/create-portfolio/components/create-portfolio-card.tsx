import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { PortfolioTemplateDialog } from "./create-portfolio-dialog"

interface CreatePortfolioCardType {
    id: string,
    src: string,
    name: string,
    description: string,
}

const CreatePortfolioCard = ({ description, id, name, src } :  CreatePortfolioCardType) => {

    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
    const [showDialog, setShowDialog] = useState(false)

  return (
    <Card 
        key={id} 
        className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0"
    >
        {/* Screenshot Preview */}
        <div className="h-48 bg-muted overflow-hidden relative">
            <Image
                src={src}
                alt={name}
                className="w-full h-full object-cover"
                fill
                draggable={false}
            />
        </div>
        {/* Template Info */}
        <div className="p-5 pt-0">
            <h3 className="font-bold text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            <Button
                onClick={() => {
                    setSelectedTemplate(id);
                    setShowDialog(true)
                }}
                className="w-full mt-5 bg-primary text-primary-foreground hover:bg-primary/90"
            >
                Use Portfolio Template
            </Button>
        </div>

        {selectedTemplate && (
            <PortfolioTemplateDialog 
                template_id={id} 
                isOpen={showDialog} 
                onClose={() => setShowDialog(false)} 
            />
      )}
    </Card>
  )
}

export default CreatePortfolioCard