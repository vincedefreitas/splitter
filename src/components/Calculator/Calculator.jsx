import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import InputSection from "../InputSection/InputSection";
import { useState } from "react";

function Calculator() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

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

  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  };

  const handleClickReset = (event) => {
    setTipPercentage(0);
    setBill("");
    setNumOfPeople("");
  };

  const calculateBillTotal = () => {
    const tip = Number(calculateTipTotal());
    const billTotal = bill / numOfPeople + tip;
    console.log(typeof billTotal);
    if (!isFinite(billTotal)) {
      return "0.00";
    } else {
      return (Math.round(billTotal * 100) / 100).toFixed(2);
    }
  };

  const calculateTipTotal = () => {
    const tip = ((bill / 100) * tipPercentage) / numOfPeople;
    if (!isFinite(tip)) {
      return "0.00";
    } else {
      return (
        Math.round((((bill / 100) * tipPercentage) / numOfPeople) * 100) / 100
      ).toFixed(2);
    }
  };

  return (
    <div className="w-11/12 max-w-5xl lg:h-3/5 bg-white rounded-3xl p-4 lg:p-10 flex flex-col lg:flex-row gap-10 items-center">
      <InputSection
        people={handlePeopleChange}
        bill={handleBillChange}
        tip5Percent={handleClick5Percent}
        tip10Percent={handleClick10Percent}
        tip15Percent={handleClick15Percent}
        tip25Percent={handleClick25Percent}
        tip50Percent={handleClick50Percent}
        billInputValue={bill}
        numOfPeopleInput={numOfPeople}
      />
      <CalculatorDisplay
        billTotal={calculateBillTotal()}
        tipTotal={calculateTipTotal()}
        reset={handleClickReset}
      />
    </div>
  );
}

export default Calculator;
