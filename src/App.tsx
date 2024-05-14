import "./App.css";
import "reactflow/dist/style.css";
import HomeLayout from "./layouts/HomeLayout";
import { ReactFlowProvider } from "reactflow";
import { createContext, useState } from "react";
export const SeletedNodeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);
function App() {
  const [context, setContext] = useState("");
  return (
    <SeletedNodeContext.Provider value={[context, setContext]}>
      <ReactFlowProvider>
        <HomeLayout />
      </ReactFlowProvider>
    </SeletedNodeContext.Provider>
  );
}

export default App;
