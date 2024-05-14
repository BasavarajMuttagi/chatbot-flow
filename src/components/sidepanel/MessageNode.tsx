import { ChatCircleText } from "@phosphor-icons/react";
import { DragEvent } from "react";

function MessageNode() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "message")}
        className="rounded flex flex-col items-center justify-around overflow-x-hidden relative border border-blue-800 text-blue-800 aspect-video cursor-grab p-2 h-12 w-24 md:h-16 md:w-32  hover:bg-neutral-200"
      >
        <ChatCircleText size={32} />
        <p>Message</p>
      </div>
    </>
  );
}

export default MessageNode;
