import MessageNode from "./MessageNode";
import PlaceHolder from "./PlaceHolder";

function NodeGrid() {
  return (
    <div
      className="mt-5 flex-grow overflow-y-auto h-full"
      style={{ maxHeight: "calc(100vh - 150px)", scrollbarWidth: "thin" }}
    >
      <div className="flex flex-wrap justify-center gap-4">
        <MessageNode />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
      </div>
    </div>
  );
}

export default NodeGrid;
