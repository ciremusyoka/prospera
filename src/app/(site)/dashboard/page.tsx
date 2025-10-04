import WelcomeBadge from "./component/WelcomeBadge";
import { WalletCard} from "./component/WalletCard";
import InvestmentCard from "./component/InvestmentCard";

export default function DashboardPage() {
    return (
        <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <WelcomeBadge />
            <div className="flex flex-col md:flex-row items-start justify-center gap-6 my-5">
                <div className="flex-1">
                    <WalletCard />
                </div>

                <div className="flex-1">
                    <InvestmentCard />
                </div>
            </div>
        </div>
    );
}
