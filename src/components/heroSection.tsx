import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/src/assets/china-vibes-logos.jpg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue mb-4">
          Welcome to Red Crane Trading
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Your trusted partner for China trading and shipping solutions.
        </p>
      </div>

      {/* Dashboard Button */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={() => {
            // Toggle sidebar or open dashboard
            const sidebar = document.querySelector('[data-sidebar]');
            if (sidebar) {
              sidebar.classList.toggle('translate-x-0');
              sidebar.classList.toggle('-translate-x-full');
            }
          }}
          className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
          aria-label="Open dashboard"
        >
          <svg
            className="w-5 h-5 text-primary-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;