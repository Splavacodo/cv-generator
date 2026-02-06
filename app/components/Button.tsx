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
    clickHandler: () => void
}) {
        {
            switch (buttonType) {
                case "edit":
                    return (
                        <button
                            className="bg-background flex gap-2 rounded-sm px-[12px] py-[4px] hover:opacity-90 cursor-pointer"
                            onClick={clickHandler}
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
                case "cancel":
                    return (
                        <button
                            className="bg-red-500 flex gap-2 rounded-sm px-[8px] py-[4px] hover:opacity-90 cursor-pointer"
                            onClick={clickHandler}
                        >
                            <Image
                                className="invert"
                                alt="pencil outline icon"
                                src="/close.svg"
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
                case "save":
                    return (
                        <button
                            className="bg-green-500 flex gap-2 rounded-sm px-[8px] py-[4px] hover:opacity-90 cursor-pointer"
                            onClick={clickHandler}
                        >
                            <Image
                                className="invert"
                                alt="pencil outline icon"
                                src="/check.svg"
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
