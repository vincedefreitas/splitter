import Input from "./Input";
import TipAmountButton from "./TipAmountButton";

function InputSection({
  people,
  bill,
  tip5Percent,
  tip10Percent,
  tip15Percent,
  tip25Percent,
  tip50Percent,
  billInputValue,
  numOfPeopleInput,
}) {
  return (
    <section className="w-6/12 h-full flex flex-col justify-around">
      <Input labelText="Bill" handleChange={bill} value={billInputValue} />
      <div>
        <p className="text-slate-600 mb-2">Select Tip %</p>
        <div className="grid grid-cols-3 gap-4">
          <TipAmountButton buttonText={"5%"} clickHandler={tip5Percent} />
          <TipAmountButton buttonText={"10%"} clickHandler={tip10Percent} />
          <TipAmountButton buttonText={"15%"} clickHandler={tip15Percent} />
          <TipAmountButton buttonText={"25%"} clickHandler={tip25Percent} />
          <TipAmountButton buttonText={"50%"} clickHandler={tip50Percent} />
          <TipAmountButton buttonText="Custom" />
        </div>
      </div>
      <Input
        labelText="Number of People"
        handleChange={people}
        value={numOfPeopleInput}
      />
    </section>
  );
}

export default InputSection;
