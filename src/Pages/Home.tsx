import { ReactFlowProvider } from "reactflow";
import { createContext, useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
export const SeletedNodeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);
function Home() {
  const [context, setContext] = useState("");
  return (
    <SeletedNodeContext.Provider value={[context, setContext]}>
      <ReactFlowProvider>
        <HomeLayout />
      </ReactFlowProvider>
    </SeletedNodeContext.Provider>
  );
}

export default Home;
