import { useState } from "react";

const TipCalculator = ({ setPage }) => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const billAmount = Number(bill);
    const tipPercentage = Number(tip);
    const numberOfPeople = Number(people);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numberOfPeople;

    if (numberOfPeople < 0) {
      alert("Number of people must be greater than 0");
      return;
    }

    setResult({
      tipAmount: tipAmount.toFixed(2),
      totalBill: totalBill.toFixed(2),
      perPerson: perPerson.toFixed(2),
    });
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Tip Calculator</h1>

        <p className="text-gray-400">
          Calculate tips, split your total bill, and see how much each person
          pays.
        </p>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-2xl">
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Bill Amount (₦)</label>

          <input
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />

          <label className="block text-gray-300 mb-2">Tip Percentage (%)</label>

          <input
            type="number"
            placeholder="Enter tip amount"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />

          <label className="block text-gray-300 mb-2">Number of People</label>

          <input
            type="number"
            placeholder="Enter number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition-all duration-200"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCalculate}
            disabled={!bill || !tip || !people}
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

        {result && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <p className="text-gray-400 text-sm mb-1">Total Bill</p>
              <h2 className="text-xl font-bold text-purple-400">
                ₦{result.totalBill}
              </h2>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <p className="text-gray-400 text-sm mb-1">Tip Amount</p>
              <h2 className="text-xl font-bold text-purple-400">
                ₦{result.tipAmount}
              </h2>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-center">
              <p className="text-gray-400 text-sm mb-1">Per Person</p>
              <h2 className="text-xl font-bold text-purple-400">
                ₦{result.perPerson}
              </h2>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default TipCalculator;
