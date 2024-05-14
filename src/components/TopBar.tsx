function TopBar() {
  return (
    <div className="h-16 bg-neutral-100 border border-slate-600/35 shrink-0 flex justify-end items-center">
      <button className="bg-white px-2 py-1 rounded border border-blue-800 text-blue-800 mr-24 hover:bg-neutral-200">
        Save Changes
      </button>
    </div>
  );
}

export default TopBar;
