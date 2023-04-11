import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Tabs from "./index";
import Tab from './Tab';


export default {
    title: "Tabs",
    component: Tabs,
    decorators: [withKnobs],
};

export const TypeA = () => {
    // state, setState
    const [selected, setSelected] = useState(1)


    const handleChange = (e,v) => {
        // 1,2,3
        setSelected(v);
    };


    return (
        <div style={{margin: "25px"}}>
            <div style={{ width: "fit-content"}}>
                Standard: A
                <Tabs type="A" size="standard" value={selected} onChange={handleChange}>
                <Tab type="A" size="standard" label="Item One" value={1}/>
                <Tab type="A" size="standard" label="Item Two" value={2}/>
                <Tab type="A" size="standard" label="Item Three" value={3}/>
                <Tab type="A" size="standard" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content"}}>
                Large: A
                <Tabs type="A" size="large" value={selected} onChange={handleChange}>
                <Tab type="A" size="large" label="Item One" value={1}/>
                <Tab type="A" size="large" label="Item Two" value={2}/>
                <Tab type="A" size="large" label="Item Three" value={3}/>
                <Tab type="A" size="large" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content"}}>
                Standard: B
                <Tabs type="B" size="standard" value={selected} onChange={handleChange}>
                    <Tab type="B" size="standard" label="Item One" value={1} />
                    <Tab type="B" size="standard" label="Item Two" value={2} />
                    <Tab type="B" size="standard" label="Item Three" value={3} />
                    <Tab type="B" size="standard" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            
            <div style={{ width: "fit-content"}}>
                Large: B
                <Tabs type="B" size="large" value={selected} onChange={handleChange}>
                    <Tab type="B" size="large" label="Item One" value={1} />
                    <Tab type="B" size="large" label="Item Two" value={2} />
                    <Tab type="B" size="large" label="Item Three" value={3} />
                    <Tab type="B" size="large" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content"}}>
                Standard: C
                <Tabs type="C" value={selected} onChange={handleChange}>
                    <Tab type="C" size="standard" label="Item One" value={1} />
                    <Tab type="C" size="standard" label="Item Two" value={2} />
                    <Tab type="C" size="standard" label="Item Three"value={3} />
                    <Tab type="C" size="standard" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content" }}>
                Large: C
                <Tabs type="C" value={selected} onChange={handleChange}>
                    <Tab type="C" size="large" label="Item One" value={1} />
                    <Tab type="C" size="large" label="Item Two" value={2} />
                    <Tab type="C" size="large" label="Item Three"value={3} />
                    <Tab type="C" size="large" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div>
                Vertical Standard: C
                <Tabs type="C" value={selected} onChange={handleChange} orientation="vertical">
                    <Tab type="C" size="standard" label="Item One" value={1} orientation="vertical"/>
                    <Tab type="C" size="standard" label="Item Two" value={2} orientation="vertical"/>
                    <Tab type="C" size="standard" label="Item Three"value={3} orientation="vertical"/>
                    <Tab type="C" size="standard" label="disabled" value={4} disabled orientation="vertical"/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content"}}>
                Standard: D
                <Tabs type="D" value={selected} onChange={handleChange}>
                    <Tab type="D" size="standard" label="Item One" value={1} />
                    <Tab type="D" size="standard" label="Item Two" value={2} />
                    <Tab type="D" size="standard" label="Item Three"value={3} />
                    <Tab type="D" size="standard" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
            <div style={{ width: "fit-content" }}>
                Large: D
                <Tabs type="D" value={selected} onChange={handleChange}>
                    <Tab type="D" size="large" label="Item One" value={1} />
                    <Tab type="D" size="large" label="Item Two" value={2} />
                    <Tab type="D" size="large" label="Item Three"value={3} />
                    <Tab type="D" size="large" label="disabled" value={4} disabled/>
                </Tabs>
            </div>
        </div>
    );
};
