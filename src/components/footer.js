import { FaHome, FaPlus, FaCog, FaUser, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="flex justify-around text-white animate-pulse">
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaPlus size={24} />
          <span className="text-xs">Add</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaEnvelope size={24} />
          <span className="text-xs">Messages</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaUser size={24} />
          <span className="text-xs">Profile</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaCog size={24} />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
