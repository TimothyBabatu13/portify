import PortfolioSection from './portfolio-section';

  export default function AvailablePortfolios() {
    return (
      <section id="portfolios" className="relative py-14 bg-background">
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
            <PortfolioSection />
          </div>
        </div>
      </section>
    );
  }
  