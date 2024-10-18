function ResetButton({ handleReset }) {
  return (
    <button
      className="py-2 bg-cyan-700 rounded-md text-cyan-800 text-2xl w-full"
      onClick={handleReset}
    >
      RESET
    </button>
  );
}

export default ResetButton;
