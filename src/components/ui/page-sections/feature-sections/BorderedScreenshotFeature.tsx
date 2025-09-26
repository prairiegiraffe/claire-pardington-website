interface BorderedScreenshotFeatureProps {
  title?: string;
  imageSrc?: string;
  imageSrcDark?: string;
  imageAlt?: string;
  className?: string;
}

export default function BorderedScreenshotFeature({
  title = 'Everything you need to deploy your app',
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
  imageSrcDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'App screenshot',
  className = '',
}: BorderedScreenshotFeatureProps) {
  return (
    <div className={`overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance dark:text-white">
          {title}
        </p>
        <div className="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
          <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] shadow-xs ring-1 ring-black/5 dark:bg-white/2.5 dark:ring-white/10" />
          <img
            alt={imageAlt}
            src={imageSrc}
            className="h-full rounded-xl shadow-2xl ring-1 ring-black/10 dark:hidden dark:ring-white/10"
          />
          <img
            alt={imageAlt}
            src={imageSrcDark}
            className="h-full rounded-xl shadow-2xl ring-1 ring-black/10 not-dark:hidden dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
