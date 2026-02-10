"use client";

import { useState } from "react";

import Button from "./Button";
import ButtonActions from "./ButtonActions";
import SectionContentList from "./SectionContentList";

export default function Section({ title, type }: { title: string, type: string}) {
    const [isAdding, setAdding] = useState(false);

    function toggleIsAdding() { setAdding(!isAdding); }

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

                        {/* {isAdding && (
                            <div className="flex flex-col">
                                <div>yo</div>
                            </div>
                        )} */}

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
                                    clickHandler={toggleIsAdding}
                                />

                                <Button
                                    buttonType="cancel"
                                    buttonText="Cancel"
                                    clickHandler={toggleIsAdding}
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
