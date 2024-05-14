import { ArrowLeft } from "@phosphor-icons/react";
import { SeletedNodeContext } from "../../App";
import { useContext } from "react";
import useChatFlowStore from "../../store";
import { Node } from "reactflow";

function EditNode() {
  const [selectedNodeId, setNodeId] = useContext(SeletedNodeContext);
  const { updateNodeText, nodes } = useChatFlowStore();

  const currentNode: Node[] = nodes.filter(
    (eachNode) => eachNode.id == selectedNodeId
  );
  return (
    <div className="w-full">
      <div className="flex justify-center items-center relative p-2">
        <ArrowLeft
          size={18}
          className="text-black/60 absolute left-2 cursor-pointer"
          onClick={() => setNodeId("")}
        />
        <p className="font-semibold text-slate-700/90">Message</p>
      </div>
      <div className="space-y-3 p-5 border-y border-slate-600/35">
        <label htmlFor="textareaip" className="text-slate-400">
          Text
        </label>
        <textarea
          value={currentNode[0].data.text}
          onChange={(e) => updateNodeText(selectedNodeId, e.target.value)}
          id="textareaip"
          className="p-1 border h-20 w-full focus:outline outline-slate-500/50 rounded"
        />
      </div>
    </div>
  );
}

export default EditNode;
