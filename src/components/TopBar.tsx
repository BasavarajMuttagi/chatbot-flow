import toast from "react-hot-toast";
import useChatFlowStore, { SaveFlowType } from "../store";
import { nanoid } from "nanoid";
import SavedFlowsDropdown from "./SavedFlowsDropdown";
import { useContext } from "react";
import { SeletedNodeContext } from "../Pages/Home";


function TopBar() {
  const [_, setNodeId] = useContext(SeletedNodeContext);
  const {
    nodes,
    edges,
    flowId,
    savedFlows,
    saveNewFlow,
    updateSavedFlow,
    resetStore,
    removeSavedFlow,
  } = useChatFlowStore();

  const checkFlowConnection = () => {
    setNodeId("");

    if (nodes.length < 2) {
      toast.error("Minimum 2 nodes required!");
      return;
    }
    if (!(edges.length >= nodes.length - 1)) {
      toast.error("Please check node connections");
      return;
    }

    if (flowId) {
      updateSavedFlow();
      resetStore();
      toast.success("Flow saved updated");
    } else {
      const flowId = nanoid();
      const newFlow: SaveFlowType = {
        flowId,
        flowName: `flow-${flowId}`,
        edges,
        nodes,
      };
      saveNewFlow([...savedFlows, newFlow]);
      resetStore();
      toast.success("Flow saved successfully");
    }
  };
  return (
    <div className="h-16 bg-neutral-100 border border-slate-600/35 shrink-0 flex justify-between items-center">
      <div className="ml-2 flex items-center">
        <p>Saved Flows :</p> &nbsp;&nbsp; <SavedFlowsDropdown />
      </div>
      <div className="space-x-5 mr-2">
        <button
          className="bg-green-500 px-2 py-1 rounded border text-white  hover:bg-green-500/60"
          onClick={() => checkFlowConnection()}
        >
          {flowId ? "Update Flow" : "Save Flow"}
        </button>
        <button
          className="bg-blue-400 px-2 py-1 rounded border  text-white  hover:bg-blue-400/60"
          onClick={() => resetStore()}
        >
          Clear
        </button>
        {flowId && (
          <button
            className="bg-red-400 px-2 py-1 rounded border  text-white  hover:bg-red-400/60"
            onClick={() => removeSavedFlow(flowId)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TopBar;
