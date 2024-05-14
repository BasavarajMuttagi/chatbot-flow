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

export type SaveFlowType = {
  flowName: string;
  flowId: string;
  nodes: Node[];
  edges: Edge[];
};

const initailState: SaveFlowType = {
  flowId: "",
  flowName: "",
  edges: [],
  nodes: [],
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
          eachFlow.edges = get().edges;
          eachFlow.nodes = get().nodes;
        }
        return eachFlow;
      }),
    });
  },
  removeSavedFlow: (flowId: string) => {
    const result = get().savedFlows.filter(
      (eachFlow: SaveFlowType) => eachFlow.flowId !== flowId
    );

    set({
      savedFlows: result.length ? result : [],
    });
    creator(set, get).resetStore();
  },

  resetStore: () => {
    set(initailState);
  },

  restoreFlow: (flow: SaveFlowType) => {
    set(flow);
  },
});

const useChatFlowStore = create(persist(creator, storageModule));
export default useChatFlowStore;
