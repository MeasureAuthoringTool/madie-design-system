import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import {
    MyApplicationsIcon,
    UserSignInIcon,
    MyTestDataIcon,
    ReportDataIcon,
    ManageUsersIcon,
    AccountHomeIcon,
    FacilityBasedPreviewIcon,
    PaymentIcon,
    PhysicianCompareIcon,
    HardshipIcon,
    TargetIcon,
    ReportsIcon,
    HelpSupportIcon,
    DashboardIcon,
    AccountSettings,
    DetailsIcon,
    CliniciansIcon,
    GroupReporting,
    IndividualReporting,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    SwitchPractice,
    ScoreIncrease,
    TooltipIcon,
    NavCollapse,
    NavExpand,
    CloseXIcon,
    CloseXIcon2,
    EarlyClaims,
    CliniciansList,
    YoutubeIcon,
    TwitterIcon,
    WiViewReportsIcon,
    BellOutline,
    StarIcon,
    WiViewProgressIcon,
    WiManageGroupIcon,
} from "../../lib/SvgComponents";

describe("SvgComponents", () => {
    it("renders MyApplicationsIcon", async () => {
        const { container } = render(<MyApplicationsIcon />);
        expect(container.firstChild).toHaveClass("my-applications");
    });

    it("renders UserSignInIcon", async () => {
        const { container } = render(<UserSignInIcon />);
        expect(container.firstChild).toHaveClass("user-sign-in");
    });

    it("renders MyTestDataIcon", async () => {
        const { container } = render(<MyTestDataIcon />);
        expect(container.firstChild).toHaveClass("my-test-data");
    });

    it("renders ReportDataIcon", async () => {
        const { container } = render(<ReportDataIcon />);
        expect(container.firstChild).toHaveClass("report-data");
    });

    it("renders ManageUsersIcon", async () => {
        const { container } = render(<ManageUsersIcon />);
        expect(container.firstChild).toHaveClass("manage-users-svg");
    });

    it("renders AccountHomeIcon", async () => {
        const { container } = render(<AccountHomeIcon />);
        expect(container.firstChild).toHaveClass("account-home-icon");
    }); //

    it("renders FacilityBasedPreviewIcon", async () => {
        const { container } = render(<FacilityBasedPreviewIcon />);
        expect(container.firstChild).toHaveClass("facility-based-preview-svg");
    });

    it("renders PaymentIcon", async () => {
        const { container } = render(<PaymentIcon />);
        expect(container.firstChild).toHaveClass("payment-icon");
    });

    it("renders PhysicianCompareIcon", async () => {
        const { container } = render(<PhysicianCompareIcon />);
        expect(container.firstChild).toHaveClass("physician-compare-icon");
    });

    it("renders HardshipIcon", async () => {
        const { container } = render(<HardshipIcon />);
        expect(container.firstChild).toHaveClass("hardship-icon");
    });

    it("renders TargetIcon", async () => {
        const { container } = render(<TargetIcon />);
        expect(container.firstChild).toHaveClass("target-icon");
    });

    it("renders ReportsIcon", async () => {
        const { container } = render(<ReportsIcon />);
        expect(container.firstChild).toHaveClass("reports-icon");
    });
    //

    it("renders HelpSupportIcon", async () => {
        const { container } = render(<HelpSupportIcon />);
        expect(container.firstChild).toHaveClass("help-support");
    });
    it("renders DashboardIcon", async () => {
        const { container } = render(<DashboardIcon />);
        expect(container.firstChild).toHaveClass("dashboard-icon");
    });
    it("renders AccountSettings", async () => {
        const { container } = render(<AccountSettings />);
        expect(container.firstChild).toHaveClass("account-settings");
    });
    it("renders DetailsIcon", async () => {
        const { container } = render(<DetailsIcon />);
        expect(container.firstChild).toHaveClass("details-icon");
    });
    it("renders StarIcon", async () => {
        const { container } = render(<StarIcon />);
        expect(container.firstChild).toHaveClass("star-icon");
    });
    it("renders CliniciansIcon", async () => {
        const { container } = render(<CliniciansIcon />);
        expect(container.firstChild).toHaveClass("clinicians-icon");
    });
    it("renders GroupReporting", async () => {
        const { container } = render(<GroupReporting />);
        expect(container.firstChild).toHaveClass("group-reporting");
    });
    it("renders IndividualReporting", async () => {
        const { container } = render(<IndividualReporting />);
        expect(container.firstChild).toHaveClass("individual-reporting");
    });
    it("renders ChevronLeft", async () => {
        const { container } = render(<ChevronLeft />);
        expect(container.firstChild).toHaveClass("chevron-left");
    });
    it("renders ChevronRight", async () => {
        const { container } = render(<ChevronRight />);
        expect(container.firstChild).toHaveClass("chevron-right");
    });
    it("renders ChevronDown", async () => {
        const { container } = render(<ChevronDown />);
        expect(container.firstChild).toHaveClass("chevron-down");
    });
    it("renders SwitchPractice", async () => {
        const { container } = render(<SwitchPractice />);
        expect(container.firstChild).toHaveClass("switch-practice");
    });
    it("renders ScoreIncrease", async () => {
        const { container } = render(<ScoreIncrease />);
        expect(container.firstChild).toHaveClass("score-increase");
    });
    it("renders TooltipIcon", async () => {
        const { container } = render(<TooltipIcon />);
        expect(container.firstChild).toHaveClass("tooltip-icon");
    });
    it("renders NavCollapse", async () => {
        const { container } = render(<NavCollapse />);
        expect(container.firstChild).toHaveClass("nav-collapse");
    });
    it("renders NavExpand", async () => {
        const { container } = render(<NavExpand />);
        expect(container.firstChild).toHaveClass("nav-expand");
    });
    it("renders CloseXIcon", async () => {
        const { container } = render(<CloseXIcon />);
        expect(container.firstChild).toHaveClass("closex");
    });
    it("renders CloseXIcon2", async () => {
        const { container } = render(<CloseXIcon2 />);
        expect(container.firstChild).toHaveClass("closex2");
    });
    it("renders BellOutline", async () => {
        const { container } = render(<BellOutline />);
        expect(container.firstChild).toHaveClass("bell-outline");
    });
    it("renders EarlyClaims", async () => {
        const { container } = render(<EarlyClaims />);
        expect(container.firstChild).toHaveClass("early-claims-icon");
    });
    it("renders CliniciansList", async () => {
        const { container } = render(<CliniciansList />);
        expect(container.firstChild).toHaveClass("clinicians-list-icon");
    });
    it("renders YoutubeIcon", async () => {
        const { container } = render(<YoutubeIcon />);
        expect(container.firstChild).toHaveClass("youtube-icon");
    });

    it("renders TwitterIcon", async () => {
        const { container } = render(<TwitterIcon />);
        expect(container.firstChild).toHaveClass("twitter-icon");
    });
    it("renders WiViewReportsIcon", async () => {
        const { container } = render(<WiViewReportsIcon />);
        expect(container.firstChild).toHaveClass("wi-view-reports");
    });
    it("renders WiViewProgressIcon", async () => {
        const { container } = render(<WiViewProgressIcon />);
        expect(container.firstChild).toHaveClass("wi-view-progress");
    });
    it("renders WiManageGroupIcon", async () => {
        const { container } = render(<WiManageGroupIcon />);
        expect(container.firstChild).toHaveClass("wi-manage-group");
    });
});
