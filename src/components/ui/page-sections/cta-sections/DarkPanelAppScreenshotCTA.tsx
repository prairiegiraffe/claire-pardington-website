interface DarkPanelAppScreenshotCTAProps {
  title?: string;
  subtitle?: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

export default function DarkPanelAppScreenshotCTA({
  title = 'Boost your productivity. Start using our app today.',
  subtitle = 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
  primaryCTAText = 'Get started',
  primaryCTAHref = '#',
  secondaryCTAText = 'Learn more',
  secondaryCTAHref = '#',
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'App screenshot',
  imageWidth = 1824,
  imageHeight = 1080,
  className = '',
}: DarkPanelAppScreenshotCTAProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            style={{ mask: 'radial-gradient(closest-side, white, transparent)' }}
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={primaryCTAHref}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-gray-700 dark:text-white dark:shadow-none dark:inset-ring dark:inset-ring-white/5 dark:hover:bg-gray-600 dark:focus-visible:outline-white"
              >
                {primaryCTAText}
              </a>
              <a href={secondaryCTAHref} className="text-sm/6 font-semibold text-white hover:text-gray-100">
                {secondaryCTAText}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt={imageAlt}
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
