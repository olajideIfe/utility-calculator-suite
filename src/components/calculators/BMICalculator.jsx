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
    <div>
      <h1>BMI Calculator</h1>{" "}
      <button onClick={() => setPage("home")}>Home</button>
      <input
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={handleCalculate} disabled={!weight || !height}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      {bmi && (
        <section>
          <h2>BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </section>
      )}
    </div>
  );
};

export default BMICalculator;
