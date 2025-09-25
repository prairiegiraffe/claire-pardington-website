interface SimpleCenteredCTAProps {
  title?: string;
  subtitle?: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  className?: string;
}

export default function SimpleCenteredCTA({
  title = "Boost your productivity. Start using our app today.",
  subtitle = "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
  primaryCTAText = "Get started",
  primaryCTAHref = "#",
  secondaryCTAText = "Learn more",
  secondaryCTAHref = "#",
  className = ""
}: SimpleCenteredCTAProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryCTAHref}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              {primaryCTAText}
            </a>
            <a href={secondaryCTAHref} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
              {secondaryCTAText} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}