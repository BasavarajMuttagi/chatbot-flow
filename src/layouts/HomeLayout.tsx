import { ReactFlowProvider } from "reactflow";
import FlowWindow from "../components/FlowWindow";
import SidePanel from "../components/sidepanel/SidePanel";
import TopBar from "../components/TopBar";
import { Toaster } from "react-hot-toast";

function HomeLayout() {
  return (
    <>
      <Toaster />
      <div className="bg-white h-screen flex flex-col">
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
    </>
  );
}

export default HomeLayout;
