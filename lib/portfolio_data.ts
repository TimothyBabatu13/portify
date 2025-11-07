export interface PortfolioCardProps {
    img: string;
    href: string;
    badge: "developer" | "designer" | "creator" | "photographer" | "writer" | "musician" | "artist";
    id?: string,
    name: string
}

const filePath = (name: string) => `/screenshot/${name}`;

export const portfolioData: PortfolioCardProps[] = [
    {
        img: filePath("test_1.png"),
        href: 'https://portfolio-v5-navy.vercel.app/',
        badge: 'developer',
        name: "Alex's Portfolio"
    },
    {
        img: filePath("test_2.png"),
        href: 'https://portfolio-timothybabatu13s-projects.vercel.app/',
        badge: 'designer',
        name: "Sophia's Portfolio"
    },
]