export default function BusinessCtaSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      
      
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Bring your Value to the <span className="text-blue-500">next level.</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Join Techminds Academy and transform your passion for technology into a successful career. Learn from industry experts and build the future with cutting-edge skills.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <button
            type="button"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Join Us Now
          </button>
          {/* If using React Router:
          <Link
            to="/signup"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Sign Up
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}
