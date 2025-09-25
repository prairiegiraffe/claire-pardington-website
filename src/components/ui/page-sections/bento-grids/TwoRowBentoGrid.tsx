interface TwoRowBentoGridProps {
  eyebrow?: string;
  title?: string;
  releasesTitle?: string;
  releasesSubtitle?: string;
  releasesDescription?: string;
  integrationsTitle?: string;
  integrationsSubtitle?: string;
  integrationsDescription?: string;
  securityTitle?: string;
  securitySubtitle?: string;
  securityDescription?: string;
  performanceTitle?: string;
  performanceSubtitle?: string;
  performanceDescription?: string;
  releasesImageLight?: string;
  releasesImageDark?: string;
  integrationsImageLight?: string;
  integrationsImageDark?: string;
  securityImageLight?: string;
  securityImageDark?: string;
  performanceImageLight?: string;
  performanceImageDark?: string;
  className?: string;
}

export default function TwoRowBentoGrid({
  eyebrow = "Deploy faster",
  title = "Everything you need to deploy your app",
  releasesTitle = "Releases",
  releasesSubtitle = "Push to deploy",
  releasesDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.",
  integrationsTitle = "Integrations",
  integrationsSubtitle = "Connect your favorite tools",
  integrationsDescription = "Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.",
  securityTitle = "Security",
  securitySubtitle = "Advanced access control",
  securityDescription = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  performanceTitle = "Performance",
  performanceSubtitle = "Lightning-fast builds",
  performanceDescription = "Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum vulputate.",
  releasesImageLight = "https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png",
  releasesImageDark = "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-releases.png",
  integrationsImageLight = "https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png",
  integrationsImageDark = "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-integrations.png",
  securityImageLight = "https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png",
  securityImageDark = "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-security.png",
  performanceImageLight = "https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png",
  performanceImageDark = "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-performance.png",
  className = ""
}: TwoRowBentoGridProps) {
  return (
    <div className={`bg-gray-50 py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          {title}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src={releasesImageLight}
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src={releasesImageDark}
                className="h-80 object-cover object-left hidden dark:block"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">{releasesTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{releasesSubtitle}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  {releasesDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src={integrationsImageLight}
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src={integrationsImageDark}
                className="h-80 object-cover hidden dark:block"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">{integrationsTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  {integrationsSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  {integrationsDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src={securityImageLight}
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src={securityImageDark}
                className="h-80 object-cover hidden dark:block"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">{securityTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  {securitySubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  {securityDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src={performanceImageLight}
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src={performanceImageDark}
                className="h-80 object-cover object-left hidden dark:block"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">{performanceTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  {performanceSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  {performanceDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}