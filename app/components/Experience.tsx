import ButtonActions from "./ButtonActions";
import Button from "./Button";

export default function Experience({ experience, isEditing, onEdit }: { experience: Record<string, string>, isEditing: boolean, onEdit: () => void}) {
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
            <div>yo</div>
    );
}
