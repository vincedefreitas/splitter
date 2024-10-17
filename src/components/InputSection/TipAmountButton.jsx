function TipAmountButton({ buttonText }) {
  let count = 0;

  const handleClick = (event) => {
    count++;
    console.log(count);
  };

  return (
    <button
      onClick={handleClick}
      className="py-2 bg-cyan-800 rounded-md text-white text-2xl border-2 border-cyan-800 hover:border-2 hover:border-cyan-400 transition duration-200 ease-in"
    >
      {buttonText}
    </button>
  );
}

export default TipAmountButton;
