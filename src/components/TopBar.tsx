import toast from "react-hot-toast";
import useChatFlowStore from "../store";

function TopBar() {
  const { nodes, edges } = useChatFlowStore();

  const checkFlowConnection = () => {
    if (nodes.length < 2) {
      toast.error("Minimum 2 nodes required!");
      return false;
    }
    if (nodes.length - 1 !== edges.length) {
      toast.error("Please check node connections");
      return false;
    }

    toast.success("Flow saved successfully");

    return true;
  };
  return (
    <div className="h-16 bg-neutral-100 border border-slate-600/35 shrink-0 flex justify-end items-center">
      <button
        className="bg-white px-2 py-1 rounded border border-blue-800 text-blue-800 mr-24 hover:bg-neutral-200"
        onClick={() => checkFlowConnection()}
      >
        Save Changes
      </button>
    </div>
  );
}

export default TopBar;
