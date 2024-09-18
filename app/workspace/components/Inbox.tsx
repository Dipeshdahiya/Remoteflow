import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa"; // Importing double left arrow icon

const Inbox: React.FC<{ isOpen: boolean; toggleInbox: () => void }> = ({ isOpen, toggleInbox }) => {
  return (
    <>
      <div
        className={`fixed left-0 lg:left-64 lg:z-[1] top-0 h-full w-64 bg-white dark:bg-black text-black dark:text-white shadow-xl p-4 z-50 transition-all duration-300 transform border ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`} // Transition for sliding from left
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Inbox</h2>
          <button onClick={toggleInbox}>
            <FaAngleDoubleLeft size={18} /> {/* Double left arrow */}
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold">Unread</h3>
          <div className="text-sm border-t border-gray-300 dark:border-gray-700 py-2">
            {/* Unread Messages Placeholder */}
            <p>No unread messages.</p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold">Read</h3>
          <div className="text-sm border-t border-gray-300 dark:border-gray-700 py-2">
            {/* Read Messages Placeholder */}
            <p>No read messages.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
