import { useState } from "react";

const AgeCalculator = ({ setPage }) => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    const today = new Date();
    const dob = new Date(birthDate);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();

      days = +prevMonth;
    }

    if (months < 0) {
      years--;
      months = +12;
    }
    setAge({ years, months, days });
  };

  const handleReset = () => {
    setBirthDate("");
    setAge(null);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Age Calculator</h1>

        <p className="text-gray-400">
          Find your exact age in years, months, and days.
        </p>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-2xl">
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Date of Birth</label>

          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCalculate}
            disabled={!birthDate}
            className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl py-3 font-semibold transition-all duration-200"
          >
            Calculate
          </button>

          <button
            onClick={handleReset}
            className="flex-1 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-xl py-3 font-semibold transition-all duration-200"
          >
            Reset
          </button>
        </div>

        {age && (
          <section className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
                {age.years}
              </h2>
              <p className="text-gray-400 text-sm mt-1">Years</p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
                {age.months}
              </h2>
              <p className="text-gray-400 text-sm mt-1">Months</p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
                {age.days}
              </h2>
              <p className="text-gray-400 text-sm mt-1">Days</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default AgeCalculator;
