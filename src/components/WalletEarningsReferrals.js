import React from 'react';
import { FaWallet, FaShareAlt } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';

const WalletEarningsReferrals = () => {
  return (
    <div className="bg-yellow-400 p-4 rounded-lg shadow-lg relative z-0">
      <h2 className="text-center text-lg font-bold mb-4">Taskplanet. Get 10 Points on every referral.</h2>
      <div className="flex justify-between items-center text-center">

        <div className="flex-1 flex flex-col items-center">
          <FaWallet className="text-green-600 text-4xl mb-2" />
          <p className="font-bold text-lg">₹2875.00</p>
          <p className="text-sm text-gray-600">Wallet</p>
        </div>


        <div className="flex-1 flex flex-col items-center">
          <BsCurrencyDollar className="text-blue-600 text-4xl mb-2" />
          <p className="font-bold text-lg">₹2875.00</p>
          <p className="text-sm text-gray-600">Earnings</p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <FaShareAlt className="text-yellow-600 text-4xl mb-2" />
          <p className="font-bold text-lg text-orange-500">2417</p>
          <p className="text-sm text-gray-600">Referrals</p>
        </div>
      </div>
    </div>
  );
};

export default WalletEarningsReferrals;
