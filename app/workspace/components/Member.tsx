import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa"; // Importing double left arrow icon

const Member: React.FC<{ isOpen: boolean; toggleMember: () => void }> = ({ isOpen, toggleMember }) => {
  return (
    <>
      <div
        className={`fixed left-0 lg:left-64 lg:z-[1] top-0 h-full w-64 bg-white dark:bg-black text-black dark:text-white shadow-xl p-4 z-50 transition-all duration-300 transform border ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`} // Transition for sliding from left
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Members</h2>
          <button onClick={toggleMember}>
            <FaAngleDoubleLeft size={18} /> {/* Double left arrow */}
          </button>
        </div>

        {/* Online Friends Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">Online Friends</h3>
          <div className="border-t border-gray-300 dark:border-gray-700 py-2">
            {/* List of Online Friends Placeholder */}
            <p>No online friends.</p>
          </div>
        </div>

        {/* All Friends Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">All Friends</h3>
          <div className="border-t border-gray-300 dark:border-gray-700 py-2">
            {/* List of All Friends Placeholder */}
            <p>No friends yet.</p>
          </div>
        </div>

        {/* Groups Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">Groups</h3>
          <div className="border-t border-gray-300 dark:border-gray-700 py-2">
            {/* List of Groups Placeholder */}
            <p>No groups available.</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">Recent Activity</h3>
          <div className="border-t border-gray-300 dark:border-gray-700 py-2">
            {/* Recent Activity Placeholder */}
            <p>No recent activity.</p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">Suggestions</h3>
          <div className="border-t border-gray-300 dark:border-gray-700 py-2">
            {/* Suggested Members or Groups */}
            <p>No suggestions.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
