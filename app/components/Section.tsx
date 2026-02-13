"use client";

import { useState } from "react";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";
import Input from "./Input";
import Experience from "./Experience";
import Education from "./Education";

export default function Section({ title, type }: { title: string, type: string}) {
    const [isAdding, setAdding] = useState(false);
    const [editingIdx, setEditingIdx] = useState(-1); 
    const [contentList, setContentList] = useState<Array<Record<string, string>>>([]);
    const [experience, setExperience] = useState({
        id: "",
        jobTitle: "",
        datesOfAttendence: "",
        companyName: "",
        jobLocation: "",
        jobDescription: ""
    });
    const [education, setEducation] = useState({
        id: "",
        schoolName: "",
        schoolLocation: "",
        degreeType: "",
        datesOfAttendence: ""
    })

    function handleIsAddingStatus(addingStatus: boolean) { 
        setEditingIdx(-1);
        clearExperienceInputs();
        clearEducationInputs();
        setAdding(addingStatus); 
    }

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

    function handleSchoolNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEducation({
            ...education,
            schoolName: event.target.value
        });
    }

    function handleSchoolLocationChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEducation({
            ...education,
            schoolLocation: event.target.value
        });
    }

    function handleDegreeTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEducation({
            ...education,
            degreeType: event.target.value
        });
    }

    function handleSchoolAttendenceDatesChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEducation({
            ...education,
            datesOfAttendence: event.target.value
        });
    }

    function handleAddExperience() {
        const updatedExperience = {
            ...experience,
            id: crypto.randomUUID()
        };

        setExperience(updatedExperience);

        setContentList([
            ...contentList,
            updatedExperience
        ]);

        handleIsAddingStatus(false);
    }

    function handleAddEducation() {
        const updatedEducation = {
            ...education,
            id: crypto.randomUUID()
        }

        setEducation(updatedEducation);

        setContentList([
            ...contentList,
            updatedEducation
        ]);

        handleIsAddingStatus(false); 
    }

    function handleSaveEditExperience() {
        setEditingIdx(-1);

        setContentList(
            contentList.map(experienceObj => {
                if (experienceObj.id === experience.id)
                    return {...experience}
                else
                    return experienceObj;
            })
        );

        clearExperienceInputs();
    }

    function handleSaveEditEducation() {
        setEditingIdx(-1);

        setContentList(
            contentList.map(educationObj => {
                if (educationObj.id === education.id)
                    return {...education}
                else
                    return educationObj;
            })
        )
    }

    function handleCancelEditExperience() {
        setEditingIdx(-1);
        clearExperienceInputs();
    }

    function handleCancelEditEducation() {
        setEditingIdx(-1);
        clearEducationInputs();
    }

    function handleCancelExperience() {
        handleIsAddingStatus(false);
    }

    function handleCancelEducation() {
        handleIsAddingStatus(false);
    }

    function clearExperienceInputs() {
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

    function clearEducationInputs() {
        const emptyEducation = {
            id: "",
            schoolName: "",
            schoolLocation: "",
            degreeType: "",
            datesOfAttendence: ""
        }

        setEducation(emptyEducation);
    }

    {
        switch(type) {
            case "experience":
                return (
                    <section className="flex flex-col gap-2 px-16 mb-8">
                        <h1 className="text-2xl font-normal border-b-1 border-black py-2">
                            {title}
                        </h1>

                        {
                            contentList.length !== 0 && (
                                 <SectionContentList>
                                    {
                                        contentList.map((experienceObj, idx) => <Experience 
                                                key={experienceObj.id}
                                                experience={experienceObj}
                                                experienceState={experience}
                                                isEditing={idx === editingIdx}
                                                onEdit={() => {
                                                    const temp = {
                                                        id: experienceObj.id,
                                                        jobTitle: experienceObj.jobTitle,
                                                        datesOfAttendence: experienceObj.datesOfAttendence,
                                                        companyName: experienceObj.companyName,
                                                        jobLocation: experienceObj.jobLocation,
                                                        jobDescription: experienceObj.jobDescription
                                                    }
                                                    handleIsAddingStatus(false);
                                                    setExperience(temp);
                                                    setEditingIdx(idx)}
                                                }
                                                onSave={handleSaveEditExperience}
                                                onCancel={handleCancelEditExperience}
                                                jobTitleHandler={handleJobTitleChange}
                                                jobDatesHandler={handleDatesChange}
                                                companyNameHandler={handleCompanyNameChange}
                                                locationHandler={handleJobLocationChange}
                                                descriptionHandler={handleJobDescriptionChange}
                                            />
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
                                        clickHandler={() => handleIsAddingStatus(true)}
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

                        {
                            contentList.length !== 0 && (
                                 <SectionContentList>
                                    {
                                        contentList.map((educationObj, idx) => <Education 
                                                key={educationObj.id}
                                                education={educationObj}
                                                educationState={education}
                                                isEditing={idx === editingIdx}
                                                onEdit={() => {
                                                    const temp = {
                                                        id: educationObj.id,
                                                        schoolName: educationObj.schoolName,
                                                        schoolLocation: educationObj.schoolLocation,
                                                        degreeType: educationObj.degreeType,
                                                        datesOfAttendence: educationObj.datesOfAttendence
                                                    }
                                                    handleIsAddingStatus(false);
                                                    setEducation(temp);
                                                    setEditingIdx(idx)}
                                                }
                                                onSave={handleSaveEditEducation}
                                                onCancel={handleCancelEditEducation}
                                                schoolNameHandler={handleSchoolNameChange}
                                                locationHandler={handleSchoolLocationChange}
                                                degreeTypeHandler={handleDegreeTypeChange}
                                                schoolDatesHandler={handleSchoolAttendenceDatesChange}
                                            />
                                        )
                                    }
                                </SectionContentList>
                            )
                        }

                        {isAdding && (
                            <div className="flex flex-col pb-4 gap-2">
                                <div className="flex justify-between">
                                    <Input 
                                        inputId="school-name"
                                        inputType="text"
                                        inputPlaceholder="School name"
                                        onChangeHandler={handleSchoolNameChange}
                                        inputValue={education.schoolName}
                                    />

                                    <Input 
                                        inputId="school-location"
                                        inputType="text"
                                        inputPlaceholder="Location"
                                        onChangeHandler={handleSchoolLocationChange}
                                        inputValue={education.schoolLocation}
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <Input 
                                        inputId="degree-type"
                                        inputType="text"
                                        inputPlaceholder="Degree type"
                                        onChangeHandler={handleDegreeTypeChange}
                                        inputValue={education.degreeType}
                                    />

                                    <Input 
                                        inputId="dates-of-attendence"
                                        inputType="text"
                                        inputPlaceholder="Start date - End date"
                                        onChangeHandler={handleSchoolAttendenceDatesChange}
                                        inputValue={education.datesOfAttendence}
                                    />
                                </div>
                            </div>
                        )}

                        {
                            !isAdding ?
                                <ButtonActions>
                                    <Button
                                        buttonType="addContent"
                                        buttonText="Add education"
                                        clickHandler={() => handleIsAddingStatus(true)}
                                    />
                                </ButtonActions>
                            :
                                <ButtonActions>
                                    <Button
                                        buttonType="save"
                                        buttonText="Add"
                                        clickHandler={handleAddEducation}
                                    />

                                    <Button
                                        buttonType="cancel"
                                        buttonText="Cancel"
                                        clickHandler={handleCancelEducation}
                                    />
                                </ButtonActions>
                        }
                        
                    </section>
                );
        }
    }
}
