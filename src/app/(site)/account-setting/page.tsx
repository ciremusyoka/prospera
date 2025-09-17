"use client"
// import { useRouter } from "next/navigation";
import { AccountInfo } from "../utils/icons";
import Card from "../component/card";
import Image from "next/image";
// import { FRONT_END_URLS } from "@/app/constants";


export default function Account() {
    // const router = useRouter();

    const handleNavigate = (key: string) => {
        // router.push(`${FRONT_END_URLS.ACCOUNT_SETTINGS}/${key}`);
    };
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
            <div className="mb-6">
                <h1 className="text-textColor text-xl font-medium mb-1">Account</h1>
                <p className="text-gray-800 text-base">frank@gmail.com</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {AccountInfo.map((item) => (
                    <div key={item.id} onClick={() => handleNavigate(item.key)} className="cursor-pointer">
                        <Card
                            icon={<Image src={item.Icon} width={35} height={35} alt={item.title} />}
                            title={item.title}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}