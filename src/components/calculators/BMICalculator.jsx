import { useState } from "react";

const BMICalculator = ({ setPage }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleCalculate = () => {
    // if (!weight || !height) {
    //   alert("Fill all fields");
    //   return;
    // }
    const bmiValue = weight / (height / 100) ** 2;

    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 15) {
      setCategory("Underweight");
    } else if (bmiValue < 30) {
      setCategory("Normal Weight");
    } else if (bmiValue < 45) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">BMI Calculator</h1>

        <p className="text-gray-400">
          Calculate your Body Mass Index and discover your BMI category.
        </p>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-2xl">
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Height (cm)</label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Weight (kg)</label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCalculate}
            disabled={!height || !weight}
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

        {bmi > 0 && (
          <div className="mt-6 bg-slate-950 border border-slate-700 rounded-xl p-5 text-center">
            <p className="text-gray-400 mb-2">Your BMI</p>

            <h2 className="text-4xl font-bold text-purple-400 mb-2">{bmi}</h2>

            <p className="text-lg font-medium">{category}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default BMICalculator;
