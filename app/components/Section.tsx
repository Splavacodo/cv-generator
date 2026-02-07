"use client";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";

export default function Section({ title, type }: { title: string, type: string}) {
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

                        <ButtonActions>
                            <Button
                                buttonType="addExperience"
                                buttonText="Add experience"
                                clickHandler={() => {}}
                            />
                        </ButtonActions>
                </section>
            );
        }
    }
}
