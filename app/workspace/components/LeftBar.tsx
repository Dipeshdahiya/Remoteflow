"use client"; // Ensures it's a Client Component

import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaInbox, FaUserFriends, FaPlus, FaBars, FaTimes, FaBook, FaEllipsisH, FaTrash, FaEdit, FaFile, FaUser, FaTrashAlt, FaQuestionCircle, FaLifeRing } from 'react-icons/fa'; // Importing icons
import DarkModeToggle from '@/components/navbar/_components/DarkModeToggle';
import Inbox from "./Inbox";
import Link from "next/link";
import Member from "./Member";
import HelpSupport from "./HelpSupport";
import TrashModal from './TrashModel';

const LeftSidebar: React.FC = () => {
  const [notebooks, setNotebooks] = useState<{ name: string; pages: string[] }[]>([]); // State to handle notebooks with pages
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null); // State to handle which notebook dropdown is open
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to track the dropdown
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isMemberOpen, setMemberOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [isTrashOpen, setIsTrashOpen] = useState(false);

  const addNewNotebook = () => {
    setNotebooks([...notebooks, { name: "Untitled", pages: [] }]); // Adds a new notebook
  };
  
  const addPage = (notebookIndex: number) => {
    const updatedNotebooks = [...notebooks];
    updatedNotebooks[notebookIndex].pages.push("Page One"); // Adds a new page with default text
    setNotebooks(updatedNotebooks);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar's visibility
  };

  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle the dropdown for specific notebook
  };

  const handlePageDelete = (notebookIndex: number, pageIndex: number) => {
    const updatedNotebooks = [...notebooks];
    updatedNotebooks[notebookIndex].pages.splice(pageIndex, 1); // Remove the page
    setNotebooks(updatedNotebooks);
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>, notebookIndex: number, pageIndex: number) => {
    const updatedNotebooks = [...notebooks];
    updatedNotebooks[notebookIndex].pages[pageIndex] = event.target.value; // Change the page text
    setNotebooks(updatedNotebooks);
  };
  // Toggle Inbox
  const toggleInbox = () => {
    setIsInboxOpen(!isInboxOpen);
  };
  const toggleMember = () => setMemberOpen(!isMemberOpen);
  const toggleHelp = () => setHelpOpen(!isHelpOpen);
  const toggleTrashModal = () => setIsTrashOpen(!isTrashOpen);
  

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownIndex(null); // Close dropdown if clicking outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-5 left-4 z-30 p-2 w-8 h-8 bg-black text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        {isSidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Left Sidebar */}
      <div
        className={`lg:relative  text-sm z-10 fixed lg:left-0 lg:top-0 top-0 h-full w-[300px] shadow-xl flex flex-col p-6 transition-all duration-300 ease-in-out z-20 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:block bg-white text-black dark:bg-black dark:text-white border`}
      >
        {/* Logo */}
        <Link href="/">
        <div className="mb-2 ml-10 lg:ml-0">
          <h1 className="text-xl font-bold uppercase">REMOTEFLOW</h1>
        </div>
        </Link>

        {/* Main Section */}
        <div className="mb-2 pb-2 border-b">
          {/* Home */}
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-1 pl-2 rounded">
            <FaHome size={20} />
            <span>Home</span>
          </div>
          {/* Inbox */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-1 pl-2 rounded"
            onClick={toggleInbox} // Toggle inbox when clicked
          >
            <FaInbox size={20} />
            <span>Inbox</span>
          </div>
          {/* Members */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-1 pl-2 rounded"
            onClick={toggleMember}
          >
            <FaUserFriends size={20} />
            <span>Members</span>
          </div>
        </div>

        {/* New Workbook Section */}
        <div className="font-100 flex-grow">
          <p className="text-l font-semibold">Workbook</p>
          <button
            onClick={addNewNotebook}
            className="flex mt-2 text-sm items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-2 pl-2 rounded"
          >
            <FaPlus size={16} />
            <span>Add New Notebook</span>
          </button>

          {/* Notebooks List */}
          <div className="flex  flex-col  w-full h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 350px)',minHeight: 'calc(100vh - 350px)' }}>
            <div className="space-y-1">
              {notebooks.map((notebook, notebookIndex) => (
                <div
                  key={notebookIndex}
                  className="relative flex flex-col pl-2 rounded group"
                >
                  <div className="flex text-sm items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-1 pl-2 pr-2 rounded">
                    <div className="flex items-center space-x-3">
                      <FaBook size={16} />
                      <span>{notebook.name}</span>
                    </div>
                    {/* Plus Icon and Three Dots on Hover */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaPlus
                        size={14}
                        className="cursor-pointer hover:text-gray-500"
                        onClick={() => addPage(notebookIndex)}
                      />
                      <FaEllipsisH
                        size={14}
                        className="cursor-pointer hover:text-gray-500"
                        onClick={() => toggleDropdown(notebookIndex)}
                      />
                    </div>
                  </div>

                  {/* Pages List */}
                  <div className="ml-4">
                    {notebook.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="relative flex item-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-1 pl-2 rounded group"
                      >
                        <div className="flex items-center space-x-3 flex-grow">
                          <FaFile size={16} />
                          <input
                            type="text"
                            value={page}
                            onChange={(event) => handlePageChange(event, notebookIndex, pageIndex)}
                            className="border-none cursor-pointer w-20 bg-transparent text-black dark:text-white outline-none flex-grow"
                          />
                        </div>
                        {/* Edit and Trash Icons on Hover */}
                        <div className="flex space-x-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <FaEdit
                            size={14}
                            className="cursor-pointer hover:text-gray-500"
                          />
                          <FaTrash
                            size={14}
                            className="cursor-pointer hover:text-gray-500"
                            onClick={() => handlePageDelete(notebookIndex, pageIndex)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {dropdownIndex === notebookIndex && (
                    <div
                      ref={dropdownRef}
                      className="border absolute z-100 top-full right-0 w-40 bg-white dark:bg-black shadow-md rounded p-2 z-30"
                    >
                      <div className="flex items-center space-x-2 p-1 pl-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
                        <FaEdit size={14} />
                        <span>Edit Notebook</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1 pl-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
                        <FaTrash size={14} />
                        <span>Move to Trash</span>
                      </div>
                    </div>
                  )}
                </div>

              ))}
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="flex border-t text-sm items-end justify-between absolute bottom-0 left-0 w-full p-3 pl-6   bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
          <div className="flex flex-col space-y-1 pb-2">
            <div className="flex items-center space-x-3 flex-row  cursor-pointer p-1">
              <FaUser size={16} />
              <span>User Profile</span>
            </div>
            <div className="flex items-center space-x-3 flex-row  cursor-pointer p-1 " onClick={toggleTrashModal}>
              <FaTrash size={16} />
              <span>View Trash</span>
            </div>
            <div className="flex items-center space-x-3 flex-row  cursor-pointer p-1 " onClick={toggleHelp}>
              <FaQuestionCircle size={20} />
              <span>Help & Support</span>
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </div>
      <Inbox isOpen={isInboxOpen} toggleInbox={toggleInbox} />
      <Member isOpen={isMemberOpen} toggleMember={toggleMember} />
      <HelpSupport isOpen={isHelpOpen} toggleHelp={toggleHelp} />
      <TrashModal isOpen={isTrashOpen} toggleTrashModal={toggleTrashModal} />
      
    </>
  );
};

export default LeftSidebar;
