"use client"; // Ensures it's a Client Component

import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaInbox, FaUserFriends, FaPlus, FaBars, FaTimes, FaBook, FaEllipsisH, FaTrash, FaEdit, FaFile, FaUser, FaTrashAlt, FaQuestionCircle, FaLifeRing } from 'react-icons/fa'; // Importing icons
import DarkModeToggle from '@/components/navbar/_components/DarkModeToggle';
import Inbox from "./Inbox";
import Link from "next/link";
import Member from "./Member";
import HelpSupport from "./HelpSupport";
import TrashModal from './TrashModel';
import Logout from "@/lib/Logout";
import { LogOut } from "lucide-react";

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
        className="fixed z-30 flex items-center justify-center w-8 h-8 p-2 text-white transition-all duration-300 transform bg-black rounded-full shadow-lg lg:hidden top-5 left-4 hover:scale-110"
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
        <div className="pb-2 mb-2 border-b">
          {/* Home */}
          <div className="flex items-center p-1 pl-2 space-x-3 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
            <FaHome size={20} />
            <span>Home</span>
          </div>
          {/* Inbox */}
          <div
            className="flex items-center p-1 pl-2 space-x-3 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
            onClick={toggleInbox} // Toggle inbox when clicked
          >
            <FaInbox size={20} />
            <span>Inbox</span>
          </div>
          {/* Members */}
          <div
            className="flex items-center p-1 pl-2 space-x-3 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
            onClick={toggleMember}
          >
            <FaUserFriends size={20} />
            <span>Members</span>
          </div>
        </div>

        {/* New Workbook Section */}
        <div className="flex-grow font-100">
          <p className="font-semibold text-l">Workbook</p>
          <button
            onClick={addNewNotebook}
            className="flex items-center p-2 pl-2 mt-2 space-x-3 text-sm rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <FaPlus size={16} />
            <span>Add New Notebook</span>
          </button>

          {/* Notebooks List */}
          <div className="flex flex-col w-full h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 350px)',minHeight: 'calc(100vh - 350px)' }}>
            <div className="space-y-1">
              {notebooks.map((notebook, notebookIndex) => (
                <div
                  key={notebookIndex}
                  className="relative flex flex-col pl-2 rounded group"
                >
                  <div className="flex items-center justify-between p-1 pl-2 pr-2 text-sm rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <FaBook size={16} />
                      <span>{notebook.name}</span>
                    </div>
                    {/* Plus Icon and Three Dots on Hover */}
                    <div className="flex space-x-2 transition-opacity opacity-0 group-hover:opacity-100">
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
                        className="relative flex p-1 pl-2 rounded cursor-pointer item-center hover:bg-gray-100 dark:hover:bg-gray-900 group"
                      >
                        <div className="flex items-center flex-grow space-x-3">
                          <FaFile size={16} />
                          <input
                            type="text"
                            value={page}
                            onChange={(event) => handlePageChange(event, notebookIndex, pageIndex)}
                            className="flex-grow w-20 text-black bg-transparent border-none outline-none cursor-pointer dark:text-white"
                          />
                        </div>
                        {/* Edit and Trash Icons on Hover */}
                        <div className="flex p-1 space-x-2 transition-opacity opacity-0 group-hover:opacity-100">
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
                      className="absolute right-0 z-30 w-40 p-2 bg-white border rounded shadow-md z-100 top-full dark:bg-black"
                    >
                      <div className="flex items-center p-1 pl-2 space-x-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                        <FaEdit size={14} />
                        <span>Edit Notebook</span>
                      </div>
                      <div className="flex items-center p-1 pl-2 space-x-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
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
        <div className="absolute bottom-0 left-0 flex items-end justify-between w-full p-3 pl-6 text-sm text-black transition-all duration-300 bg-white border-t dark:bg-black dark:text-white">
          <div className="flex flex-col pb-2 space-y-1">
            <div className="flex flex-row items-center p-1 space-x-3 cursor-pointer">
              <FaUser size={16} />
              <span>User Profile</span>
            </div>
            <div className="flex flex-row items-center p-1 space-x-3 cursor-pointer " onClick={toggleTrashModal}>
              <FaTrash size={16} />
              <span>View Trash</span>
            </div>
            <div className="flex flex-row items-center p-1 space-x-3 cursor-pointer ">
              <LogOut size={20} />
              <Logout />
            </div>
            <div className="flex flex-row items-center p-1 space-x-3 cursor-pointer " onClick={toggleHelp}>
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
