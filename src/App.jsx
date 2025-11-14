import "./App.css";
import data from "./data.js";
import React from "react";
import logo from "./assets/logo.jpg";
import bg1 from "./assets/bg1.jpg";
import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";
import s4 from "./assets/s4.jpg";
import s5 from "./assets/s5.jpg";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1528]">
      {/* Navigation - Simple header without menu */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-red-500/20">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-center h-16 sm:h-20 ">
            <div className="flex items-center space-x-2 sm:space-x-3 ">
              <img
                src={logo}
                alt="FIREXARENA Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wider">
                  {data.name}
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">
                  {data.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile optimized */}
      <section
        id="home"
        className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo/Image - Mobile first placement */}
          <div className="mb-8 sm:mb-12">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-red-500/30">
                <img
                  src={logo}
                  alt="FIREXARENA"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating animation effect */}
              <div className="absolute -z-10 inset-0 bg-linear-to-r from-red-600 to-blue-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight px-2">
              {data.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 px-2">
              {data.tagline}
            </p>
            <p className="text-base sm:text-lg text-gray-400 px-2">
              {data.description}
            </p>

            <ul className="space-y-3 sm:space-y-4 max-w-2xl mx-auto text-left px-2">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/FIREXARENA.apk"
              download="FIREXARENA.apk"
              className="group relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all active:scale-95 shadow-lg shadow-red-500/30 touch-manipulation mt-6 sm:mt-8 no-underline"
            >
              <span className="relative z-10">DOWNLOAD APP</span>
              <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-800 opacity-0 group-active:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Mobile optimized */}
      <section id="about" className="py-12 sm:py-20 px-4 bg-[#0a0e27]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              About {data.name}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto"></div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Free Fire Game Image - Mobile first */}
            <div className="relative">
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-red-500/30">
                <img
                  src={bg1}
                  alt="Free Fire Game"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We host Tournaments of Free Fire Max. Download and enjoy all
                Features and benefits.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                All tournaments are conducted here, and both winners and
                participants can view the results instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile optimized */}
      <section id="features" className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Features
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-[#1a1f3a] to-[#0f1528] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-red-500/20 active:border-red-500/50 transition-all active:shadow-lg active:shadow-red-500/20 touch-manipulation"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-active:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-linear-to-br from-red-500/20 to-transparent rounded-bl-full opacity-0 group-active:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section - Mobile optimized */}
      <section id="screenshots" className="py-12 sm:py-20 px-4 bg-[#0a0e27]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Screenshots
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base text-gray-400">
              See our app in action
            </p>
          </div>

          {/* Screenshot Horizontal Scroll - Mobile optimized */}
          <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4">
            <div className="flex gap-3 sm:gap-4 w-max">
              {[
                { img: s1, title: "Screenshot 1" },
                { img: s2, title: "Screenshot 2" },
                { img: s3, title: "Screenshot 3" },
                { img: s4, title: "Screenshot 4" },
                { img: s5, title: "Screenshot 5" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-red-500/30 active:border-red-500/60 transition-all active:shadow-lg active:shadow-red-500/20 touch-manipulation shrink-0"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-96 sm:h-[500px] w-auto"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-red-600/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-4">
            Swipe to view more →
          </p>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="py-12 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Start Earning?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
            Download FIREXARENA now and join thousands of players earning real
            money!
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <a
              href="/FIREXARENA.apk"
              download="FIREXARENA.apk"
              className="group relative w-full max-w-sm px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all active:scale-95 shadow-lg shadow-red-500/30 touch-manipulation inline-block no-underline"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>DOWNLOAD NOW</span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-800 opacity-0 group-active:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mobile optimized */}
      <footer className="bg-[#0a0e27] border-t border-red-500/20 py-6 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 {data.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Free Fire Tournament Platform
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
