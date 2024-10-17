import ButtonContainer from "./ButtonContainer";
import Input from "./Input";

function InputSection() {
  return (
    <section className="w-6/12 h-full flex flex-col justify-around">
      <Input labelText="Bill" />
      <ButtonContainer />
      <Input labelText="Number of People" />
    </section>
  );
}

export default InputSection;
