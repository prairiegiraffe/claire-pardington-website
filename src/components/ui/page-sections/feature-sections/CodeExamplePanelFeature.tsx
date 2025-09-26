import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CodeExamplePanelFeatureProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  codeExample?: React.ReactNode;
  activeTab?: string;
  inactiveTab?: string;
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

const defaultCodeExample = (
  <div className="bg-gray-800 text-gray-300 p-6 text-sm font-mono">
    <div className="text-blue-400">import</div>
    <div className="ml-4">
      {'{ useState, useEffect }'} <span className="text-blue-400">from</span>{' '}
      <span className="text-green-400">'react'</span>
    </div>
    <br />
    <div className="text-purple-400">export default function</div>{' '}
    <span className="text-yellow-400">NotificationSettings</span>() {'{'}
    <div className="ml-4">
      <div className="text-blue-400">const</div> [notifications, setNotifications] ={' '}
      <span className="text-yellow-400">useState</span>(<span className="text-green-400">true</span>)
    </div>
    <br />
    <div className="ml-4">
      <div className="text-blue-400">return</div> (
      <div className="ml-4">
        {'<div className="p-4">'}
        <div className="ml-4">
          {'<h2>Notification Settings</h2>'}
          <br />
          {'<button onClick={() => setNotifications(!notifications)}>'}
          <div className="ml-4">{'{notifications ? "Disable" : "Enable"}'}</div>
          {'</button>'}
        </div>
        {'</div>'}
      </div>
      )
    </div>
    {'}'}
  </div>
);

export default function CodeExamplePanelFeature({
  eyebrow = 'Deploy faster',
  title = 'A better workflow',
  subtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  codeExample = defaultCodeExample,
  activeTab = 'NotificationSetting.jsx',
  inactiveTab = 'App.jsx',
  features = defaultFeatures,
  className = '',
}: CodeExamplePanelFeatureProps) {
  return (
    <div className={`overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">{subtitle}</p>
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
                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        {activeTab}
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">{inactiveTab}</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{codeExample}</div>
                </div>
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
