function TipAmountButton({ buttonText, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="py-2 bg-cyan-800 rounded-md text-white text-xl lg:text-2xl border-cyan-800 hover:bg-cyan-600 transition duration-200 ease-in"
    >
      {buttonText}
    </button>
  );
}

export default TipAmountButton;
