import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";
import Year from "./time";
import { Suspense } from "react";
const socialLinks = [
  { icon: Twitter, name: "Twitter", href: "#" },
  { icon: Instagram, name: "Instagram", href: "#" },
  { icon: Youtube, name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <div className="bg-background relative z-[60]">
        <footer id="contact" className="max-w-screen-lg mx-auto px-0 pt-20 md:pt-32 pb-12 bg-background">
        <div className="px-10 py-10 rounded-lg md:py-0 ">
            <div className="flex flex-col md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                <div className="space-y-4">
                <Link href="/" className="flex items-center gap-1 text-primary">
                    <span className="text-xl font-geist">Powered by Vercel</span>
                </Link>
                <p className="text-sm text-muted-foreground max-w-[250px]">
                    Create a portfolio that tells your story — simple to build, stunning to share.
                </p>
                <Link
                    className="inline-block text-sm border border-accent hover:border-accent/40 duration-200 cursor-pointer px-2 py-1 cursor-pointer"
                    href="https://x.com/timothy_akanbii"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex gap-1 items-center">
                    <span className="text-muted-foreground font-medium">
                        Built by
                    </span>
                    <span className="font-bold ml-1 text-base flex items-center tracking-tight">
                        @timothy_akanbii
                    </span>
                    </div>
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
                {/* <div className="space-y-3">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                    <Link href="https://github.com/vishvsalvi/conceptmap.ai" target='_blank'>
                    <Github /> Star on Github
                    </Link>
                    </Button>
                    <ul className="space-y-2">
                    </ul>
                </div> */}
                </div>
            </div>
            <hr className="my-8 bg-accent" />
            <Suspense fallback={null}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                    © <Year /> Portfify. All rights reserved.
                    </p>
                </div>
            </Suspense>
            </div>
        </div>
        </footer>
    </div>
  );
}