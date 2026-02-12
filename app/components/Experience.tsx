import ButtonActions from "./ButtonActions";
import Button from "./Button";
import Input from "./Input";

export default function Experience({ experience, experienceState, isEditing, onEdit, onSave, onCancel, jobTitleHandler, jobDatesHandler, companyNameHandler, locationHandler, descriptionHandler }: 
    { 
        experience: Record<string, string>, 
        experienceState: Record<string, string>,
        isEditing: boolean, 
        onEdit: () => void,
        onSave: () => void,
        onCancel: () => void,
        jobTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        jobDatesHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        companyNameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        locationHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        descriptionHandler: (event: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => void
    }) {
    return (
        !isEditing ?
            <li key={experience.id}>
                <div className="flex flex-col pb-4 gap-2">
                    <div className="flex justify-between">
                        <div className="text-sm">
                            {experience.jobTitle}
                        </div>

                        <div className="text-sm">
                            {experience.datesOfAttendence}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-sm">
                            {experience.companyName}
                        </div>

                        <div className="text-sm">
                            {experience.jobLocation}
                        </div>
                    </div>

                    <div className="pl-2 text-sm whitespace-pre-wrap">
                        {experience.jobDescription}
                    </div>
                </div>

                <ButtonActions>
                    <Button 
                        buttonType="edit"
                        buttonText="Edit"
                        clickHandler={onEdit}                
                    />
                </ButtonActions>
            </li>
        : 
            <div className="flex flex-col pb-4 gap-2">
                <div className="flex justify-between">
                    <Input 
                        inputId="job-title"
                        inputType="text"
                        inputPlaceholder="Job title"
                        onChangeHandler={jobTitleHandler}
                        inputValue={experienceState.jobTitle}
                    />

                    <Input 
                        inputId="dates-of-attendence"
                        inputType="text"
                        inputPlaceholder="Start date - End date"
                        onChangeHandler={jobDatesHandler}
                        inputValue={experienceState.datesOfAttendence}
                    />
                </div>

                <div className="flex justify-between">
                    <Input 
                        inputId="company-name"
                        inputType="text"
                        inputPlaceholder="Company name"
                        onChangeHandler={companyNameHandler}
                        inputValue={experienceState.companyName}
                    />

                    <Input 
                        inputId="job-location"
                        inputType="text"
                        inputPlaceholder="Job location"
                        onChangeHandler={locationHandler}
                        inputValue={experienceState.jobLocation}
                    />
                </div>

                <textarea 
                    name="job-description" 
                    id="job-description" 
                    placeholder="Job description"
                    className="border-2 border-solid border-gray-400 p-2 text-sm"
                    rows={5}
                    onChange={descriptionHandler}
                    value={experienceState.jobDescription}
                />

                <ButtonActions>
                    <Button 
                        buttonType="save"
                        buttonText="Save"
                        clickHandler={onSave}                
                    />

                    <Button
                        buttonType="cancel"
                        buttonText="Cancel"
                        clickHandler={onCancel}
                    />
                </ButtonActions>
            </div>
    );
}
