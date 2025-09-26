interface TwoRowThreeColumnBentoGridProps {
  eyebrow?: string;
  title?: string;
  performanceTitle?: string;
  performanceSubtitle?: string;
  performanceDescription?: string;
  releasesTitle?: string;
  releasesSubtitle?: string;
  releasesDescription?: string;
  speedTitle?: string;
  speedSubtitle?: string;
  speedDescription?: string;
  integrationsTitle?: string;
  integrationsSubtitle?: string;
  integrationsDescription?: string;
  networkTitle?: string;
  networkSubtitle?: string;
  networkDescription?: string;
  performanceImageLight?: string;
  performanceImageDark?: string;
  releasesImageLight?: string;
  releasesImageDark?: string;
  speedImageLight?: string;
  speedImageDark?: string;
  integrationsImageLight?: string;
  integrationsImageDark?: string;
  networkImageLight?: string;
  networkImageDark?: string;
  className?: string;
}

export default function TwoRowThreeColumnBentoGrid({
  eyebrow = 'Deploy faster',
  title = 'Everything you need to deploy your app',
  performanceTitle = 'Performance',
  performanceSubtitle = 'Lightning-fast builds',
  performanceDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.',
  releasesTitle = 'Releases',
  releasesSubtitle = 'Push to deploy',
  releasesDescription = 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
  speedTitle = 'Speed',
  speedSubtitle = 'Built for power users',
  speedDescription = 'Sed congue eros non finibus molestie. Vestibulum euismod augue.',
  integrationsTitle = 'Integrations',
  integrationsSubtitle = 'Connect your favorite tools',
  integrationsDescription = 'Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.',
  networkTitle = 'Network',
  networkSubtitle = 'Globally distributed CDN',
  networkDescription = 'Aenean vulputate justo commodo auctor vehicula in malesuada semper.',
  performanceImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png',
  performanceImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-performance.png',
  releasesImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png',
  releasesImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-releases.png',
  speedImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png',
  speedImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-speed.png',
  integrationsImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png',
  integrationsImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-integrations.png',
  networkImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png',
  networkImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-network.png',
  className = '',
}: TwoRowThreeColumnBentoGridProps) {
  return (
    <div className={`bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl dark:text-white">
          {title}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img alt="" src={performanceImageLight} className="h-80 object-cover object-left dark:hidden" />
              <img alt="" src={performanceImageDark} className="h-80 object-cover object-left hidden dark:block" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">{performanceTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  {performanceSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">{performanceDescription}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src={releasesImageLight}
                className="h-80 object-cover object-left lg:object-right dark:hidden"
              />
              <img
                alt=""
                src={releasesImageDark}
                className="h-80 object-cover object-left hidden dark:block lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">{releasesTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  {releasesSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">{releasesDescription}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img alt="" src={speedImageLight} className="h-80 object-cover object-left dark:hidden" />
              <img alt="" src={speedImageDark} className="h-80 object-cover object-left hidden dark:block" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">{speedTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">{speedSubtitle}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">{speedDescription}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img alt="" src={integrationsImageLight} className="h-80 object-cover dark:hidden" />
              <img alt="" src={integrationsImageDark} className="h-80 object-cover hidden dark:block" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">{integrationsTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  {integrationsSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">{integrationsDescription}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img alt="" src={networkImageLight} className="h-80 object-cover dark:hidden" />
              <img alt="" src={networkImageDark} className="h-80 object-cover hidden dark:block" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">{networkTitle}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  {networkSubtitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">{networkDescription}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
