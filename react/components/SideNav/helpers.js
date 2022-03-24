const submissionsUrl = "/user/submissions";
const dashboardUrl = "/user/dashboard";
const manageUrl = "/user/manage-access";
const feedbackUrl = `${submissionsUrl}/feedback`;
const physicianCompareUrl = `${submissionsUrl}/doctors-clinicians-preview`;
const reportsPortalUrl = `${submissionsUrl}/reports`;
const facilityBasedPreviewBaseUrl = `${submissionsUrl}/facility-based-preview`;

const performanceFeedbackUrl = (performanceYear) => {
    if (performanceYear) {
        return `${feedbackUrl}/${performanceYear}`;
    } else {
        return feedbackUrl;
    }
};

const facilityBasedPreviewUrl = (performanceYear) => {
    return `${facilityBasedPreviewBaseUrl}/${performanceYear}`;
};

const handleNavigation = (e, linkCallbackFunction, label) => {
    if (linkCallbackFunction) {
        const { pathname, hash, search } = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        linkCallbackFunction(`${pathname}${hash}${search}`);
    }
    window?.utag?.link({
        ga_event_category: "side navbar",
        ga_event_action: "click",
        ga_event_label: label,
        page_title: `${window.document.title}`,
        page_url: `${window.location.pathname}`,
        event: "trackEvent",
    });
};

module.exports = {
    submissionsUrl,
    dashboardUrl,
    feedbackUrl,
    manageUrl,
    physicianCompareUrl,
    performanceFeedbackUrl,
    facilityBasedPreviewUrl,
    handleNavigation,
    reportsPortalUrl,
    facilityBasedPreviewBaseUrl,
};
