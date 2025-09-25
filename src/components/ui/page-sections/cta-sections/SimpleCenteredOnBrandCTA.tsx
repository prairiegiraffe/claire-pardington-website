interface SimpleCenteredOnBrandCTAProps {
  title?: string;
  subtitle?: string;
  primaryCTAText?: string;
  primaryCTAHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  className?: string;
}

export default function SimpleCenteredOnBrandCTA({
  title = "Boost your productivity. Start using our app today.",
  subtitle = "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
  primaryCTAText = "Get started",
  primaryCTAHref = "#",
  secondaryCTAText = "Learn more",
  secondaryCTAHref = "#",
  className = ""
}: SimpleCenteredOnBrandCTAProps) {
  return (
    <div className={`bg-indigo-700 ${className}`}>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-indigo-200">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryCTAHref}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
            >
              {primaryCTAText}
            </a>
            <a href={secondaryCTAHref} className="text-sm/6 font-semibold text-white">
              {secondaryCTAText}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}