export default function Experience({ experience }: { experience: Record<string, string>}) {
    return (
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

                <div className="p-2 text-sm whitespace-pre-wrap">
                    {experience.jobDescription}
                </div>
            </div>
        </li>
    )
}
