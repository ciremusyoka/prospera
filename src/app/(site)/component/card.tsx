
import { ChevronRight } from 'lucide-react';

type CardType = {
    icon: React.ReactNode;
    title: string;
    text: string
}
export default function Card({ icon, title, text }: CardType) {

    return (
        <div className="card bg-lightColor shadow-sm flex flex-col justify-between h-[200px] md:w-[250px] w-full"> {/* Add a fixed height like h-[250px] */}
            <div className="card-body flex flex-col">
                <div className="mb-2">
                    {icon}
                </div>

                <h1 className="card-title pr-7 text-textColor flex items-center justify-between">
                    {title}
                    <ChevronRight className="text-textColor h-5 w-5" />
                </h1>

                <p className="text-textColor mt-2 text-sm">{text}</p>
            </div>
        </div>

    )
}