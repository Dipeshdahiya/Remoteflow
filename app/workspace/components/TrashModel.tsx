import { FaAngleDoubleLeft, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useRef } from 'react';

const TrashModal: React.FC<{ isOpen: boolean; toggleTrashModal: () => void }> = ({ isOpen, toggleTrashModal }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                toggleTrashModal();
            }
        };
        window.addEventListener("click", handleOutClick);
        return () => window.removeEventListener("click", handleOutClick);
    }, [toggleTrashModal]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 help-modal-background">
            <div className="bg-white dark:bg-black border  rounded-lg shadow-lg w-3/5 max-w-screen-lg h-4/5 p-8 pr-16 pl-16 relative overflow-hidden">
                {/* Close Button */}
                <button className=" absolute top-6 right-6" onClick={toggleTrashModal}>
                    <FaAngleDoubleLeft size={24} className="text-gray-700 dark:text-white" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full pr-4">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">Trash</h2>
                    <div className="flex relative justify-center items-center w-full h-full dark:text-gray-400">
                  <p className="mb-20">No Items Here</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrashModal;
