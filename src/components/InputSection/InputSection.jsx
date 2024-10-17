import Input from "./Input";
import { useState } from "react";
import TipAmountButton from "./TipAmountButton";

function InputSection() {
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

  return (
    <section className="w-6/12 h-full flex flex-col justify-around">
      <Input labelText="Bill" handleChange={handleBillChange} />
      <p>{bill}</p>
      <div>
        <p className="text-slate-600 mb-2">Select Tip %</p>
        <div className="grid grid-cols-3 gap-4">
          <TipAmountButton
            buttonText={"5%"}
            clickHandler={handleClick5Percent}
          />
          <TipAmountButton
            buttonText={"10%"}
            clickHandler={handleClick10Percent}
          />
          <TipAmountButton
            buttonText={"15%"}
            clickHandler={handleClick15Percent}
          />
          <TipAmountButton
            buttonText={"25%"}
            clickHandler={handleClick25Percent}
          />
          <TipAmountButton
            buttonText={"50%"}
            clickHandler={handleClick50Percent}
          />
          <TipAmountButton buttonText="Custom" />
          <p>The tip % will be {tipPercentage}%</p>
        </div>
      </div>
      <Input labelText="Number of People" handleChange={handlePeopleChange} />
      <p>{numOfPeople}</p>
    </section>
  );
}

export default InputSection;
