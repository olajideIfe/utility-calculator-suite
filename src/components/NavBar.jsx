import {useState} from "react";

const Navbar = ({ page, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-slate-950 text-white px-6 py-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">🧮 Utility Calculator</h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setPage("home")}
              className={`pb-2 transition-all ${
                page === "home"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setPage("calculator")}
              className={`pb-2 transition-all ${
                page === "calculator"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Calculator
            </button>

            <button
              onClick={() => setPage("bmi")}
              className={`pb-2 transition-all ${
                page === "bmi"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              BMI
            </button>

            <button
              onClick={() => setPage("age")}
              className={`pb-2 transition-all ${
                page === "age"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Age
            </button>

            <button
              onClick={() => setPage("tip")}
              className={`pb-2 transition-all ${
                page === "tip"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tip
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-5 md-hidden">
            <button
              onClick={() => {
                setPage("home");
                setMenuOpen(false);
              }}
              className={
                page === "home"
                  ? "text-purple-400 text-left"
                  : "text-gray-300 text-left hover:text-white"
              }
            >
              Home
            </button>

            <button
              onClick={() => {
                setPage("calculator");
                setMenuOpen(false);
              }}
              className={
                page === "calculator"
                  ? "text-purple-400 text-left"
                  : "text-gray-300 text-left hover:text-white"
              }
            >
              Calculator
            </button>

            <button
              onClick={() => {
                setPage("bmi");
                setMenuOpen(false);
              }}
              className={
                page === "bmi"
                  ? "text-purple-400 text-left"
                  : "text-gray-300 text-left hover:text-white"
              }
            >
              BMI
            </button>

            <button
              onClick={() => {
                setPage("age");
                setMenuOpen(false);
              }}
              className={
                page === "age"
                  ? "text-purple-400 text-left"
                  : "text-gray-300 text-left hover:text-white"
              }
            >
              Age
            </button>
            <button
              onClick={() => {
                setPage("tip");
                setMenuOpen(false);
              }}
              className={
                page === "tip"
                  ? "text-purple-400 text-left"
                  : "text-gray-300 text-left hover:text-white"
              }
            >
              Tip
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
