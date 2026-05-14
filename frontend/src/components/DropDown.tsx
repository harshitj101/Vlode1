import { PenTool } from "lucide-react";
import { useWriteModal } from "../hooks/useWriteModal";
import { WriteModal } from "./WriteModal";

export const DropDown = () => {
  const modalProps = useWriteModal();

  return (
    <>
      {/* Simple Write Button */}
      <button
        onClick={modalProps.openModal}
        className="flex items-center space-x-2 w-full justify-center bg-darkGray text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-popins"
      >
        <PenTool className="w-4 h-4" />
        <span>Write</span>
      </button>

      {/* Write Modal */}
      <WriteModal {...modalProps} />
    </>
  );
};
