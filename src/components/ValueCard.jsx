function ValueCard({value}) {
  return (
    <div class="max-h-[200px] border border-gray-600 rounded relative group overflow-hidden p-10">
      <h1 className="text-2xl text-center text-gray-800 uppercase"><b>{value.bold}</b>{value.title}</h1>
      <p className="text-sm text-center font-medium tracking-widest text-gray-800">
        {value.description}
      </p>
    </div>
  );
}

export default ValueCard;