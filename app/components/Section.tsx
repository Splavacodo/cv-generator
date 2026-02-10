"use client";

import { useState } from "react";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";

export default function Section({ title, type }: { title: string, type: string}) {
    const [isAdding, setAdding] = useState(false);

    function toggleIsAdding() { setAdding(!isAdding); }

    {
        switch(type) {
            case "experience":
                return (
                    <section className="px-16 mb-8">
                        <h1 className="text-2xl font-normal border-b-1 border-black py-2 mb-2">
                            {title}
                        </h1>

                        <SectionContentList>
                            <div></div>
                        </SectionContentList>

                        {isAdding && (
                            <div className="flex flex-col pb-4 gap-2">
                                <div className="flex justify-between">
                                    <div className="relative w-1/3 mb-2">
                                        <input
                                            id="job-title"
                                            type="text"
                                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="job-title"
                                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Job title
                                        </label>
                                    </div>

                                    <div className="relative w-1/3 mb-2">
                                        <input
                                            id="dates-of-attendence"
                                            type="text"
                                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                                            placeholder=" "
                                        />

                                        <label
                                            htmlFor="dates-of-attendence"
                                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Start date - End date
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="relative w-1/3 mb-2">
                                        <input
                                            id="company-name"
                                            type="text"
                                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="company-name"
                                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Company name
                                        </label>
                                    </div>

                                    <div className="relative w-1/3 mb-2">
                                        <input
                                            id="location"
                                            type="text"
                                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                                            placeholder=" "
                                        />

                                        <label
                                            htmlFor="location"
                                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Location
                                        </label>
                                    </div>
                                </div>

                                <textarea 
                                    name="job-description" 
                                    id="job-description" 
                                    placeholder="Job description"
                                    className="border-2 border-solid border-gray-400 p-2 text-sm"
                                    rows={5}
                                />
                            </div>
                        )}

                        {
                            !isAdding ? 
                                <ButtonActions>
                                    <Button
                                        buttonType="addContent"
                                        buttonText="Add experience"
                                        clickHandler={toggleIsAdding}
                                    />
                                </ButtonActions>
                            :
                              <ButtonActions>
                                <Button
                                    buttonType="save"
                                    buttonText="Add"
                                    clickHandler={toggleIsAdding}
                                />

                                <Button
                                    buttonType="cancel"
                                    buttonText="Cancel"
                                    clickHandler={toggleIsAdding}
                                />
                              </ButtonActions>
                        }
                    </section>
                );
            case "education":
                return (
                    <section className="px-16 mb-8">
                        <h1 className="text-2xl font-normal border-b-1 border-black py-2 mb-2">
                            {title}
                        </h1>

                        <SectionContentList>
                            <div></div>
                        </SectionContentList>

                        <ButtonActions>
                            <Button
                                buttonType="addContent"
                                buttonText="Add education"
                                clickHandler={() => {}}
                            />
                        </ButtonActions>
                    </section>
                );
        }
    }
}
