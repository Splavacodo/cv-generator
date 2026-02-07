"use client";

import { useState } from "react";
import ButtonActions from "@/app/components/ButtonActions";
import Button from "@/app/components/Button";

export default function Header() {
    const [isEditing, setEditing] = useState(false);

    const [fullName, setFullName] = useState("");
    const [originalFullName, setOriginalFullName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [originalPhoneNumber, setOriginalPhoneNumber] = useState("");

    const [email, setEmail] = useState("");
    const [originalEmail, setOriginalEmail] = useState("");

    function handleEditingStateChange() {
        setOriginalFullName(fullName);
        setOriginalPhoneNumber(phoneNumber);
        setOriginalEmail(email);
        setEditing(true);
    }

    function handleFullNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFullName(event.target.value);
    }

    function handlePhoneNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPhoneNumber(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleCancel() {
        setFullName(originalFullName);
        setPhoneNumber(originalPhoneNumber);
        setEmail(originalEmail);
        setEditing(false);
    }

    function handleSave() {
        setEditing(false);
    }

    return (
        <div className="flex flex-col p-3">
            {
                isEditing ?
                    <div className="flex justify-end">
                        <ButtonActions>
                            <Button
                                buttonType="save"
                                buttonText="Save"
                                clickHandler={handleSave}
                            />
                            <Button
                                buttonType="cancel"
                                buttonText="Cancel"
                                clickHandler={handleCancel}
                            />
                        </ButtonActions>
                    </div>
                : 
                    <div className="flex justify-end">
                        <ButtonActions>
                                <Button
                                    buttonType="edit"
                                    buttonText="Edit"
                                    clickHandler={handleEditingStateChange}
                                />
                        </ButtonActions>
                    </div>
            }

            <div className="flex justify-center items-center">
                {
                    isEditing ? (
                        <div className="relative w-1/3 mb-2">
                            <input 
                                type="text"
                                id="full-name"
                                className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-base outline-none transition-colors focus:border-blue-600"
                                placeholder=" "
                                onChange={handleFullNameChange}
                                value={fullName}
                            />
                            <label 
                                htmlFor="full-name"
                                className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                            >
                                Full name
                            </label>
                        </div>
                    ) : (
                        <h1 className="text-2xl font-medium">
                            {fullName ? fullName : "Jane Doe"}
                        </h1>
                    )
                }             
            </div>

            <div className="flex justify-center items-center">
                {
                    isEditing ?
                        <div className="relative w-1/4">
                                <input 
                                    type="text"
                                    id="phone-number"
                                    className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-base outline-none transition-colors focus:border-blue-600"
                                    placeholder=" "
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                />
                                <label 
                                    htmlFor="phone-number"
                                    className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                >
                                    Phone number
                                </label>
                        </div>
                    : 
                        <div className="text-sm">
                            {phoneNumber ? phoneNumber : "808-808-8080"}
                        </div>
                }

                <div className="mx-2">|</div>

                {
                    isEditing ?
                        <div className="relative w-1/4">
                                <input 
                                    type="email"
                                    id="user-email"
                                    className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-base outline-none transition-colors focus:border-blue-600"
                                    placeholder=" "
                                    onChange={handleEmailChange}
                                    value={email}
                                />
                                <label 
                                    htmlFor="user-email"
                                    className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                >
                                    Email
                                </label>
                        </div>
                    :
                    <div className="text-sm">
                        {email ? email : "hehe@xd.com"}
                    </div>
                }
            </div>
        </div>
    );
}
