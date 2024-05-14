import { Handle, Position } from "reactflow";
import { DragEvent } from "react";
import { ChatCircleText } from "@phosphor-icons/react";
function CustomNode() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "message")}
        className="h-12 w-40 rounded  flex flex-col items-center justify-between overflow-x-hidden relative bg-white border border-slate-300 focus:outline-blue-800"
      >
        <div className="w-full  flex flex-col justify-between h-full">
          <div className="bg-teal-200">
            <div className="flex justify-between items-center px-1 py-[2px]">
              <div className="flex items-center space-x-2">
                <ChatCircleText size={10} className="text-slate-800" />
                <div className="text-[10px] font-bold">Send Message</div>
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
            <p className="text-[7px] px-2 text-slate-600">{"Text Message"}</p>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </>
  );
}

export default CustomNode;
