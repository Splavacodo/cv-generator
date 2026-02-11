"use client";

import { useState } from "react";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";
import Input from "./Input";
import Experience from "./Experience";

export default function Section({ title, type }: { title: string, type: string}) {
    const [isAdding, setAdding] = useState(false);
    const [contentList, setContentList] = useState<Array<Record<string, string>>>([]);
    const [experience, setExperience] = useState({
        id: "",
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

    function handleAddExperience() {
        toggleIsAdding();

        const updatedExperience = {
            ...experience,
            id: crypto.randomUUID()
        };

        setExperience(updatedExperience);

        setContentList([
            ...contentList,
            updatedExperience
        ]);

        const emptyExperience = {
            id: "",
            jobTitle: "",
            datesOfAttendence: "",
            companyName: "",
            jobLocation: "",
            jobDescription: ""
        }

        setExperience(emptyExperience);
    }

    function handleCancelExperience() {
        toggleIsAdding();

        const emptyExperience = {
            id: "",
            jobTitle: "",
            datesOfAttendence: "",
            companyName: "",
            jobLocation: "",
            jobDescription: ""
        }

        setExperience(emptyExperience);
    }

    {
        switch(type) {
            case "experience":
                return (
                    <section className="px-16 mb-8">
                        <h1 className="text-2xl font-normal border-b-1 border-black py-2 mb-2">
                            {title}
                        </h1>

                        {
                            contentList.length !== 0 && (
                                 <SectionContentList>
                                    {
                                        contentList.map(experience => <Experience 
                                            key={experience.id}
                                            experience={experience}/>
                                        )
                                    }
                                </SectionContentList>
                            )
                        }
                       
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
                                    clickHandler={handleAddExperience}
                                />

                                <Button
                                    buttonType="cancel"
                                    buttonText="Cancel"
                                    clickHandler={handleCancelExperience}
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
