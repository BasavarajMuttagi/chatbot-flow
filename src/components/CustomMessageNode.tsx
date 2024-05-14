import { Handle, NodeProps, Position } from "reactflow";
import { DragEvent, useContext } from "react";
import { ChatCircleText } from "@phosphor-icons/react";
import { SeletedNodeContext } from "../App";
import { twMerge } from "tailwind-merge";
function CustomMessageNode({ data, id }: NodeProps) {
  const [selectedNodeId, setNodeId] = useContext(SeletedNodeContext);
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <>
      <div
        onClick={() => setNodeId(id)}
        tabIndex={-1}
        draggable
        onDragStart={(event) => onDragStart(event, "message")}
        className={twMerge(
          "h-12 w-40 rounded  flex flex-col items-center justify-between overflow-x-hidden relative bg-white border border-slate-300",
          selectedNodeId == id ? "border-blue-800" : ""
        )}
      >
        <div className="w-full  flex flex-col justify-between h-full">
          <div className="bg-teal-200">
            <div className="flex justify-between items-center px-1 py-[2px]">
              <div className="flex items-center space-x-2">
                <ChatCircleText size={10} className="text-slate-800" />
                <div className="text-[10px] font-semibold text-black/75">
                  Send Message
                </div>
              </div>
              <div className="w-[15px] h-[15px] rounded-full bg-white flex justify-center items-center scale-90">
                <img
                  src="https://img.icons8.com/color/48/whatsapp--v1.png"
                  alt="whatsapp"
                  className="h-3 w-3"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 flex items-center">
            <p className="text-[7px] px-2 text-slate-600">{data.text}</p>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </>
  );
}

export default CustomMessageNode;
