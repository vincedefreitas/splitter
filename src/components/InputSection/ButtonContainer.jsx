import TipAmountButton from "./TipAmountButton";
import { useState } from "react";

function ButtonContainer() {
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleClick5Percent = (event) => {
    setTipPercentage(5);
  };

  const handleClick10Percent = (event) => {
    setTipPercentage(10);
  };

  const handleClick15Percent = (event) => {
    setTipPercentage(15);
  };

  const handleClick25Percent = (event) => {
    setTipPercentage(25);
  };

  const handleClick50Percent = (event) => {
    setTipPercentage(50);
  };

  return (
    <div>
      <p className="text-slate-600 mb-2">Select Tip %</p>
      <div className="grid grid-cols-3 gap-4">
        <TipAmountButton buttonText={5} clickHandler={handleClick5Percent} />
        <TipAmountButton buttonText={10} clickHandler={handleClick10Percent} />
        <TipAmountButton buttonText={15} clickHandler={handleClick15Percent} />
        <TipAmountButton buttonText={25} clickHandler={handleClick25Percent} />
        <TipAmountButton buttonText={50} clickHandler={handleClick50Percent} />
        <TipAmountButton buttonText="Custom" />
        <p>The tip % will be {tipPercentage}%</p>
      </div>
    </div>
  );
}

export default ButtonContainer;
