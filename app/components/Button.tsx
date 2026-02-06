import Image from "next/image";

export default function Button(
{
    buttonType,
    buttonText,
    clickHandler
}: 
{
    buttonType: string
    buttonText: string, 
    clickHandler: (isEditing: boolean) => void
}) {
        {
            switch (buttonType) {
                case "edit":
                    return (
                        <button
                            className="bg-background flex gap-2 rounded-sm px-[8px] py-[4px] hover:opacity-90 cursor-pointer"
                            onClick={() => clickHandler(true)}
                        >
                            <Image
                                className="invert"
                                alt="pencil outline icon"
                                src="/pencil-outline.svg"
                                width={15}
                                height={15}
                            />
                            <div
                                className="text-foreground text-sm"
                            >
                                {buttonText}
                            </div>
                        </button>
                    );
            }
        } 
}
