import toast from "react-hot-toast";
import useChatFlowStore from "../store";

function SavedFlowsDropdown() {
  const { savedFlows, flowId, restoreFlow } = useChatFlowStore();
  const showFlowById = (flowId: string) => {
    const currentSelectedFlow = savedFlows.filter(
      (eachFlow) => eachFlow.flowId == flowId
    );

    if (currentSelectedFlow.length != 1) {
      toast.error("Something Went Wrong!");
      return;
    }
    restoreFlow(currentSelectedFlow[0]);
  };
  return (
    <div>
      <select
        value={flowId || ""}
        className="p-2 rounded py-1 border outline-none"
        onChange={(e) => showFlowById(e.target.value)}
      >
        <option value="" key={"select"}>
          select
        </option>
        {savedFlows.map((eachflow) => (
          <option value={eachflow.flowId} key={eachflow.flowName}>
            {eachflow.flowName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SavedFlowsDropdown;
