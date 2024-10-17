function TipAmountButton({ buttonText, clickHandler }) {
  let count = 0;

  return (
    <button
      onClick={clickHandler}
      className="py-2 bg-cyan-800 rounded-md text-white text-2xl border-2 border-cyan-800 hover:border-2 hover:border-cyan-400 transition duration-200 ease-in"
    >
      {buttonText}
    </button>
  );
}

export default TipAmountButton;
