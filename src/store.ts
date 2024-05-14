import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import { nanoid } from "nanoid";

const storageModule = {
  name: "chat-flow-storage",
  storage: createJSONStorage(() => sessionStorage),
};

type SaveFlowType = {
  flowName: string;
  flowId: string;
  nodes: Node[];
  edges: Edge[];
};
const creator = (set: any, get: any) => ({
  nodes: [] as Node[],
  edges: [] as Edge[],
  flowId: "",
  flowName: "",
  savedFlows: [] as SaveFlowType[],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(
        { ...connection, type: "customDeleteEdge", id: nanoid() },
        get().edges
      ),
    });
  },
  setNodes: (nodes: Node[]) => {
    set({ nodes });
  },
  setEdges: (edges: Edge[]) => {
    set({ edges });
  },
  updateNodeText: (nodeId: string, text: string) => {
    set({
      nodes: get().nodes.map((node: Node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, text };
        }
        return node;
      }),
    });
  },

  saveNewFlow: (savedFlows: SaveFlowType[]) => {
    set({ savedFlows });
  },
  updateSavedFlow: () => {
    set({
      nodes: get().savedFlows.map((eachFlow: SaveFlowType) => {
        if (eachFlow.flowId === get().flowId) {
          eachFlow = {
            ...eachFlow,
            edges: get().edges,
            nodes: get().nodes,
          };
        }
        return eachFlow;
      }),
    });
  },
  removeSavedFlow: (flowId: string) => {
    set({
      savedFlows: get().savedFlows.map(
        (eachFlow: SaveFlowType) => eachFlow.flowId != flowId
      ),
    });
  },
});

const useChatFlowStore = create(persist(creator, storageModule));
export default useChatFlowStore;
