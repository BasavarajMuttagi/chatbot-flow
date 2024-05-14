import NodeGrid from "./NodeGrid";

function NodeGridWithSearch() {
  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Search Node"
        className="px-2 py-1 rounded w-full border border-slate-600/35 focus:outline outline-slate-700"
      />
      <NodeGrid />
    </>
  );
}

export default NodeGridWithSearch;
