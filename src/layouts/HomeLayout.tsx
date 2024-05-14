import { ReactFlowProvider } from "reactflow";
import FlowWindow from "../components/FlowWindow";
import SidePanel from "../components/sidepanel/SidePanel";
import TopBar from "../components/TopBar";

function HomeLayout() {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <div className="flex-1">
          <ReactFlowProvider>
            <FlowWindow />
          </ReactFlowProvider>
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

export default HomeLayout;
