import { Wallet, TrendingUp } from "lucide-react";

export const WalletCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 md:gap-6 md:p-6 rounded-md  bg-lightColor">

      <div className="bg-lightColor rounded-lg p-5 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-2 mb-3">
          <Wallet className="text-primaryColor" />
          <h4 className="font-semibold text-textColor md:text-lg text-sm">Your Wallet</h4>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-textColor">
            <span>Principal:</span> <span className="font-medium">$0.00</span>
          </div>
          <div className="flex justify-between text-sm text-textColor">
            <span>Earnings:</span> <span className="font-medium">$0.00</span>
          </div>
          <div className="flex justify-between text-sm text-textColor">
            <span>Total Balance:</span> 
            <span className="font-semibold text-primaryColor">$0.00</span>
          </div>
        </div>
      </div>

      <div className="bg-lightColor rounded-lg md:p-5 p-2 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="text-secondaryColor" />
          <h4 className="font-semibold text-textColor text-sm md:text-lg">Active Investment</h4>
        </div>

        <div className="border border-gray-300 rounded-md p-4 bg-surface">
          <div className="flex justify-between text-sm text-textColor mb-1">
            <span className="font-medium">Plan:</span> <span className="font-medium">Basic</span>
          </div>
          <div className="flex justify-between text-sm text-textColor mb-1">
            <span>Deposit:</span> <span>$20.00</span>
          </div>
          <div className="flex justify-between text-sm text-textColor mb-1">
            <span>Returns:</span> <span>5%</span>
          </div>
          <div className="flex justify-between text-sm text-textColor">
            <span>Status:</span> 
            <span className="text-green-600 font-semibold">Active</span>
          </div>
        </div>
      </div>

    </div>
  );
};


