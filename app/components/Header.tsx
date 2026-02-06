"use client";

import { useState } from "react";
import ButtonActions from "@/app/components/ButtonActions";
import Button from "@/app/components/Button";

export default function Header() {
    const [isEditing, setEditing] = useState(false);
    const [fullName, setFullName] = useState("");

    function handleEditingStatus(isEditing: boolean) {
        setEditing(isEditing);
    }

    function handleFullNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFullName(event.target.value);
    }

    return (
        <div className="flex items-center py-8 px-4 mb-3">
            {
                isEditing ? (
                    <div className="ml-auto relative w-1/3">
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
                    <h1 className="ml-auto text-2xl font-medium">
                        {fullName ? fullName : "Jane Doe"}
                    </h1>
                )
            }
            <ButtonActions>
                <Button
                    buttonType="edit"
                    buttonText="Edit"
                    clickHandler={handleEditingStatus}
                />
            </ButtonActions>
        </div>
    );
}
