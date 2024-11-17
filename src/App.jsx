import "./App.css";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="lg:h-screen bg-cyan-100 flex flex-col justify-center items-center font-mono py-4">
      <div class="mb-6 mt-2 lg:mb-20 text-4xl text-cyan-800 tracking-[.5em]">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
