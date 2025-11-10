import React, { useState } from "react";
import Payment from "./Payment.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#e9f2ef] text-gray-800">
      {/* Top green hero */}
      <header className="bg-green-600 text-white py-12 shadow-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* small icons */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2L15 8H9L12 2Z" fill="white" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C12 2 14 6 18 6C14 10 12 12 12 20C12 12 10 10 6 6C10 6 12 2 12 2Z" stroke="white" strokeWidth="0" fill="white" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold">PayFlow Demo</h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Experience seamless payment processing with modern React components
            <br />and beautiful UI design
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Modern Payment Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
          </p>
        </section>

        {/* Feature cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 1L3 5v6c0 5.25 3.75 10 9 12 5.25-2 9-6.75 9-12V5l-9-4z" fill="#34D399" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Secure Processing</h3>
            <p className="text-sm text-gray-500">End-to-end encryption ensures your payment data is always protected and secure.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#34D399" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-500">Powered by Vite and React for instant load times and smooth interactions.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 2h8a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" fill="#34D399" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Mobile Ready</h3>
            <p className="text-sm text-gray-500">Fully responsive design that works perfectly on all devices and screen sizes.</p>
          </div>
        </section>

        {/* Interactive demo card */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-center font-semibold mb-4">Interactive Demo</h4>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-full shadow-lg"
            >
              <span role="img" aria-hidden>🚀</span>
              <span>Click Counter: {count}</span>
            </button>
          </div>
        </section>

        {/* Optional: render Payment component below (kept but collapsed) */}
        <section className="mt-10">
          <Payment />
        </section>
      </main>
    </div>
  );
}