import { AccountInfo } from "../utils/icons";
import PersonalInfo from "./component/PersonalInfo";
import LoginSecurity from "./component/LoginSecurity";
import Referrals from "./component/Referrals";
import DashBoardNavBar from "../dashboard/Navbar";


export default function Account() {

    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-secondaryColor via-primaryColor to-secondaryColor ">
            <DashBoardNavBar isAccountSettings={true} />
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
                <div className="mb-6">
                    <h1 className="text-textColor text-xl font-medium mb-1">Account</h1>
                    <p className="text-textColor text-base">frank@gmail.com</p>
                </div>
                <div className="tabs tabs-border md:tabs-xl tabs-md">
                    <input type="radio" name="my_tabs_2" className="tab text-textColor font-bold" aria-label={AccountInfo[0].title} defaultChecked />
                    <div className="tab-content border bg-lightColor p-10">
                        <PersonalInfo />
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-textColor font-bold" aria-label={AccountInfo[1].title}  />
                    <div className="tab-content border bg-lightColor p-10">
                        <LoginSecurity />
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-textColor font-bold" aria-label={AccountInfo[2].title} />
                    <div className="tab-content border bg-lightColor p-10">
                        <Referrals />
                    </div>
                </div>

            </div>
        </div>

    );
}