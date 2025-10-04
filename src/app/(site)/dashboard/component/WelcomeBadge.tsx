import { SLOGAN } from "@/constants/constants.path";
import { ArrowRight } from "lucide-react";

export default function WelcomeBadge() {
  return (
    <div className="bg-lightColor p-6 rounded-md w-full shadow-md flex flex-col items-center text-center ">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-textColor">
            Welcome to Prospera, let’s get started!
        </h3>
        <p className="mt-2 text-sm sm:text-base text-textColor max-w-md">
            {SLOGAN}
        </p>
        <div className="mt-4 w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
            <progress
                className="progress progress-success w-full md:w-100 h-3 sm:h-4"
                value="20"
                max="100"
            ></progress>
        </div>
        <div className="mt-3 flex flex-row gap-2 md:gap-6"> 
            <p className="text-sm">Complete Profile</p>
            <ArrowRight/>
            <p className="text-sm">Deposit</p>
            <ArrowRight/>
            <p className="text-sm">Invest</p>
        </div>
    </div>
  );
}



