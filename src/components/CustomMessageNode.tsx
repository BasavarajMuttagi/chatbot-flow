import { Handle, Position } from "reactflow";
import { DragEvent } from "react";
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
        className="h-20 w-40 rounded  flex flex-col items-center justify-between border border-neutral-700/50 overflow-x-hidden relative bg-neutral-800"
      ></div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </>
  );
}

export default CustomNode;
