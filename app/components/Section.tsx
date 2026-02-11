"use client";

import { useState } from "react";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";
import Input from "./Input";

export default function Section({ title, type }: { title: string, type: string}) {
    const [isAdding, setAdding] = useState(false);
    const [experience, setExperience] = useState({
        experienceId: "",
        jobTitle: "",
        datesOfAttendence: "",
        companyName: "",
        jobLocation: "",
        jobDescription: ""
    });

    function toggleIsAdding() { setAdding(!isAdding); }

    function handleJobTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setExperience({
            ...experience,
            jobTitle: event.target.value
        });
    }

    function handleDatesChange(event: React.ChangeEvent<HTMLInputElement>) {
        setExperience({
            ...experience,
            datesOfAttendence: event.target.value
        });
    }

    function handleCompanyNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setExperience({
            ...experience,
            companyName: event.target.value
        });
    }

    function handleJobLocationChange(event: React.ChangeEvent<HTMLInputElement>) {
        setExperience({
            ...experience,
            jobLocation: event.target.value
        });
    }

    function handleJobDescriptionChange(event: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) {
        setExperience({
            ...experience,
            jobDescription: event.target.value
        });
    }

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
                                    <Input 
                                        inputId="job-title"
                                        inputType="text"
                                        inputPlaceholder="Job title"
                                        onChangeHandler={handleJobTitleChange}
                                        inputValue={experience.jobTitle}
                                    />

                                    <Input 
                                        inputId="dates-of-attendence"
                                        inputType="text"
                                        inputPlaceholder="Start date - End date"
                                        onChangeHandler={handleDatesChange}
                                        inputValue={experience.datesOfAttendence}
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <Input 
                                        inputId="company-name"
                                        inputType="text"
                                        inputPlaceholder="Company name"
                                        onChangeHandler={handleCompanyNameChange}
                                        inputValue={experience.companyName}
                                    />

                                    <Input 
                                        inputId="job-location"
                                        inputType="text"
                                        inputPlaceholder="Job location"
                                        onChangeHandler={handleJobLocationChange}
                                        inputValue={experience.jobLocation}
                                    />
                                </div>

                                <textarea 
                                    name="job-description" 
                                    id="job-description" 
                                    placeholder="Job description"
                                    className="border-2 border-solid border-gray-400 p-2 text-sm"
                                    rows={5}
                                    onChange={handleJobDescriptionChange}
                                    value={experience.jobDescription}
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
