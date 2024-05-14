import CustomNode from "../CustomMessageNode";

function SidePanel() {
  return (
    <div className="border border-slate-300/90 text-black bg-blue-500 w-full h-full grid grid-cols-2 place-items-center gap-x-4 gap-y-2">
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
      <CustomNode />
    </div>
  );
}

export default SidePanel;
