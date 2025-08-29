import { useState } from "react";
import { properties } from "../../data/properties";

export default function PropertyGrid() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoading(false);
    }, 1000); // Simulate loading for 1 second
  };

  return (
    <section id="properties" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#94792f] font-bold mb-8 text-center">
          Our Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {properties.slice(0, visibleCount).map((property) => (
            <div
              key={property.id}
              className="relative bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col cursor-pointer"
            >
              <div className="rounded-md mb-4 overflow-hidden flex h-48">
                <img
                  src={property.photos[0].src}
                  alt={property.name}
                  className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 cursor-pointer hover:scale-105"
                  width={400}
                  height={192}
                  loading="lazy" // <-- Added for lazy loading
                />
              </div>
              <div className="px-4 py-2">
                <span className="text-[#94792f] font-medium">
                  {property.price}
                </span>
                <h3 className="text-base text-[#1b3942] font-semibold mb-2">
                  {property.name}
                </h3>
                <div className="flex align-baseline justify-between">
                  <span className="text-sm text-[#1b3942]">
                    Bedrooms: {property.bedrooms}
                  </span>
                  <span className="text-sm text-[#1b3942]">
                    Bathrooms: {property.bathrooms}
                  </span>
                  <span className="text-sm text-[#1b3942]">
                    Size: {property.size}
                  </span>
                </div>
              </div>
              <div className="text-xs absolute top-2 right-0 w-full px-2 flex justify-end">
                <span className="bg-[#94792f] rounded-full px-2 text-white block w-fit">
                  {property.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < properties.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#94792f] text-white rounded-lg hover:bg-[#7a6426] transition"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
