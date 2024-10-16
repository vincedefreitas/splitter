import TipAmountButton from "./TipAmountButton";

function ButtonContainer() {
  return (
    <div>
      <p className="text-slate-600 mb-2">Select Tip %</p>
      <div className="grid grid-cols-3 gap-4">
        <TipAmountButton />
        <TipAmountButton />
        <TipAmountButton />
        <TipAmountButton />
        <TipAmountButton />
        <TipAmountButton />
      </div>
    </div>
  );
}

export default ButtonContainer;
