import ButtonActions from "./ButtonActions";
import Button from "./Button";
import Input from "./Input";

export default function Education({ education, educationState, isEditing, onEdit, onSave, onCancel, schoolNameHandler, locationHandler, degreeTypeHandler, schoolDatesHandler }: 
    { 
        education: Record<string, string>, 
        educationState: Record<string, string>,
        isEditing: boolean, 
        onEdit: () => void,
        onSave: () => void,
        onCancel: () => void,
        schoolNameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        locationHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        degreeTypeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        schoolDatesHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    }) {
    return (
        !isEditing ?
            <li key={education.id}>
                <div className="flex flex-col pb-4 gap-2">
                    <div className="flex justify-between">
                        <div className="text-base font-semibold">
                            {education.schoolName}
                        </div>

                        <div className="text-sm">
                            {education.schoolLocation}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <i className="text-sm">
                            {education.degreeType}
                        </i>

                        <i className="text-sm">
                            {education.datesOfAttendence}
                        </i>
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
                        inputId="school-name"
                        inputType="text"
                        inputPlaceholder="School name"
                        onChangeHandler={schoolNameHandler}
                        inputValue={educationState.schoolName}
                    />

                    <Input 
                        inputId="school-location"
                        inputType="text"
                        inputPlaceholder="Location"
                        onChangeHandler={locationHandler}
                        inputValue={educationState.schoolLocation}
                    />
                </div>

                <div className="flex justify-between">
                    <Input 
                        inputId="degree-type"
                        inputType="text"
                        inputPlaceholder="Degree type"
                        onChangeHandler={degreeTypeHandler}
                        inputValue={educationState.degreeType}
                    />

                    <Input 
                        inputId="dates-of-attendence"
                        inputType="text"
                        inputPlaceholder="Start date - End date"
                        onChangeHandler={schoolDatesHandler}
                        inputValue={educationState.datesOfAttendence}
                    />
                </div>

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
