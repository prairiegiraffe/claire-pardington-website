export default function PrivacyFullWidthBanner() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 border-t border-gray-900/10 bg-white p-6 shadow-lg md:flex-row md:items-center lg:px-8 dark:border-white/10 dark:bg-gray-800 dark:shadow-none">
      <p className="max-w-4xl text-sm/6 text-gray-900 dark:text-white">
        This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
        consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious.
        See our{' '}
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-gray-700 dark:inset-ring dark:inset-ring-white/10 dark:hover:bg-white/15 dark:focus-visible:outline-white"
        >
          Accept all
        </button>
        <button
          type="button"
          className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}
