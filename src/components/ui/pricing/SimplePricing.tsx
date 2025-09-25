interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  popular?: boolean;
}

interface SimplePricingProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

const defaultPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for getting started',
    features: ['Up to 5 projects', '10GB storage', 'Email support', 'Basic analytics'],
    buttonText: 'Start free trial',
    buttonHref: '#'
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Best for growing teams',
    features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics', 'Custom integrations'],
    buttonText: 'Start free trial',
    buttonHref: '#',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations',
    features: ['Everything in Professional', 'Unlimited storage', '24/7 phone support', 'Custom contracts', 'Dedicated manager'],
    buttonText: 'Contact sales',
    buttonHref: '#'
  }
];

export default function SimplePricing({
  title = "Simple, transparent pricing",
  subtitle = "Choose the perfect plan for your needs. Always know what you'll pay.",
  plans = defaultPlans
}: SimplePricingProps) {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ${
                plan.popular
                  ? 'bg-primary/5 ring-primary'
                  : 'bg-white dark:bg-gray-800 ring-gray-200 dark:ring-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="flex items-center justify-center">
                  <p className="rounded-full bg-primary px-4 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                </div>
              )}
              <div className={plan.popular ? 'mt-4' : ''}>
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                    /month
                  </span>
                </p>
                <a
                  href={plan.buttonHref}
                  className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    plan.popular
                      ? 'bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:outline-primary'
                      : 'bg-gray-50 dark:bg-gray-700 text-primary hover:bg-gray-100 dark:hover:bg-gray-600 focus-visible:outline-primary'
                  }`}
                >
                  {plan.buttonText}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}