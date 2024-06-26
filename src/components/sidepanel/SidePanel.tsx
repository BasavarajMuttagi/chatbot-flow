import { useContext } from "react";
import EditNode from "./EditNode";
import NodeGridWithSearch from "./NodeGridWithSearch";

import { twMerge } from "tailwind-merge";
import { SeletedNodeContext } from "../../Pages/Home";

function SidePanel() {
  const [selectedNodeId, _] = useContext(SeletedNodeContext);
  return (
    <div
      className={twMerge(
        "text-black bg-white  flex flex-col max-w-xs w-full",
        selectedNodeId ? "" : "px-2 pt-1"
      )}
    >
      {selectedNodeId ? <EditNode /> : <NodeGridWithSearch />}
    </div>
  );
}

export default SidePanel;
