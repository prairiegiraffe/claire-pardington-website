interface ThreeColumnBentoGridProps {
  eyebrow?: string;
  title?: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
  performanceTitle?: string;
  performanceSubtitle?: string;
  securityTitle?: string;
  securitySubtitle?: string;
  apisTitle?: string;
  apisSubtitle?: string;
  mobileImage?: string;
  performanceImageLight?: string;
  performanceImageDark?: string;
  securityImageLight?: string;
  securityImageDark?: string;
  className?: string;
}

export default function ThreeColumnBentoGrid({
  eyebrow = 'Deploy faster',
  title = 'Everything you need to deploy your app',
  mobileTitle = 'Mobile friendly',
  mobileSubtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  performanceTitle = 'Performance',
  performanceSubtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.',
  securityTitle = 'Security',
  securitySubtitle = 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.',
  apisTitle = 'Powerful APIs',
  apisSubtitle = 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.',
  mobileImage = 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png',
  performanceImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
  performanceImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png',
  securityImageLight = 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png',
  securityImageDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png',
  className = '',
}: ThreeColumnBentoGridProps) {
  return (
    <div className={`bg-gray-50 py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl dark:text-white">
          {title}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  {mobileTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {mobileSubtitle}
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl dark:shadow-none dark:outline dark:outline-white/20">
                  <img alt="" src={mobileImage} className="size-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  {performanceTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {performanceSubtitle}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img alt="" src={performanceImageLight} className="w-full max-lg:max-w-xs dark:hidden" />
                <img alt="" src={performanceImageDark} className="w-full hidden dark:block max-lg:max-w-xs" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  {securityTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {securitySubtitle}
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img alt="" src={securityImageLight} className="h-[min(152px,40cqw)] object-cover dark:hidden" />
                <img alt="" src={securityImageDark} className="h-[min(152px,40cqw)] object-cover hidden dark:block" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  {apisTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {apisSubtitle}
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60 dark:shadow-none">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <div className="text-sm text-gray-400">
                      <div className="text-gray-500">// API configuration</div>
                      <div className="mt-2">
                        <span className="text-blue-400">const</span> <span className="text-white">config</span> = {'{'}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">apiUrl</span>:{' '}
                        <span className="text-yellow-400">'https://api.example.com'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">timeout</span>: <span className="text-purple-400">5000</span>
                      </div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
