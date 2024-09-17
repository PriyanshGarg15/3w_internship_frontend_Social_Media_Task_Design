import {
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaUserShield,
  FaUserPlus,
  FaHome,
  FaTasks,
  FaEllipsisH,
} from 'react-icons/fa';

import code from './images/code.png';

const Dashboard = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full overflow-hidden relative">
        <div className="carousel">
          <img src={code} alt="" className="w-full h-64 md:h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 flex justify-center w-full pb-2">

          <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full mx-1"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
        </div>
      </div>

      <div className="py-4 text-center">
        <h3 className="text-lg font-semibold">Share Your Refer Link</h3>
        <div className="flex justify-center space-x-4 mt-3">
          <button className="flex flex-col items-center">
            <FaHome className="text-blue-500 text-2xl" />
            <span className="text-sm">Copy Link</span>
          </button>
          <button className="flex flex-col items-center">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <span className="text-sm">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center">
            <FaFacebook className="text-blue-600 text-2xl" />
            <span className="text-sm">Facebook</span>
          </button>
          <button className="flex flex-col items-center">
            <FaTelegram className="text-blue-400 text-2xl" />
            <span className="text-sm">Telegram</span>
          </button>
        </div>
      </div>
      <div className="py-4 flex justify-center space-x-6">
        <button className="flex flex-col items-center">
          <FaUserShield className="text-yellow-500 text-2xl" />
          <span className="text-sm">Premium Membership</span>
        </button>
        <button className="flex flex-col items-center">
          <FaUserPlus className="text-purple-500 text-2xl" />
          <span className="text-sm">My Leads</span>
        </button>
      </div>

      <div className="py-4 text-center">
        <h3 className="text-lg font-semibold">Connect With Us</h3>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="/" className="text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="/" className="text-blue-400 text-2xl">
            <FaTwitter />
          </a>
          <a href="/" className="text-red-500 text-2xl">
            <FaYoutube />
          </a>
        </div>
      </div>


      <div className="fixed bottom-0 w-full bg-blue-500 flex justify-around py-2 text-white md:hidden">
        <button className="flex flex-col items-center">
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <FaTasks size={24} />
          <span className="text-xs">Task</span>
        </button>
        <button className="flex flex-col items-center">
          <FaEllipsisH size={24} />
          <span className="text-xs">More</span>
        </button>
      </div>

      <div className="hidden md:flex justify-around py-4 bg-gray-100 fixed bottom-0 left-0 right-0">
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaHome size={28} />
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaTasks size={28} />
          <span className="text-sm">Task</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaEllipsisH size={28} />
          <span className="text-sm">More</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
