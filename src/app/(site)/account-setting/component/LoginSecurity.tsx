"use client"
import { ChangeEvent, useState } from "react";
// import { ChangePasswordFormErrors, ChangePasswordInterface, validateChangePassword } from "@/app/utills/validateForm";

export default function LoginSecurity() {
    const [activeEditSection, setActiveEditSection] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: ""
    });

    // Handle Changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
    };


    const toggleSection = (sectionId: string) => {
        if (activeEditSection === sectionId) {
            setActiveEditSection(null); // collapse if already open
        } else {
            setActiveEditSection(sectionId); // open this, close others
        }
    };

    const isEditing = (sectionId: string) => activeEditSection === sectionId;

    // SUBMIT UPDATED PASSWORD
    const updatePassword = () => {
      // if (validateForm()) {
      //     console.log(formData);
      //
      //     setActiveEditSection(null)
      // } else {
      //     console.log(formErrors);
      //
      // }
    }
    return (
        <div>
            <div className="rounded-md bg-surface py-4 md:px-10 px-5 ">
                <p className="text-base mb-6 font-medium text-textColor text-center">Update your password and secure your account</p>
                <div className="border-b border-gray-400 pb-5">
                    <div className="flex justify-between">
                        <h1 className="text-textcolor">Email address</h1>
                        <button
                            onClick={() => toggleSection("email")}
                            disabled={Boolean(activeEditSection && activeEditSection !== "email")}
                            className="text-primary disabled:opacity-50"
                        >
                            {isEditing("email") ? "Cancel" : "View"}
                        </button>
                    </div>
                    <span className="text-textcolor text-xs mt-2">
                        {isEditing("email") ? (
                            "Contact support to change your email address.."
                        ) : "frank@gmail.com"
                        }
                    </span>

                    {isEditing("email") && (
                        <div className="my-4">
                            <div>
                                <label className="block text-xs text-textcolor mb-1">Email</label>
                                <input value={"frank@gmail.com"} className="border border-gray-600 py-1.5 text-textcolor pl-3 bg-accents rounded-md w-full" />
                            </div>

                            <p className="text-warning text-sm mt-2 ">Email not verified</p>

                            {/* <div className="col-span-1 md:col-span-2 mt-2">
                                <button onClick={() => setActiveEditSection(null)} className="btn btn-md bg-primary text-white border-none">
                                    Save
                                </button>
                            </div> */}
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-400 pb-5 my-4">
                    <div className="flex justify-between">
                        <h1 className="text-textcolor">Password</h1>
                        <button
                            onClick={() => toggleSection("password")}
                            disabled={Boolean(activeEditSection && activeEditSection !== "password")}
                            className="text-primary disabled:opacity-50"
                        >
                            {isEditing("password") ? "Cancel" : "Change"}
                        </button>
                    </div>
                    <p className="text-textcolor text-sm mt-2">
                        {isEditing("password") ? (
                            ""
                        ) : "*********"
                        }
                    </p>

                    {isEditing("password") && (
                        <div className="mt-4">
                            <div className="mb-3">
                                <label htmlFor="current_password" className="block text-xs text-textcolor mb-2">Current Password </label>
                                <input
                                    type="password"
                                    name="current_password"
                                    value={formData.current_password}
                                    onChange={handleChange}
                                    className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="new_password" className="block text-xs text-textcolor mb-2">New Password </label>
                                <input
                                    type="password"
                                    name="new_password"
                                    value={formData.new_password}
                                    onChange={handleChange}
                                    className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm_password" className="block text-xs text-textcolor mb-2">Confirm Password </label>
                                <input
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    type="password"
                                    className="border border-gray-600 py-1.5 text-textcolor pl-3 rounded-md w-full"
                                />

                            </div>

                            <div className="mt-4">
                                <button onClick={updatePassword} className="btn btn-md bg-primary text-white border-none px-6">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};