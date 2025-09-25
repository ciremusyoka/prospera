"use client"
import { changePasswordSchema, ChangePasswordT } from "@/app/zodObject";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EditAndCancelButton } from "./EditAndCancelButton";

export default function LoginSecurity() {
    const [activeEditSection, setActiveEditSection] = useState<string | null>(null);
    const {register, handleSubmit, formState: { errors } } = useForm<ChangePasswordT>({
        resolver: zodResolver(changePasswordSchema)
    });

    const toggleSection = (sectionId: string) => {
        if (activeEditSection === sectionId) {
            setActiveEditSection(null);
        } else {
            setActiveEditSection(sectionId);
        }
    };

    const isEditing = (sectionId: string) => activeEditSection === sectionId;

    const onSubmit = (data: ChangePasswordT) => {
        console.log(data);
        setActiveEditSection(null);
    }

    return (
        <div>
            <div className="rounded-md bg-surface py-4 md:px-10 px-5 ">
                <p className="text-base mb-6 font-medium text-textColor text-center">Update your password and secure your account</p>
                <div className="border-b border-gray-400 pb-5">
                    <div className="flex justify-between">
                        <h1 className="text-textcolor">Email address</h1>
                        <EditAndCancelButton
                            isEditing={isEditing("email")}
                            toggleSection={toggleSection}
                            sectionId="email"
                            activeEditSection={activeEditSection as string}
                            buttonText="View"
                        />
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
                                <label className="block text-base text-textcolor mb-1">Email</label>
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
                        <EditAndCancelButton
                            isEditing={isEditing("password")}
                            toggleSection={toggleSection}
                            sectionId="password"
                            activeEditSection={activeEditSection as string}
                            buttonText="Change"
                        />
                    </div>
                    <p className="text-textcolor text-sm mt-2">
                        {isEditing("password") ? (
                            ""
                        ) : "*********"
                        }
                    </p>

                    {isEditing("password") && (
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                            <div className="mb-3">
                                <label htmlFor="currentPassword" className="block text-xs text-textcolor mb-2">Current Password </label>
                                <input
                                    className="border border-gray-600 py-2 text-textcolor pl-3 rounded-md w-full focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
                                    {...register("currentPassword")}
                                />
                                {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="block text-xs text-textcolor mb-2">New Password </label>
                                <input
                                    className="border border-gray-600 py-2 text-textcolor pl-3 rounded-md w-full focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
                                    {...register("newPassword")}
                                />
                                {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmNewPassword" className="block text-xs text-textcolor mb-2">Confirm Password </label>
                                <input
                                    className="border border-gray-600 py-2 text-textcolor pl-3 rounded-md w-full focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
                                    {...register("confirmNewPassword")}
                                />
                                {errors.confirmNewPassword && <p className="text-red-500 text-sm">{errors.confirmNewPassword.message}</p>}
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor font-medium rounded-lg shadow-md hover:opacity-90 transition">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};