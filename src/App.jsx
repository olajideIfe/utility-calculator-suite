import { useState } from "react";
import Home from "./components/Home";
import Calculator from "./components/calculators/Calculator";
import BMICalculator from "./components/calculators/BMICalculator";
import AgeCalculator from "./components/calculators/AgeCalculator";
import TipCalculator from "./components/calculators/TipCalculator";
import Navbar from "./components/NavBar";


const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === "home" &&  <Home setPage={setPage}/>}
      {page === "calculator" && <Calculator setPage={setPage}/>}
      {page === "bmi" &&  <BMICalculator setPage={setPage} />}
      {page === "age" && <AgeCalculator setPage={setPage}/> }
      {page === "tip" &&  <TipCalculator setPage={setPage} />}
    </>
  );
};

export default App;
