import React from "react";

const Home = ({ setPage }) => {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 md:px-10">
      <section className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Utility Calculator Suite
        </h1>

        <p className="text-gray-400 text-base md:text-lg">
          Simple tools for everyday calculations. Choose a calculator to get
          started.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Standard Calculator</h2>

          <p className="text-gray-400 mb-6">
            Perform quick everyday arithmetic calculations.
          </p>

          <button
            onClick={() => setPage("calculator")}
            className="bg-purple-600 hover:bg-purple-800 px-5 py-2 rounded-lg transition-all duration-300"
          >
            Open Calculator
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">BMI Calculator</h2>

          <p className="text-gray-400 mb-6">
            Calculate your Body Mass Index and discover your BMI category.
          </p>

          <button
            onClick={() => setPage("bmi")}
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition-all duration-300"
          >
            Open Calculator
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Age Calculator</h2>

          <p className="text-gray-400 mb-6">
            Find your exact age in years, months, and days.
          </p>

          <button
            onClick={() => setPage("age")}
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition-all duration-300"
          >
            Open Calculator
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Tip Calculator</h2>

          <p className="text-gray-400 mb-6">
            Calculate tips, split your total bill, and see how much each person
            pays.
          </p>

          <button
            onClick={() => setPage("tip")}
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition-all duration-300"
          >
            Open Calculator
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
