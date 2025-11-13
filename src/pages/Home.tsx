import { Zap, Paintbrush, Rocket, MessageCircle } from "lucide-react";

const Home = async () => {
  const res = await fetch("http://localhost:3000/api/quote");
  const quote = await res.json();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to BunSSR
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            A modern React Server-Side Rendering setup powered by Bun.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-md border border-blue-200 flex items-start">
              <Zap
                className="w-6 h-6 text-blue-900 mr-3 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-blue-900 mb-2">
                  Lightning Fast
                </h2>
                <p className="text-blue-700 text-sm">
                  Built with Bun for incredible performance and speed.
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-md border border-green-200 flex items-start">
              <Paintbrush
                className="w-6 h-6 text-green-900 mr-3 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-green-900 mb-2">
                  Beautiful UI
                </h2>
                <p className="text-green-700 text-sm">
                  Styled with Tailwind CSS and shadcn/ui components.
                </p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-md border border-purple-200 flex items-start">
              <Rocket
                className="w-6 h-6 text-purple-900 mr-3 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-purple-900 mb-2">
                  SSR Ready
                </h2>
                <p className="text-purple-700 text-sm">
                  Server-side rendering out of the box for optimal SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl p-6 bg-white rounded-2xl shadow-md text-center mt-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <MessageCircle
              className="w-6 h-6 mr-2 text-gray-700"
              aria-hidden="true"
            />
            Random Quote
          </h2>
          <p className="text-gray-700 italic mb-2">"{quote.quote}"</p>
          <p className="text-gray-500">{quote.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
