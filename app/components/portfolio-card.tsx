import Image from "next/image"
import Link from "next/link"

const PortfolioCard = ({ img, href }: {
    img: string,
    href: string
}) => {
  return (
    <Link
        className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4"
        href={href}
    >
        <div 
            className="relative w-full h-64 sm:h-56"
        >
            <Image 
                src={img}
                className="size-full"
                fill
                alt=""
            />
        </div>
        <h4 className="font-geist text-lg font-bold tracking-tighter">
            
        </h4>
        <p className="text-gray-500"></p>
    </Link>
  )
}

export default PortfolioCard