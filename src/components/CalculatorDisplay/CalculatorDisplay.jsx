import DisplayItem from "./DisplayItem";
import ResetButton from "./ResetButton";

function CalculatorDisplay() {
  return (
    <section className="bg-cyan-800 w-6/12 h-full rounded-3xl p-10 flex flex-col justify-between">
      <div>
        <DisplayItem displayText="Tip Amount" />
        <DisplayItem displayText="Total" />
      </div>
      <ResetButton />
    </section>
  );
}

export default CalculatorDisplay;
