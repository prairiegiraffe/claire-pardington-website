interface TestimonialFeatureProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  testimonialQuote?: string;
  testimonialAuthorName?: string;
  testimonialAuthorRole?: string;
  testimonialAuthorAvatar?: string;
  className?: string;
}

export default function TestimonialFeature({
  eyebrow = 'Deploy faster',
  title = 'A better workflow',
  subtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  ctaText = 'Get started',
  ctaHref = '#',
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'Product screenshot',
  imageWidth = 2432,
  imageHeight = 1442,
  testimonialQuote = 'Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.',
  testimonialAuthorName = 'Maria Hill',
  testimonialAuthorRole = 'Marketing Manager',
  testimonialAuthorAvatar = 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  className = '',
}: TestimonialFeatureProps) {
  return (
    <div className={`overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">{subtitle}</p>
              <div className="mt-8">
                <a
                  href={ctaHref}
                  className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  {ctaText}
                </a>
              </div>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-300">
                <blockquote className="text-base/7">
                  <p>"{testimonialQuote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <img alt="" src={testimonialAuthorAvatar} className="size-6 flex-none rounded-full" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{testimonialAuthorName}</span> –{' '}
                    <span className="text-gray-600 dark:text-gray-400">{testimonialAuthorRole}</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt={imageAlt}
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
