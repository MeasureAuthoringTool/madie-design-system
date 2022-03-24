import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Tabs from "./index";
import TabPanel from "./TabPanel";
import Button from "../Button";

export default {
    title: "Tabs",
    component: Tabs,
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <div className="qpp-u-padding--12">
            <Tabs>
                <TabPanel
                    id="summary"
                    tab="Summary"
                    className="my-summary-class"
                >
                    The Bill of Rights is the first ten amendments to the United
                    States Constitution.
                </TabPanel>
                <TabPanel id="preamble" tab="Preamble">
                    We the People of the United States, in Order to form a more
                    perfect Union, establish Justice, insure domestic
                    Tranquility, provide for the common defence, promote the
                    general Welfare, and secure the Blessings of Liberty to
                    ourselves and our Posterity, do ordain and establish this
                    Constitution for the United States of America.
                </TabPanel>
                <TabPanel id="amendments" tab="Amendments">
                    <h2 className="ds-h4">Bill of Rights</h2>
                    <ol className="ds-c-list">
                        <li>Freedoms, Petitions, Assembly</li>
                        <li>Right to bear arms</li>
                        <li>Quartering of soldiers</li>
                        <li>Search and arrest</li>
                        <li>Rights in criminal cases</li>
                        <li>Right to a fair trial</li>
                        <li>Rights in civil cases</li>
                        <li>Bail, fines, punishment</li>
                        <li>Rights retained by the People</li>
                        <li>States’ rights</li>
                    </ol>

                    <h2 className="ds-h4">Later Amendments</h2>
                    <ol className="ds-c-list" start="11">
                        <li>Lawsuits against states</li>
                        <li>Presidential elections</li>
                        <li>Abolition of slavery</li>
                        <li>Civil rights</li>
                        <li>Black suffrage</li>
                        <li>Income taxes</li>
                        <li>Senatorial elections</li>
                        <li>Prohibition of liquor</li>
                        <li>Women’s suffrage</li>
                        <li>Terms of office</li>
                        <li>Repeal of Prohibition</li>
                        <li>Term Limits for the Presidency</li>
                        <li>Washington, D.C., suffrage</li>
                        <li>Abolition of poll taxes</li>
                        <li>Presidential succession</li>
                        <li>18-year-old suffrage</li>
                        <li>Congressional pay raises</li>
                    </ol>

                    <h2 className="ds-h4">Even Later Amendments</h2>
                    <ol className="ds-c-list">
                        <li>Thou must count to three</li>
                        <li>
                            Three shall be the number of the counting and the
                            number of the counting shall be three
                        </li>
                        <li>Four shalt thou not count</li>
                        <li>
                            Neither shalt thou count two, excepting that thou
                            then proceedeth to three
                        </li>
                        <li>Five is right out</li>
                    </ol>
                </TabPanel>
                <TabPanel id="disabled" tab="Disabled" disabled>
                    You should not see this.
                </TabPanel>
            </Tabs>
        </div>
    );
};

export const ControlledTabs = () => {
    const [selectedId, setSelectedId] = useState("preamble");
    return (
        <div className="qpp-u-padding--12">
            <Tabs selected={selectedId} onChange={(id) => setSelectedId(id)}>
                <TabPanel
                    id="summary"
                    tab="Summary"
                    className="my-summary-class"
                >
                    The Bill of Rights is the first ten amendments to the United
                    States Constitution.
                </TabPanel>
                <TabPanel id="preamble" tab="Preamble">
                    We the People of the United States, in Order to form a more
                    perfect Union, establish Justice, insure domestic
                    Tranquility, provide for the common defence, promote the
                    general Welfare, and secure the Blessings of Liberty to
                    ourselves and our Posterity, do ordain and establish this
                    Constitution for the United States of America.
                </TabPanel>
                <TabPanel id="amendments" tab="Amendments">
                    All of the amendments
                    <br />
                    <Button
                        className="qpp-u-margin-top--16"
                        onClick={() => setSelectedId("summary")}
                    >
                        Go to Summary
                    </Button>
                </TabPanel>
                <TabPanel id="disabled" tab="Disabled" disabled>
                    You should not see this.
                </TabPanel>
            </Tabs>
        </div>
    );
};
