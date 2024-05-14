import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Node,
  ReactFlowInstance,
  useReactFlow,
} from "reactflow";
import CustomMessageNode from "./CustomMessageNode";
import CustomDeleteEdge from "./CustomDeleteEdge";
import useChatFlowStore from "../store";
import { nanoid } from "nanoid";

function FlowWindow() {
  const { addNodes } = useReactFlow();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();
  const { nodes, edges, onEdgesChange, onNodesChange, onConnect } =
    useChatFlowStore();
  const nodeTypes = useMemo(
    () => ({
      message: CustomMessageNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      customDeleteEdge: CustomDeleteEdge,
    }),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: Node = {
        id: nanoid(),
        type,
        position: { x: position?.x!, y: position?.y! },
        data: {},
      };
      addNodes(newNode);
    },
    [reactFlowInstance]
  );

  return (
    <div className="h-full w-full border border-slate-600/35">
      <div className="h-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default FlowWindow;
