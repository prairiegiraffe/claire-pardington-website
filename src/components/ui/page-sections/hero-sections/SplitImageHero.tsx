interface SplitImageHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  announcementText?: string;
  announcementHref?: string;
  logoSrc?: string;
  logoSrcDark?: string;
  logoAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function SplitImageHero({
  title = "Data to enrich your business",
  subtitle = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  ctaText = "Get started",
  ctaHref = "#",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "#",
  announcementText = "Anim aute id magna aliqua ad ad non deserunt sunt. Read more",
  announcementHref = "#",
  logoSrc = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
  logoSrcDark = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",
  logoAlt = "Your Company",
  imageSrc = "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80",
  imageAlt = "Hero image",
  className = ""
}: SplitImageHeroProps) {
  return (
    <div className={`relative bg-white dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <img
              alt={logoAlt}
              src={logoSrc}
              className="h-11 dark:hidden"
            />
            <img
              alt={logoAlt}
              src={logoSrcDark}
              className="h-11 not-dark:hidden"
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
                {announcementText.replace(' Read more', '')}{' '}
                <a href={announcementHref} className="font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl dark:text-white">
              {title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href={ctaHref}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                {ctaText}
              </a>
              <a href={secondaryCtaHref} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {secondaryCtaText} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full dark:bg-gray-800"
          />
        </div>
      </div>
    </div>
  )
}