import { ArrowLeft } from "@phosphor-icons/react";

function EditNode() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center relative p-2">
        <ArrowLeft
          size={18}
          className="text-black/60 absolute left-2 cursor-pointer"
        />
        <p className="font-semibold text-slate-700/90">Message</p>
      </div>
      <div className="space-y-3 p-5 border border-slate-300">
        <label htmlFor="textareaip" className="text-slate-400">
          Text
        </label>
        <textarea
          id="textareaip"
          className="border h-20 w-full focus:outline outline-slate-500/50 rounded"
        ></textarea>
      </div>
    </div>
  );
}

export default EditNode;
