import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface AppHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  announcementBadge?: string;
  announcementText?: string;
  logoSrc?: string;
  logoSrcDark?: string;
  logoAlt?: string;
  imageSrc?: string;
  imageSrcDark?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  withImageBorder?: boolean;
  className?: string;
}

export default function AppHero({
  title = 'Deploy to the cloud with confidence',
  subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  ctaText = 'Get started',
  ctaHref = '#',
  secondaryCtaText = 'Learn more',
  secondaryCtaHref = '#',
  announcementBadge = "What's new",
  announcementText = 'Just shipped v1.0',
  logoSrc = 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
  logoSrcDark = 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500',
  logoAlt = 'Your Company',
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
  imageSrcDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'App screenshot',
  imageWidth = 2432,
  imageHeight = 1442,
  withImageBorder = true,
  className = '',
}: AppHeroProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-white dark:bg-gray-900 ${className}`}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <img alt={logoAlt} src={logoSrc} className="h-11 dark:hidden" />
          <img alt={logoAlt} src={logoSrcDark} className="h-11 not-dark:hidden" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/25">
                {announcementBadge}
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                <span>{announcementText}</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400 dark:text-gray-500" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
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
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            {withImageBorder ? (
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/2.5 dark:ring-white/10">
                <img
                  alt={imageAlt}
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 dark:hidden"
                />
                <img
                  alt={imageAlt}
                  src={imageSrcDark}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 not-dark:hidden"
                />
              </div>
            ) : (
              <>
                <img
                  alt={imageAlt}
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 dark:hidden"
                />
                <img
                  alt={imageAlt}
                  src={imageSrcDark}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 not-dark:hidden"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
