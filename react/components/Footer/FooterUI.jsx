import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import InfoTip from "../Infotip/Infotip";
import LegacyFooterUI from "./LegacyFooterUI";
import Subscribe from "./Subscribe";
import SocialLinks from "./SocialLinks";

const infoTipLabel =
    "When dialing 711, you will automatically be connected to a TRS Communications Assistant who will relay your conversation to the help desk agent with strict confidentiality.";

const FooterUI = (props) => {
    const isNewFooter = props.isNewFooter;
    const isIESupportPage = props.isIESupportPage;
    const signUpNowLink = props.showHcdResearch
        ? "/about/hcd-research"
        : "mailto:QPPUserResearch@cms.hhs.gov?subject=Sign up for feedback sessions&body=Please let us know your role and how many Tax Identification Numbers (TINs) you represent. Don’t send us your actual TINs, that is confidential information that should not be shared with this email address. If you do not represent a practice, let us know what work you do in connection to QPP.";
    const [listServ, setListServ] = useState(false);

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
            qppLogo: (
                <img
                    className="qpp-logo"
                    src="/images/qpp_logo_rgb_color.png"
                    alt="qpp logo"
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
                    <div className="feedback-session-sign-up">
                        <div className="responsive-container">
                            <hr />
                            <p>
                                <strong>Help shape the future of QPP.</strong>{" "}
                                Participate in a user feedback session.{" "}
                                <a
                                    className="email-note-link"
                                    href={signUpNowLink}
                                >
                                    Sign up now
                                </a>
                            </p>
                        </div>
                    </div>
                )}
                <footer className="global-footer">
                    <div className="build-version" id="build-version">
                        {props.buildVersion}
                    </div>

                    <div className="responsive-container">
                        <>
                            {!isIESupportPage && (
                                <div className="global-footer-container">
                                    <div className="footer-resources">
                                        <p className="sub-title">Resources</p>
                                        <ul>
                                            <li>
                                                <a
                                                    href="/about/resource-library"
                                                    aria-label="Resource Library"
                                                    data-track-category="FooterNav"
                                                    data-track-action="OpenEducationAndTools"
                                                    data-track-label="Education and Tools"
                                                >
                                                    Resource Library
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/resources/help-and-support"
                                                    aria-label="Help and Support"
                                                    data-track-category="FooterNav"
                                                    data-track-action="OpenHelpAndSupport"
                                                    data-track-label="Help and Support"
                                                >
                                                    Help and Support
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/about/small-underserved-rural-practices"
                                                    aria-label="Support for Small Practices"
                                                    data-track-category="FooterNav"
                                                    data-track-action="OpenSupportSmallPractices"
                                                    data-track-label="Support for Small Practices"
                                                >
                                                    Support for Small Practices
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/developers"
                                                    aria-label="Developer Tools"
                                                    data-track-category="FooterNav"
                                                    data-track-action="OpenDeveloperTools"
                                                    data-track-label="Quality Payment Program"
                                                >
                                                    Developer Tools
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/glossary"
                                                    aria-label="Glossary"
                                                    data-track-category="FooterNav"
                                                    data-track-action="OpenGlossary"
                                                    data-track-label="Glossary"
                                                >
                                                    Glossary
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-contact-cms">
                                        <p className="sub-title">Contact CMS</p>
                                        <p className="contact-title">
                                            By Phone:
                                        </p>
                                        <p>Monday - Friday 8 a.m - 8 p.m ET</p>
                                        <p>
                                            1-866-288-8292 (TRS: 711)
                                            <span className="footer-trs-infotip">
                                                <InfoTip label={infoTipLabel} />
                                            </span>
                                        </p>

                                        <p className="contact-title">
                                            By Email:
                                        </p>
                                        <p>
                                            <a
                                                aria-label="QPP@cms.hhs.gov"
                                                href="mailto:QPP@cms.hhs.gov"
                                                className="email-link"
                                            >
                                                QPP@cms.hhs.gov
                                            </a>
                                        </p>
                                    </div>
                                    <div className="footer-social-newsletter">
                                        <p className="sub-title">
                                            Stay Connected
                                        </p>
                                        <SocialLinks />
                                        <p className="sub-title">
                                            {listServ
                                                ? "Sign Up for the QPP Listserv"
                                                : "Sign Up for the QPP Newsletter"}
                                        </p>
                                        <Subscribe />
                                    </div>
                                </div>
                            )}
                            <hr />
                        </>

                        <div className="other-links">
                            <ul className="small">
                                <li>
                                    <a
                                        href={setLink("/privacy")}
                                        aria-label="Notice of Privacy and Disclaimer"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenPrivacyDisclaimer"
                                        data-track-label="Notice of Privacy and Disclaimer"
                                    >
                                        CMS Privacy Notice
                                    </a>
                                </li>
                                <li className="divider"></li>{" "}
                                <li>
                                    <a
                                        href={setLink("/accessibility")}
                                        aria-label="Accessibility"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenAccessibility"
                                        data-track-label="Accessibility"
                                    >
                                        Accessibility
                                    </a>
                                </li>
                                <li className="divider"></li>{" "}
                                <li>
                                    <a
                                        aria-label="Download Adobe Reader"
                                        className="adobe-link"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={setLink(
                                            "https://get.adobe.com/reader"
                                        )}
                                        data-track-category="FooterNav"
                                        data-track-action="DownloadAdobeReader"
                                        data-track-label="AdobeReader"
                                    >
                                        Download Adobe Reader
                                    </a>
                                </li>
                            </ul>
                            <hr />
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
        hhsLogo: PropTypes.element,
        qppLogo: PropTypes.element,
    }),
};

export default FooterUI;
