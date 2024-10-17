function Input({ labelText }) {
  return (
    <div className="mt-4 flex flex-col gap-1">
      <label htmlFor="text" className="text-slate-600">
        {labelText}
      </label>
      <input
        id="text"
        type="text"
        className="p-3 bg-sky-100 rounded-md text-slate-400"
        value="$"
      />
    </div>
  );
}

export default Input;
