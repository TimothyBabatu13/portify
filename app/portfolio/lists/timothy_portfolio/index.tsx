'use client';
import { ThemeProvider } from "@/components/theme-provider"
import Page from "./components"
import { TooltipProvider } from "@/components/ui/tooltip"
import Navbar from "./components/navbar"
import { buildResumeData } from "./components/create-resume";

const Index = () => {

const resume = buildResumeData({
  name: "Timothy Babatunde Akanbi",
  email: "timothyakanbi.dev@gmail.com",
  summary:
    "Fullstack Developer with a strong passion for Web3, AI, and building scalable, user-friendly applications.",
  avatarUrl: "/images/timothy.png",
  location: "Lagos, Nigeria",
  description:
    "I build intelligent web experiences powered by blockchain and AI. Skilled in Next.js, TypeScript, and Solana ecosystem integrations.",
  skills: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Solana",
    "Web3.js",
    "Vercel AI SDK",
  ],
  education: [
    {
      school: "University of Lagos",
      degree: "B.Sc. in Computer Science",
      logoUrl: "/images/unilag-logo.png",
      start: "2018",
      end: "2022",
    },
  ],
  social: {
    GitHub: "https://github.com/TimothyBabatu13",
    X: "https://x.com/timothy_babs",
  },
  project: [
    {
      title: "Stampchain",
      href: "https://stampchain-eight.vercel.app/",
      active: true,
      description:
        "A web-based campaign platform built on Solana that turns ordinary promotions into on-chain rewards. Brands mint tokens and distribute them directly to users for real-world redemption.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NextAuth",
        "Supabase",
        "Web3.js",
        "Solana SDK",
      ],
      links: [
        { type: "Website", href: "https://stampchain-eight.vercel.app/" },
        { type: "GitHub", href: "https://github.com/TimothyBabatu13/Stampchain" },
      ],
      image: "/stampchain.png",
      video: "",
    },
    {
      title: "Vensol",
      href: "https://vensol.vercel.app/",
      active: true,
      description:
        "A decentralized payment app built on Solana that allows instant wallet-to-wallet transactions with QR-based payment sharing.",
      technologies: ["TypeScript", "React", "Web3.js", "Solana SDK", "Firebase"],
      links: [
        { type: "Website", href: "https://vensol.vercel.app/" },
        { type: "GitHub", href: "https://github.com/TimothyBabatu13/VenSol" },
      ],
      image: "/vensol.png",
      video: "",
    },
    {
      title: "TokenMind",
      href: "https://token-mind.vercel.app/",
      active: false,
      description:
        "An AI-powered token explorer that uses Vercel AI SDK and Civic Auth to fetch trending Solana tokens and analyze blockchain data.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Vercel AI SDK",
        "Web3.js",
        "Civic Auth",
      ],
      links: [
        { type: "Website", href: "https://token-mind.vercel.app/" },
        { type: "GitHub", href: "https://github.com/TimothyBabatu13/TokenMind" },
      ],
      image: "/tokenMind.png",
      video: "",
    },
    {
      title: "TokenMind",
      href: "https://token-mind.vercel.app/",
      active: false,
      description:
        "An AI-powered token explorer that uses Vercel AI SDK and Civic Auth to fetch trending Solana tokens and analyze blockchain data.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Vercel AI SDK",
        "Web3.js",
        "Civic Auth",
      ],
      links: [
        { type: "Website", href: "https://token-mind.vercel.app/" },
        { type: "GitHub", href: "https://github.com/TimothyBabatu13/TokenMind" },
      ],
      image: "/tokenMind.png",
      video: "",
    },
  ],
});


  return (
    <section className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}> 
                <Page data={resume}/>
                <Navbar data={resume}/>
            </TooltipProvider>
        </ThemeProvider>
    </section>
  )
}

export default Index