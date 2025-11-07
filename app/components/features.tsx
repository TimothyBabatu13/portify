import {
    Compass,
    Zap,
    User,
    ShieldCheck,
    Wand,
  } from 'lucide-react';
  
  const features = [
    {
      icon: <Compass className="h-6 w-6" />,
      title: 'Beginner-Friendly',
      desc: 'Create your professional portfolio in minutes. No code, no setup — just your details and your story, perfectly presented.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Publishing',
      desc: 'One click and your portfolio goes live. Hosted instantly on a unique Portify link (e.g., yourname.portify.io).',
    },
    {
      icon: <User className="h-6 w-6" />,
      title: 'For Every Creator',
      desc: 'Developers, designers, freelancers — anyone can find a layout that fits their personal brand perfectly.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Reliable & Fast',
      desc: 'Your portfolio is hosted securely and optimized for performance — fast load times and global delivery by default.',
    },
    {
      icon: <Wand className="h-6 w-6" />,
      title: 'Always Evolving',
      desc: 'New templates, customization options, and integrations are added regularly to help you stand out effortlessly.',
    },
    // {
    //   icon: <Github className="h-6 w-6" />,
    //   title: 'Fully Open Source',
    //   desc: 'Your can clone the project and run it locally. Customize it to your liking.',
    // },
  ];
  export default function Features() {
    return (
      <section id="features" className="relative py-14 bg-background">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="relative mx-auto max-w-2xl sm:text-center">
            <div className="relative z-10">
              <h3 className="text-violet-500 font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                Crafted to Inspire Excellence
              </h3>
              <p className="font-geist text-foreground/60 mt-3">
                Explore a collection of projects that showcase innovation, creativity, and real-world impact.
              </p>
            </div>
            <div
              className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            ></div>
          </div>
          <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4"
                >
                  <div className="text-primary w-fit transform-gpu rounded-full border p-4">
                    {item.icon}
                  </div>
                  <h4 className="font-geist text-lg font-bold tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  