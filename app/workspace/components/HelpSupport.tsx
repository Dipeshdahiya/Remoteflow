import { FaAngleDoubleLeft, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useRef } from 'react';

const HelpSupport: React.FC<{ isOpen: boolean; toggleHelp: () => void }> = ({ isOpen, toggleHelp }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                toggleHelp();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [toggleHelp]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 help-modal-background">
            <div className="bg-white dark:bg-black border  rounded-lg shadow-lg w-4/5 max-w-screen-lg h-4/5 p-8 pr-16 pl-16 relative overflow-hidden">
                {/* Close Button */}
                <button className="absolute top-6 right-6" onClick={toggleHelp}>
                    <FaAngleDoubleLeft size={24} className="text-gray-700 dark:text-white" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full pr-4">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">Help & Support</h2>

                    {/* Instructions Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">How to Use the Features:</h3>

                        <ul className="list-inside text-sm text-justify space-y-4 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Profile Icon: </strong>
                                 The profile icon allows you to access and manage your personal profile settings.
                                Here, you can update your profile picture, modify personal information, and configure your account preferences.
                                It also provides quick access to account security settings, such as changing your password and enabling two-factor authentication for added security.
                            </li>
                            <li>
                                <strong>Login Button: </strong>
                                This button is essential for accessing your account.
                                By clicking it, you can log in with your credentials or log out of your current session.
                                If you have multiple accounts or need to switch users, the login button also facilitates seamless account switching while keeping your data secure.
                            </li>
                            <li>
                                <strong>Inbox Button: </strong>
                                The inbox button directs you to your message center where you can view and manage your messages and notifications.
                                It aggregates all communications, including new messages, alerts, and updates from the system or other users.
                                You can also organize your inbox with labels, mark messages as read, or archive them to keep your inbox uncluttered.
                            </li>
                            <li>
                                <strong>Members Button: </strong>
                                Clicking this button opens the members section, where you can view and manage your connections, including friends, groups, and recent activities.
                                It provides tools to search for and connect with new members, manage existing connections, and view activity feeds.
                                This feature helps you stay engaged with your network and maintain an organized list of contacts.
                            </li>
                            <li>
                                <strong>Home Button: </strong>
                                The home button navigates you back to the main dashboard or homepage.
                                It provides a quick way to return to your primary workspace or overview screen.
                                From the home page, you can access key features and information at a glance, ensuring that you can efficiently manage your tasks and activities.
                            </li>
                            <li>
                                <strong>Trash: </strong>
                                The trash section allows you to recover deleted items and manage discarded files.
                                It stores items that you have removed, providing a safety net in case you need to restore something accidentally deleted.
                                You can also permanently delete items from the trash to free up space and ensure your data is up to date.
                            </li>
                            <li>
                                <strong>Right Menu (Calendar & More): </strong>
                                The right menu offers additional tools and features, including a calendar for scheduling events and managing appointments.
                                It may also include other utility tools such as reminders, to-do lists, or quick access to frequently used features.
                                This menu is designed to enhance your productivity and streamline your workflow.
                            </li>
                            <li>
                                <strong>AutoWrite Button: </strong>
                                The AutoWrite button activates a voice-to-text feature that transcribes spoken words into written text.
                                This tool is particularly useful for drafting documents quickly or for those who prefer speaking to typing.
                                It supports various languages and accents, making it a versatile tool for efficient content creation and communication.
                            </li>
                            <li>
                                <strong>Speaker Button: </strong>
                                The speaker button enables text-to-speech functionality, allowing the system to read aloud the content in your notebook or on-screen text.
                                This feature is beneficial for reviewing written content without having to read it manually and can assist with accessibility for users with visual impairments.
                                It supports adjustable reading speeds and voice settings to suit your preferences.
                            </li>
                        </ul>
                    </div>


                    {/* Contact Section */}
                    <div className="mt-6 text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Still Need Help?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Reach out to us using the options below:</p>

                        {/* Contact Buttons */}
                        <div className="flex justify-center space-x-4">
                            {/* Phone Button */}
                            <a
                                href="tel:+917496801160"
                                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                            >
                                <FaPhoneAlt size={16} />
                            </a>

                            {/* Email Button */}
                            <a
                                href="mailto:brijeshdahiya18@gmail.com"
                                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
                            >
                                <FaEnvelope size={16} />
                            </a>

                            {/* LinkedIn Button */}
                            <a
                                href="https://www.linkedin.com/in/dipesh-dahiya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
                            >
                                <FaLinkedin size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
