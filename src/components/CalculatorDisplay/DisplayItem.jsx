function DisplayItem() {
  return (
    <div className="flex justify-between mb-10">
      <div>
        <p className="text-white">Tip Amount</p>
        <p className="text-cyan-500">/ person</p>
      </div>
      <p className="text-cyan-300 text-5xl">$0.00</p>
    </div>
  );
}

export default DisplayItem;
