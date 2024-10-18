import DisplayItem from "./DisplayItem";
import ResetButton from "./ResetButton";

function CalculatorDisplay({ billTotal, tipTotal, reset }) {
  return (
    <section className="bg-cyan-800 w-6/12 h-full rounded-3xl p-10 flex flex-col justify-between">
      <div>
        <DisplayItem displayText="Tip Amount" amount={tipTotal} />
        <DisplayItem displayText="Total" amount={billTotal} />
      </div>
      <ResetButton handleReset={reset} />
    </section>
  );
}

export default CalculatorDisplay;
