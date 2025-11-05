import { portfolioData } from "@/lib/portfolio_data"
import PortfolioCard from "./portfolio-card"

const PortfolioSection = () => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {portfolioData.map(({badge, href, img, name}) => (
            <PortfolioCard 
                key={name} 
                badge={badge} 
                href={href} 
                img={img} 
                name={name} 
            />
        ))} 
    </div>
  )
}

export default PortfolioSection