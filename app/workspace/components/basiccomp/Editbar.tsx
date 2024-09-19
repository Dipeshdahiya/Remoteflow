import React, { useState } from "react";
import { FaCheck, FaTimes,FaFile,FaBook,FaUser } from "react-icons/fa";

interface EditBarProps {
  pageName: string;
  pageIcon: JSX.Element;
  onSave: (newName: string, newIcon: JSX.Element) => void;
  onCancel: () => void;
}

const EditBar: React.FC<EditBarProps> = ({ pageName, pageIcon, onSave, onCancel }) => {
  const [newPageName, setNewPageName] = useState(pageName);
  const [newPageIcon, setNewPageIcon] = useState(pageIcon);

  const handleIconChange = (icon: JSX.Element) => {
    setNewPageIcon(icon);
  };

  return (
    <div className="fixed top-0 right-0 w-[300px] h-full bg-white dark:bg-gray-800 p-6 shadow-lg z-50">
      <h2 className="text-xl font-bold mb-4">Edit Page</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Page Name</label>
        <input
          type="text"
          value={newPageName}
          onChange={(e) => setNewPageName(e.target.value)}
          className="border w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select Icon</label>
        <div className="flex space-x-3">
          {/* Replace these icons with any set of icons you prefer */}
          <button onClick={() => handleIconChange(<FaFile size={20} />)}>
            <FaFile size={20} className={newPageIcon === <FaFile size={20} /> ? "text-blue-500" : ""} />
          </button>
          <button onClick={() => handleIconChange(<FaBook size={20} />)}>
            <FaBook size={20} className={newPageIcon === <FaBook size={20} /> ? "text-blue-500" : ""} />
          </button>
          <button onClick={() => handleIconChange(<FaUser size={20} />)}>
            <FaUser size={20} className={newPageIcon === <FaUser size={20} /> ? "text-blue-500" : ""} />
          </button>
          {/* Add more icons here */}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => onSave(newPageName, newPageIcon)}
          className="bg-green-500 text-white p-2 rounded flex items-center"
        >
          <FaCheck className="mr-1" /> Done
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white p-2 rounded flex items-center"
        >
          <FaTimes className="mr-1" /> Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBar;
