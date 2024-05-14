import "./App.css";
import "reactflow/dist/style.css";
import HomeLayout from "./layouts/HomeLayout";
import { ReactFlowProvider } from "reactflow";
function App() {
  return (
    <ReactFlowProvider>
      <HomeLayout />
    </ReactFlowProvider>
  );
}

export default App;
