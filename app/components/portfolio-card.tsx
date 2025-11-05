import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortfolioCardProps } from "@/lib/portfolio_data";
import Image from "next/image"
import Link from "next/link"


const PortfolioCard = ({ img, href, badge, id, name }: PortfolioCardProps) => {
  return (
    <div
        className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4"
    >
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            >
            <div 
                className="relative w-full h-64 sm:h-56"
            >
                <Image 
                    src={img}
                    className="size-full"
                    fill
                    alt={name}
                />
            </div>
        </Link>
        <h4 className="font-geist text-lg font-bold tracking-tighter mt-1">
            {name}
        </h4>
        <Badge className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            {badge}
        </Badge>
        <div className="flex items-center justify-between">
            <Link 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="text-primary hover:underline">View Portfolio</span>
            </Link>

            <Button 
                variant={'ghost'} 
                className="p-0 ml-2 hover:bg-[transparent] cursor-pointer"
            >
                Use Template
            </Button>
        </div>
        <p className="text-gray-500"></p>
    </div>
  )
}

export default PortfolioCard