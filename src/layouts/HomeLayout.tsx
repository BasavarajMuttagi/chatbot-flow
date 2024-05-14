import { ReactFlowProvider } from "reactflow";
import FlowWindow from "../components/FlowWindow";
import SidePanel from "../components/sidepanel/SidePanel";

function HomeLayout() {
  return (
    <div className="h-screen  w-full  overflow-y-hidden bg-neutral-900">
      <div className="h-full w-full flex border">
        <div className="w-5/6 h-full">
          <ReactFlowProvider>
            <FlowWindow />
          </ReactFlowProvider>
        </div>
        <div className="w-1/6 h-full border">
          <SidePanel />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
