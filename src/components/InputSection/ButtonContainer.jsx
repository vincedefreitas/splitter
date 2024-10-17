import TipAmountButton from "./TipAmountButton";

function ButtonContainer() {
  return (
    <div>
      <p className="text-slate-600 mb-2">Select Tip %</p>
      <div className="grid grid-cols-3 gap-4">
        <TipAmountButton buttonText="5%" />
        <TipAmountButton buttonText="10%" />
        <TipAmountButton buttonText="15%" />
        <TipAmountButton buttonText="25%" />
        <TipAmountButton buttonText="50%" />
        <TipAmountButton buttonText="Custom" />
      </div>
    </div>
  );
}

export default ButtonContainer;
