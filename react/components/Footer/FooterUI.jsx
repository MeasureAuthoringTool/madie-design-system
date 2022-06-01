import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import LegacyFooterUI from "./LegacyFooterUI";

const FooterUI = (props) => {
    const isNewFooter = props.isNewFooter;
    const isIESupportPage = props.isIESupportPage;
    const signUpNowLink = props.showHcdResearch
        ? "/about/hcd-research"
        : "mailto:madie@cms.hhs.gov?subject=Sign up for feedback sessions";

    // Default footer assets
    const assets = {
        ...{
            hhsLogo: (
                <img
                    className="hhs-logo"
                    alt="Department of Health &amp; Human Services USA"
                    src="/images/hhs-logo-black.svg"
                />
            ),
            madieLogo: (
                <img
                    className="qpp-logo"
                    src="/images/qpp_logo_rgb_color.png"
                    alt="madie logo"
                />
            ),
        },
        ...props.assets,
    };

    const setLink = (link) => {
        return isIESupportPage ? "/" : link;
    };

    // The footer content is populated with the following priority order:
    // 1. Use the footer content in localStorage if it's there
    // 2. If not, make a call to get it from the QPPFE endpoint. Hydrate the localStorage item with the response.
    // 3. If the call fails, use the default value
    useEffect(() => {
        const storageContent = JSON.parse(
            localStorage.getItem("qpp_footer_listServ")
        );
        if (
            storageContent?.content &&
            new Date().valueOf() < storageContent.expiration
        ) {
            setListServ(storageContent.listServ);
        } else {
            const origin = window.location.origin;
            axios
                .get(
                    !origin.includes("localhost")
                        ? `${origin}/config/footer`
                        : "https://qpp.cms.gov/config/footer"
                )
                .then(({ data: { data = {} } }) => {
                    localStorage.setItem(
                        "qpp_footer_listServ",
                        JSON.stringify({
                            listServ: data.listServ,
                        })
                    );
                    setListServ(data.listServ);
                })
                .catch((e) => {
                    setListServ(false);
                });
        }
    }, []);
    if (isNewFooter) {
        return (
            <>
                {!isIESupportPage && (
                    <div className="feedback-session-sign-up" />
                )}
                <footer className="global-footer">
                    <div className="build-version" id="build-version">
                        {props.buildVersion}
                    </div>

                    <div className="responsive-container">
                        <div className="other-links">
                            <hr className="divider-top" />
                            <ul className="small">
                            <li>
                                    <a
                                        href={setLink("https://harp.cms.gov/login/terms-of-use")}
                                        aria-label="Terms of Use"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenTermsOfService"
                                        data-track-label="Terms of Use"
                                    >
                                        Terms of Use
                                    </a>
                                </li>
                                <li className="divider"></li>{" "}
                                <li>
                                    <a
                                        href={setLink("https://www.cms.gov/privacy")}
                                        aria-label="Privacy Policy"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenPrivacyPolicy"
                                        data-track-label="Privacy Policy"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="divider"></li>{" "}
                                <li>
                                    <a
                                        href={setLink("https://www.hhs.gov/web/governance/digital-strategy/it-policy-archive/hhs-rules-of-behavior-for-the-use-of-hhs-information-and-it-resources-policy.html")}
                                        aria-label="Rules of Behavior"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenRulesofBehavior"
                                        data-track-label="Rules of Behavior"
                                    >
                                        Rules of Behavior
                                    </a>
                                </li>
                            </ul>
                            <hr className="divider-bottom" />
                        </div>
                        <div className="qpp-hhs-logo-container">
                            <div className="qpp-logo-container">
                                {assets.qppLogo}
                            </div>
                            <div className="hhs-logo-container">
                                {assets.hhsLogo}
                                <p>
                                    A federal government website managed and
                                    paid for by the U.S Centers for Medicare
                                    &amp; Medicaid Services. 7500 Security
                                    Boulevard, Baltimore MD 21244
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
    return (
        <LegacyFooterUI
            buildVersion={props.buildVersion}
            isFullWidth={props.isFullWidth}
            signUpNowLink={signUpNowLink}
        />
    );
};

FooterUI.propTypes = {
    buildVersion: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isNewFooter: PropTypes.bool,
    isIESupportPage: PropTypes.bool,
    showHcdResearch: PropTypes.bool,
    assets: PropTypes.shape({
        cmsLogo: PropTypes.element,
        madieLogo: PropTypes.element,
    }),
};

export default FooterUI;
