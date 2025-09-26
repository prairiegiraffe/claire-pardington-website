interface SimpleStackedCTAProps {
  title?: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  className?: string;
}

export default function SimpleStackedCTA({
  title = 'Boost your productivity. Start using our app today.',
  primaryCTAText = 'Get started',
  primaryCTAHref = '#',
  secondaryCTAText = 'Learn more',
  secondaryCTAHref = '#',
  className = '',
}: SimpleStackedCTAProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          {title}
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href={primaryCTAHref}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            {primaryCTAText}
          </a>
          <a
            href={secondaryCTAHref}
            className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {secondaryCTAText} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
