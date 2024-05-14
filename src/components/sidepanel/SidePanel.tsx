import { useContext } from "react";
import EditNode from "./EditNode";
import NodeGridWithSearch from "./NodeGridWithSearch";
import { SeletedNodeContext } from "../../App";

function SidePanel() {
  const [selectedNodeId, _] = useContext(SeletedNodeContext);
  return (
    <div className="text-black bg-white  flex flex-col max-w-xs w-full">
      {selectedNodeId ? <EditNode /> : <NodeGridWithSearch />}
    </div>
  );
}

export default SidePanel;
