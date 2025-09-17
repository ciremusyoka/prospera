import { ReactNode } from "react";
import DashBoardNavBar from "../dashboard/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <DashBoardNavBar isAccountSettings={true} />
            <main className="flex-1 overflow-y-auto bg-gradient-to-r from-secondaryColor via-primaryColor to-secondaryColor">{children}</main>
        </div>
    );
}
