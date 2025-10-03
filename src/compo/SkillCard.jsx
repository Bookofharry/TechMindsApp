import image from '../assets/join.jpg'
export default function HeroSplit() {
  return (
    <section className="dark:bg-gray-900 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                `url(${image})`,
            }}
          />
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span className="text-blue-500">Idea</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Turn that spark into something real. At Tech Minds Academy, you’ll learn the modern tools, gain hands-on experience, and get mentorship that shortens your learning curve. From your first wireframe to your first deployed app, we’re with you—step by step.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </button>
            {/* If using React Router:
            <Link
              to="/start"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </Link>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
