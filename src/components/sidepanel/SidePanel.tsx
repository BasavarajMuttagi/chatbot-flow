import EditNode from "./EditNode";
import NodeGridWithSearch from "./NodeGridWithSearch";

function SidePanel() {
  return (
    <div className="text-black bg-white  flex flex-col max-w-xs w-full">
      {false ? <EditNode /> : <NodeGridWithSearch />}
    </div>
  );
}

export default SidePanel;
