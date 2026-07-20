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
    <div>
      <h1> Tip Calculator</h1>
      <button onClick={() => setPage("home")}>Home</button>

      <input
        type="number"
        value={bill}
        placeholder="Enter bill"
        onChange={(e) => setBill(e.target.value)}
      />
      <input
        type="number"
        value={tip}
        placeholder="Enter tip"
        onChange={(e) => setTip(e.target.value)}
      />
      <input
        type="number"
        value={people}
        placeholder="Enter people"
        onChange={(e) => setPeople(e.target.value)}
      />

      <button onClick={handleCalculate} disabled={!bill || !tip || !people}>
        Calculate
      </button>
      <button onClick={handleReset}>Reset</button>

      {result && (
        <section>
          <h2>Tip Amount : #{result.tipAmount}</h2>
          <h2>Total Bill: #{result.totalBill}</h2>
          <h2>Each person pays: #{result.perPerson}</h2>
        </section>
      )}
    </div>
  );
};

export default TipCalculator;
