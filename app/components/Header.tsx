"use client";

import { useState } from "react";
import ButtonActions from "@/app/components/ButtonActions";
import Button from "@/app/components/Button";
import Input from "./Input";

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
                        <Input
                            inputId="full-name"
                            inputType="text"
                            inputPlaceholder="Full name"
                            inputValue={fullName}
                            onChangeHandler={handleFullNameChange}
                        />
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
                        <Input
                            inputId="phone-number"
                            inputType="text"
                            inputPlaceholder="Phone number"
                            inputValue={phoneNumber}
                            onChangeHandler={handlePhoneNumberChange}
                        />
                    : 
                        <div className="text-sm">
                            {phoneNumber ? phoneNumber : "808-808-8080"}
                        </div>
                }

                <div className="mx-2">|</div>

                {
                    isEditing ?
                        <Input
                            inputId="user-email"
                            inputType="email"
                            inputPlaceholder="Email"
                            inputValue={email}
                            onChangeHandler={handleEmailChange}
                        />
                    :
                    <div className="text-sm">
                        {email ? email : "hehe@xd.com"}
                    </div>
                }
            </div>
        </div>
    );
}
