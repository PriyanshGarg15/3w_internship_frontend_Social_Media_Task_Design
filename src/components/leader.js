import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './images/code.png';
import img2 from './images/code2.png';
import img3 from './images/code3.png';
import './carouselAnimations.css';
import WalletEarningsReferrals from './WalletEarningsReferrals'; 

const Leaderboard = () => {
  return (
    <div>
      <WalletEarningsReferrals />
      <div className="p-4 rounded-lg my-4 bg-gradient-to-b from-blue-50 to-blue-100 shadow-lg">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={700}
          showIndicators={true}
          showArrows={true}
          showStatus={false}
          className="carousel-container"
        >
          <Slide image={img1} title="Code Mastery" description="Sharpen your coding skills" />
          <Slide image={img2} title="Tech Innovation" description="Explore the latest in technology" />
          <Slide image={img3} title="Coders Champions" description="The thrill of the code" />
        </Carousel>
      </div>
    </div>
  );
};

const Slide = ({ image, title, description }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} className="object-cover w-full h-40 md:h-72 rounded-xl shadow-lg animate-slideIn" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-xl md:text-3xl font-bold mb-2 animate-fadeInUp">{title}</h2>
        <p className="text-sm md:text-lg animate-fadeInUp delay-200">{description}</p>
      </div>
    </div>
  );
};

export default Leaderboard;
