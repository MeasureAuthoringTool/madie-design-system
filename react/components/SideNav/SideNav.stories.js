import React from "react";
import SideNav from "./UI/SideNavUI";
import {
    withKnobs,
    boolean,
    number,
    select,
    text,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
    title: "SideNav",
    component: SideNav,
    decorators: [withKnobs],
};

const PERFORMANCE_YEARS = ["2017", "2018", "2019", "2020"];

const CONFIG_GROUP_ID = "config prop";

/*
type Config = {
  openDrawersByDefault: Boolean,
  linkActiveFunc: Function,
  linkCallback: Function,
  animationType: String,
  useTooltips: Boolean,
  navClassName: String,
  chartActive: Boolean,
  openDrawersByDefault: Boolean,
  updateTime: String,
  practiceId: String,
  practiceName: String,
  practiceTin: String,
  apmEntityId: String,
  isConnectedUsersPage: Boolean,
  vgId: String,
  roleAbbr: String,
  performanceYear: String,
  finalFeedbackOpen: Boolean,
  isApmPaymentDetailsPage: Boolean,
  cpcPlusId: String,
}

type Category = {
  name: String,
  link: String,
  value: Number,
  maxContribution: Number,
}

type ChartData = {
  finalScore: Number,
  categories: [ Category ],
}
*/

const demoChartData = {
    finalScore: 50,
    categories: [
        {
            name: "name1",
            link: "https://google.com",
            value: 10,
            maxContribution: 20,
        },
        {
            name: "name2",
            link: "https://google.com",
            value: 10,
            maxContribution: 20,
        },
        {
            name: "name3",
            link: "https://google.com",
            value: 10,
            maxContribution: 20,
        },
        {
            name: "name4",
            link: "https://google.com",
            value: 20,
            maxContribution: 40,
        },
    ],
};

export const Example = () => (
    <div style={{ height: "840px" }}>
        <SideNav
            currentLevel={number("currentLevel", 1)}
            isExpanded={boolean("isExpanded", true)}
            onExpanded={action("onExpanded")}
            onCollapsed={action("onCollapsed")}
            chartData={demoChartData}
            // items={demoItems}
            isAltStyle={boolean("isAltStyle", false)}
            showReportingLinks={boolean("showReportingLinks", false)}
            performanceYear={select(
                "performanceYear",
                PERFORMANCE_YEARS,
                PERFORMANCE_YEARS[0]
            )}
            config={{
                linkActiveFunc: action("linkActiveFunc"),
                linkCallback: action("linkCallback"),
                animationType: text("animationType", "", CONFIG_GROUP_ID),
                navClassName: text("navClassName", "", CONFIG_GROUP_ID),
                updateTime: text("updateTime", "", CONFIG_GROUP_ID),
                practiceId: text("practiceId", "PRACTICE_ID", CONFIG_GROUP_ID),
                practiceName: text(
                    "practiceName",
                    "PRACTICE_NAME",
                    CONFIG_GROUP_ID
                ),
                practiceTin: text(
                    "practiceTin",
                    "PRACTICE_TIN",
                    CONFIG_GROUP_ID
                ),
                apmEntityId: text(
                    "apmEntityId",
                    "APM_ENTITY_ID",
                    CONFIG_GROUP_ID
                ),
                cpcPlusId: text("cpcPlusId", "CPC_PLUS_ID", CONFIG_GROUP_ID),
                vgId: text("vgId", "VG ID", CONFIG_GROUP_ID),
                roleAbbr: text("roleAbbr", "ROLE-ABBR", CONFIG_GROUP_ID),
                performanceYear: text(
                    "performanceYear",
                    PERFORMANCE_YEARS[0],
                    CONFIG_GROUP_ID
                ),
                openDrawersByDefault: boolean(
                    "openDrawersByDefault",
                    false,
                    CONFIG_GROUP_ID
                ),
                chartActive: boolean("chartActive", true, CONFIG_GROUP_ID),
                isConnectedUsersPage: boolean(
                    "isConnectedUsersPage",
                    false,
                    CONFIG_GROUP_ID
                ),
                finalFeedbackOpen: boolean(
                    "finalFeedbackOpen",
                    false,
                    CONFIG_GROUP_ID
                ),
                isApmPaymentDetailsPage: boolean(
                    "isApmPaymentDetailsPage",
                    false,
                    CONFIG_GROUP_ID
                ),
                useTooltips: boolean("useTooltips", false, CONFIG_GROUP_ID),
            }}
        />
    </div>
);

/*
type Item = {
  type: String,
  url: String,
  label: String,
  className: String,
  icon: Element,
  practiceName: String,
  practiceTin: String,
  apmEntityId: String,
  vgId: String,
  cpcPlusId: String,
  individualName: String,
  individualNpi: String,
  isAlwaysOpen: Boolean,
  content: String,
  customClassName: String,
  chartData: ChartData,
  disabled: Boolean,
  items: [ Item ]
}

type Items = [ Item ]
*/

const demoItems = [
    {
        type: "container",
        className: "foobar",
        items: [
            {
                type: "linkBack",
                url: "https://qpp.cms.gov",
                label: "link back",
            },
            {
                type: "linkHome",
                icon: "AccountHomeIcon",
                url: "https://qpp.cms.gov",
                label: "link home",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        type: "practiceDetails",
        practiceName: "Demo Practice",
        practiceTin: "123456789",
        //apmEntityId: '111111111',
        //vgId: '987654321',
        //cpcPlusId: '999999999',
    },
    {
        type: "individualDetails",
        individualName: "Demo Individual",
        individualNpi: "333333333",
    },
    {
        type: "divider",
    },
    {
        type: "linkDrawer",
        icon: "StarIcon",
        isAlwaysOpen: false,
        label: "Link Drawer",
        // disabled: false,
        items: [
            {
                type: "link",
                className: "foo",
                label: "Link 1",
                icon: "PaymentIcon",
                url: "https://qpp.cms.gov",
            },
            {
                type: "link",
                className: "bar",
                label: "Link 2",
                icon: "ReportsIcon",
                url: "https://qpp.cms.gov",
            },
            {
                type: "link",
                className: "baz",
                label: "Link 3",
                url: "https://qpp.cms.gov",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        type: "linkDrawer",
        isAlwaysOpen: false,
        label: "Highlighted Link Drawer No Icon",
        isHighlighted: true,
        items: [
            {
                type: "link",
                className: "foo",
                label: "Link 1",
                url: "https://qpp.cms.gov",
            },
            {
                type: "link",
                className: "bar",
                label: "Link 2",
                url: "https://qpp.cms.gov",
            },
            {
                type: "link",
                className: "baz",
                label: "Link 3",
                url: "https://qpp.cms.gov",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        type: "custom",
        content: `
        <div style="margin-left: 20px;">
          <h4 style="color: white;">Custom Content</h4>
          <ul>
            <li>foo</li>
            <li>bar</li>
          </ul>
        </div>
      `,
    },
    {
        type: "divider",
    },
    {
        type: "chart",
        chartData: demoChartData,
    },
    {
        type: "divider",
    },
    {
        type: "switchLink",
        label: "Switch Link",
        url: "https://qpp.cms.gov",
    },
    {
        type: "divider",
    },
    {
        type: "link",
        label: "Default Link",
        icon: "HardshipIcon",
    },
    {
        type: "link",
        label: "Default Disabled Link",
        icon: "TargetIcon",
        disabled: true,
    },
];

export const DynamicItems = () => (
    <div style={{ height: "840px" }}>
        <SideNav
            isExpanded={boolean("isExpanded", true)}
            onExpanded={action("onExpanded")}
            onCollapsed={action("onCollapsed")}
            items={demoItems}
        />
    </div>
);

export const LevelTwoUsage = () => (
    <div style={{ height: "840px" }}>
        <SideNav
            currentLevel={number("currentLevel", 2)}
            isExpanded={boolean("isExpanded", true)}
            onExpanded={action("onExpanded")}
            onCollapsed={action("onCollapsed")}
            chartData={demoChartData}
            // items={demoItems}
            isAltStyle={boolean("isAltStyle", false)}
            showReportingLinks={boolean("showReportingLinks", false)}
            performanceYear={select(
                "performanceYear",
                PERFORMANCE_YEARS,
                PERFORMANCE_YEARS[0]
            )}
            config={{
                linkActiveFunc: action("linkActiveFunc"),
                linkCallback: action("linkCallback"),
                animationType: text("animationType", "", CONFIG_GROUP_ID),
                navClassName: text("navClassName", "", CONFIG_GROUP_ID),
                updateTime: text("updateTime", "", CONFIG_GROUP_ID),
                practiceId: text("practiceId", "PRACTICE_ID", CONFIG_GROUP_ID),
                practiceName: text(
                    "practiceName",
                    "PRACTICE_NAME",
                    CONFIG_GROUP_ID
                ),
                practiceTin: text(
                    "practiceTin",
                    "PRACTICE_TIN",
                    CONFIG_GROUP_ID
                ),
                apmEntityId: text(
                    "apmEntityId",
                    "APM_ENTITY_ID",
                    CONFIG_GROUP_ID
                ),
                cpcPlusId: text("cpcPlusId", "CPC_PLUS_ID", CONFIG_GROUP_ID),
                pcfId: text("pcfId", "PCF_ID", CONFIG_GROUP_ID),
                vgId: text("vgId", "VG ID", CONFIG_GROUP_ID),
                roleAbbr: text("roleAbbr", "ROLE-ABBR", CONFIG_GROUP_ID),
                performanceYear: text(
                    "performanceYear",
                    PERFORMANCE_YEARS[0],
                    CONFIG_GROUP_ID
                ),
                openDrawersByDefault: boolean(
                    "openDrawersByDefault",
                    false,
                    CONFIG_GROUP_ID
                ),
                chartActive: boolean("chartActive", true, CONFIG_GROUP_ID),
                isConnectedUsersPage: boolean(
                    "isConnectedUsersPage",
                    false,
                    CONFIG_GROUP_ID
                ),
                finalFeedbackOpen: boolean(
                    "finalFeedbackOpen",
                    false,
                    CONFIG_GROUP_ID
                ),
                isApmPaymentDetailsPage: boolean(
                    "isApmPaymentDetailsPage",
                    false,
                    CONFIG_GROUP_ID
                ),
                useTooltips: boolean("useTooltips", false, CONFIG_GROUP_ID),
            }}
        />
    </div>
);
