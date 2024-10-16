import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import InputSection from "../InputSection/InputSection";

function Calculator() {
  return (
    <div className="w-8/12 h-3/5 bg-white rounded-3xl p-10 flex gap-10">
      <InputSection />
      <CalculatorDisplay />
    </div>
  );
}

export default Calculator;
