// About Component
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About This Project
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Learn more about our Bun + React SSR implementation.
          </p>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              What is BunSSR?
            </h2>
            <p className="text-gray-600 mb-4">
              BunSSR is a lightweight, fast, and modern approach to building
              server-side rendered React applications using Bun as the runtime.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Server-side rendering with React</li>
              <li>Bun runtime for blazing fast performance</li>
              <li>Tailwind CSS for styling</li>
              <li>Zero client-side routing overhead</li>
              <li>SEO-friendly by default</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
              Get Started
            </h2>
            <p className="text-gray-600">
              Check out our documentation and start building your own SSR
              applications with Bun today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
