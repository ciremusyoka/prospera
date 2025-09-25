"use client"
import { useState } from "react";

export default function AccountEditForm() {
    const [activeEditSection, setActiveEditSection] = useState<string | null>(null);

    const toggleSection = (sectionId: string) => {
        if (activeEditSection === sectionId) {
            setActiveEditSection(null); 
        } else {
            setActiveEditSection(sectionId); 
        }
    };

    const isEditing = (sectionId: string) => activeEditSection === sectionId;

    return (
        <div className="rounded-md bg-surface py-4 md:px-10 px-5">
            <div className="border-b border-gray-400 pb-5 my-4">
                <div className="flex justify-between">
                    <h1 className="text-textcolor">Your Name</h1>
                    <EditAndCancelButton
                        isEditing={isEditing("name")}
                        toggleSection={toggleSection}
                        sectionId="name"
                        activeEditSection={activeEditSection as string}
                    />
                </div>
                <span className="text-textcolor text-sm mt-2">
                    {isEditing("name") ? (
                        "This is the name on your resume."
                    ) : "Not provided"
                    }
                </span>

                {isEditing("name") && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs text-textcolor mb-1">First Name</label>
                            <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label className="block text-xs text-textcolor mb-1">Last Name</label>
                            <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        </div>
                        <div className="col-span-1 md:col-span-2 mt-2">
                            <button onClick={() => setActiveEditSection(null)} className="btn btn-md bg-primary text-white border-none">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-b border-gray-400 pb-5 my-4">
                <div className="flex justify-between">
                    <h1 className="text-textcolor">Phone Number</h1>
                    <EditAndCancelButton
                        isEditing={isEditing("phone")}
                        toggleSection={toggleSection}
                        sectionId="phone"
                        activeEditSection={activeEditSection as string}
                    />
                </div>
                <p className="text-textcolor text-sm mt-2">
                    {isEditing("phone") ? (
                        "For notifications, and help logging in."
                    ) : "Not provided"
                    }
                </p>

                {isEditing("phone") && (
                    <div className="mt-4">
                        <label className="block text-xs text-textcolor mb-2">Phone Number</label>
                        <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        <div className="mt-4">
                            <button onClick={() => setActiveEditSection(null)} className="btn btn-md bg-primary text-white border-none">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-b border-gray-400 pb-5 my-4">
                <div className="flex justify-between">
                    <h1 className="text-textcolor">Address</h1>
                    <EditAndCancelButton
                        isEditing={isEditing("address")}
                        toggleSection={toggleSection}
                        sectionId="address"
                        activeEditSection={activeEditSection as string}
                    />
                </div>
                <p className="text-textcolor text-sm mt-2">
                    {isEditing("address") ? (
                        "This is the permanent address where you receive mail."
                    ) : "Nairobi, KE"
                    }
                </p>

                {isEditing("address") && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs text-textcolor mb-1">City</label>
                            <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label className="block text-xs text-textcolor mb-1">Zip / Postal code</label>
                            <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label className="block text-xs text-textcolor mb-1">Country</label>
                            <input className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full" />
                        </div>
                        <div className="col-span-1 md:col-span-2 mt-2">
                            <button onClick={() => setActiveEditSection(null)} className="btn btn-md bg-primary text-white border-none">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

type ButtonPropsType = {
    isEditing: boolean;
    activeEditSection: string;
    toggleSection: (sectionId: string) => void;
    sectionId: string;
};

const EditAndCancelButton = ({ isEditing, toggleSection, sectionId, activeEditSection }: ButtonPropsType) => (
    <button
        onClick={() => toggleSection(sectionId)}
        disabled={Boolean(activeEditSection && activeEditSection !== sectionId)}
        className="text-primary disabled:opacity-50"
    >
        {isEditing ? "Cancel" : "Edit"}
    </button>
);