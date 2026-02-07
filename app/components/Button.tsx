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
                case "addExperience":
                    return (
                        <button
                            className="bg-transparent flex grow gap-2 rounded-sm px-[12px] py-[4px] hover:font-semibold cursor-pointer"
                            onClick={clickHandler}
                        >
                            <Image
                                className="[filter:brightness(0)_saturate(100%)_invert(23%)_sepia(97%)_saturate(4185%)_hue-rotate(213deg)_brightness(102%)_contrast(101%)]"
                                alt="pencil outline icon"
                                src="/plus.svg"
                                width={15}
                                height={15}
                            />
                            <div
                                className="text-blue-600 text-sm"
                            >
                                {buttonText}
                            </div>
                        </button>
                    )
            }
        } 
}
