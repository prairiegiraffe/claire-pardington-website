import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ScreenshotPanelFeatureProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageSrcDark?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function ScreenshotPanelFeature({
  eyebrow = 'Deploy faster',
  title = 'A better workflow',
  subtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
  imageSrcDark = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'Product screenshot',
  imageWidth = 2432,
  imageHeight = 1442,
  features = defaultFeatures,
  className = '',
}: ScreenshotPanelFeatureProps) {
  return (
    <div className={`overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">{subtitle}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt={imageAlt}
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  className="-mb-12 w-228 max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 dark:hidden"
                />
                <img
                  alt={imageAlt}
                  src={imageSrcDark}
                  width={imageWidth}
                  height={imageHeight}
                  className="-mb-12 w-228 max-w-none rounded-tl-xl bg-gray-950 ring-1 ring-white/10 not-dark:hidden"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl dark:ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
