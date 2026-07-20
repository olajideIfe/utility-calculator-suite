import { useState } from "react";

const Calculator = ({ setPage }) => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => {
    setInputValue("");
  };

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Standard Calculator
        </h1>

        <p className="text-gray-400">
          Perform quick everyday arithmetic calculations.
        </p>
      </div>

      <div className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-2xl">
        <form className="grid grid-cols-4 gap-3">
          {/* Display */}
          <input
            type="text"
            value={inputValue}
            readOnly
            placeholder="0"
            className="col-span-4 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-5 text-right text-3xl font-semibold text-white outline-none mb-3"
          />

          {/* Row 1 */}
          <span
            onClick={clear}
            className="flex items-center justify-center bg-slate-700 border border-slate-600 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-slate-600 transition-all duration-200"
          >
            C
          </span>
          <span
            onClick={() => display("/")}
            className="flex items-center justify-center bg-purple-600 border border-purple-500 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-purple-700 transition-all duration-200"
          >
            ÷
          </span>
          <span
            onClick={() => display("*")}
            className="flex items-center justify-center bg-purple-600 border border-purple-500 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-purple-700 transition-all duration-200"
          >
            ×
          </span>
          <span
            onClick={() => display("-")}
            className="flex items-center justify-center bg-purple-600 border border-purple-500 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-purple-700 transition-all duration-200"
          >
            -
          </span>

          {/* Row 2 */}
          <span
            onClick={() => display("7")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            7
          </span>
          <span
            onClick={() => display("8")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            8
          </span>
          <span
            onClick={() => display("9")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            9
          </span>
          <span
            onClick={() => display("+")}
            className="flex items-center justify-center bg-purple-600 border border-purple-500 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-purple-700 transition-all duration-200"
          >
            +
          </span>

          {/* Row 3 */}
          <span
            onClick={() => display("4")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            4
          </span>
          <span
            onClick={() => display("5")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            5
          </span>
          <span
            onClick={() => display("6")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            6
          </span>
          <span
            onClick={calculate}
            className="flex items-center justify-center bg-purple-500 border border-purple-400 rounded-xl py-4 text-lg font-bold cursor-pointer hover:bg-purple-600 transition-all duration-200"
          >
            =
          </span>

          {/* Row 4 */}
          <span
            onClick={() => display("1")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            1
          </span>
          <span
            onClick={() => display("2")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            2
          </span>
          <span
            onClick={() => display("3")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            3
          </span>
          <span
            onClick={() => display("00")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            00
          </span>

          {/* Row 5 */}
          <span
            onClick={() => display("0")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200 col-span-2"
          >
            0
          </span>
          <span
            onClick={() => display(".")}
            className="flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl py-4 text-lg font-semibold cursor-pointer hover:bg-slate-700 transition-all duration-200"
          >
            .
          </span>
        </form>
      </div>
    </main>
  );
};

export default Calculator;
