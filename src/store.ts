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

const creator = (set: any, get: any) => ({
  nodes: [] as Node[],
  edges: [] as Edge[],
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
});

const useChatFlowStore = create(persist(creator, storageModule));
export default useChatFlowStore;
