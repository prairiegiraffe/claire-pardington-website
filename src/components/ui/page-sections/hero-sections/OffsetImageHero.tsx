'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavigationItem {
  name: string;
  href: string;
}

interface OffsetImageHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  logoSrc?: string;
  logoSrcDark?: string;
  logoAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  navigation?: NavigationItem[];
  loginText?: string;
  loginHref?: string;
  className?: string;
}

const defaultNavigation: NavigationItem[] = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function OffsetImageHero({
  title = "We're changing the way people connect",
  subtitle = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  ctaText = "Get started",
  ctaHref = "#",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "#",
  logoSrc = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
  logoSrcDark = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",
  logoAlt = "Your Company",
  imageSrc = "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
  imageAlt = "Hero image",
  navigation = defaultNavigation,
  loginText = "Log in",
  loginHref = "#",
  className = ""
}: OffsetImageHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{logoAlt}</span>
              <img
                alt=""
                src={logoSrc}
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt=""
                src={logoSrcDark}
                className="h-8 w-auto not-dark:hidden"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={loginHref} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
              {loginText} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">{logoAlt}</span>
                <img
                  alt=""
                  src={logoSrc}
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  alt=""
                  src={logoSrcDark}
                  className="h-8 w-auto not-dark:hidden"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={loginHref}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                  >
                    {loginText}
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14 dark:from-indigo-950/10">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96 dark:bg-gray-800/30 dark:shadow-indigo-400/10 dark:ring-white/5"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto dark:text-white">
              {title}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                {subtitle}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href={ctaHref}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  {ctaText}
                </a>
                <a href={secondaryCtaHref} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  {secondaryCtaText} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt={imageAlt}
              src={imageSrc}
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 dark:outline-white/10"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" />
      </div>
    </div>
  )
}