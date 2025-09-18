import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 z-50 overflow-hidden">
      {/* Main Content Lines Only */}
      <div className="p-6 h-full overflow-hidden">
        {/* Top Section Lines */}
        <div className="mb-8 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>

        {/* Chart Area Lines */}
        <div className="mb-8 space-y-4">
          <div className="h-5 bg-gray-200 rounded w-64 animate-pulse"></div>
          <div className="h-64 bg-gray-100 rounded-xl p-6">
            <div className="space-y-4 h-full">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 rounded animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    width: `${30 + Math.random() * 60}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table Lines */}
        <div className="space-y-4">
          <div className="h-5 bg-gray-200 rounded w-40 animate-pulse"></div>
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 py-3">
                <div
                  className="h-4 bg-gray-200 rounded w-6 animate-pulse"
                  style={{ animationDelay: `${i * 0.05}s` }}
                ></div>
                <div
                  className="h-3 bg-gray-200 rounded flex-1 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    width: `${50 + Math.random() * 40}%`,
                  }}
                ></div>
                <div
                  className="h-3 bg-gray-200 rounded w-16 animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                ></div>
                <div
                  className="h-3 bg-gray-200 rounded w-20 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shimmer Effect Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default SkeletonLoader;
