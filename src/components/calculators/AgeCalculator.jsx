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
    <div>
      <h1>Age Calculator</h1>
      <button onClick={() => setPage("home")}>Home</button>

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>

      {age &&
      <section>
        <h2>{age.years} years</h2>
        <h2>{age.months} months</h2>
        <h2>{age.days} days</h2>
      </section>}
    </div>
  );
};

export default AgeCalculator;
