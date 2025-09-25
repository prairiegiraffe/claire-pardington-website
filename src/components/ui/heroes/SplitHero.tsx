interface SplitHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function SplitHero({
  title = "Scale your business with our platform",
  subtitle = "Everything you need to grow your business, all in one place. Build faster, deploy smarter, and scale better with our comprehensive platform.",
  ctaText = "Start free trial",
  ctaHref = "#",
  imageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Hero image"
}: SplitHeroProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href={ctaHref}
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {ctaText}
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Live demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:aspect-auto lg:h-full"
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}