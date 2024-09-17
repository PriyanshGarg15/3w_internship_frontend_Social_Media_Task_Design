import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

const socialPlatforms = [
  { name: "Instagram", points: 300, icon: <FaInstagram color="#E1306C" /> },
  { name: "Facebook", points: 225, icon: <FaFacebook color="#1877F2" /> },
  { name: "X", points: 85, icon: <FaTwitter color="#1DA1F2" /> },
  { name: "YouTube", points: 130, icon: <FaYoutube color="#FF0000" /> },
  { name: "Telegram", points: 60, icon: <FaTelegram color="#0088cc" /> },
  { name: "LinkedIn", points: 30, icon: <FaLinkedin color="#0077B5" /> },
];

const SocialMediaTask = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-6 rounded-lg my-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border border-gray-300 shadow-lg">
      <div className="font-semibold text-white mb-6 text-xl text-center">
        Social Media Task
      </div>
      <div className="grid grid-cols-3 gap-6">
        {socialPlatforms.map((platform, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-2 transition-all duration-300 ease-in-out ${
              hovered === index ? "scale-105 shadow-2xl border-blue-400" : ""
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`text-4xl transition-transform duration-300 ease-in-out ${
                hovered === index ? "scale-125" : ""
              }`}
            >
              {platform.icon}
            </div>
            <div className="font-semibold text-lg mt-4 text-gray-800">
              {platform.name}
            </div>
            <div className="text-sm text-green-500 mt-2">
              +{platform.points} points
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTask;
