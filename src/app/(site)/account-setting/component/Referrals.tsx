
import { TITLE } from "@/app/constants";
import CopyButton from "../../component/CopyButton";

export default function Referrals() {
    const link = "https://68661c8cb18bbe000836da47--playful-concha-41d70a.netlify.app/account"

    return (
        <div>
            <div className=" mb-8 rounded-md bg-surface py-4 px-4 sm:px-6 md:px-10 space-y-6">
                <h1 className="text-textcolor font-medium text-base sm:text-lg">Share your referral link</h1>

                <p className="text-xs sm:text-sm text-textcolor">
                    Invite your friends to join {TITLE} for free, and for each one who signs up, you will receive a reward.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <input
                        value={link}
                        readOnly
                        className="border border-gray-600 py-1.5 text-textcolor pl-3 text-xs sm:text-sm rounded-md w-full sm:w-3/4"
                    />
                    <CopyButton link={link} />
                </div>
            </div>


        </div>
    );
};