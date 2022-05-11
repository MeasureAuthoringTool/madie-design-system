import React from "react";
import PropTypes from "prop-types";
import InfoTip from "../Infotip/Infotip";

const infoTipLabel =
    "When dialing 711, you will automatically be connected to a TRS Communications Assistant who will relay your conversation to the help desk agent with strict confidentiality.";

const LegacyFooterUI = ({ buildVersion, isFullWidth, signUpNowLink }) => {
    return (
        <footer className="legacy-footer">
            <div className="build-version" id="build-version">
                {buildVersion}
            </div>
            <div className="banner">
                <div
                    className={
                        isFullWidth
                            ? "container-full-width"
                            : "responsive-container"
                    }
                >
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <span>Help shape the future of MADiE</span> by
                            participating in user feedback sessions.{" "}
                            <a className="email-note-link" href={signUpNowLink}>
                                Send us an email to sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    isFullWidth
                        ? "container-full-width"
                        : "responsive-container"
                }
            >
                <div className="row">
                    <div
                        className={
                            isFullWidth
                                ? "col-sm-12 col-md-8 col-lg-8"
                                : "col-sm-8 col-md-9 col-lg-9"
                        }
                    >
                        <div className="logo-container">
                            <img
                                src="/images/qpp_logo_reversed.png"
                                alt="Quality Payment Program"
                                className="qpp-logo"
                            />
                            <div className="social-container">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-link"
                                    href="https://twitter.com/CMSGov"
                                    aria-label="Follow us on Twitter. This link opens in a new window."
                                >
                                    <span className="glyphicon glyphicon-twitter"></span>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-link"
                                    href="https://www.youtube.com/playlist?list=PLaV7m2-zFKpj_6fBsqav6GvFzzq9oOpkk"
                                    aria-label="Follow us on YouTube. This link opens in a new window."
                                >
                                    <span className="glyphicon glyphicon-youtube"></span>
                                </a>
                            </div>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a
                                        href="/developers"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenDeveloperTools"
                                        data-track-label="Quality Payment Program"
                                    >
                                        Developer Tools
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/about/resource-library"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenEducationAndTools"
                                        data-track-label="Education and Tools"
                                    >
                                        Resource Library
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/glossary"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenGlossary"
                                        data-track-label="Glossary"
                                    >
                                        Glossary
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/resources/help-and-support"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenHelpAndSupport"
                                        data-track-label="Help and Support"
                                    >
                                        Help and Support
                                    </a>
                                </li>
                            </ul>
                            <ul className="small">
                                <li>
                                    <a
                                        href="https://www.cms.gov/privacy"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenPrivacyDisclaimer"
                                        data-track-label="Notice of Privacy and Disclaimer"
                                    >
                                        CMS Privacy Notice
                                    </a>
                                </li>
                                <span className="divider"></span>
                                <li>
                                    <a
                                        href="https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Policiesforaccessibility"
                                        data-track-category="FooterNav"
                                        data-track-action="OpenAccessibility"
                                        data-track-label="Accessibility"
                                    >
                                        Accessibility
                                    </a>
                                </li>
                                <span className="divider"></span>
                                <li>
                                    <a
                                        className="adobe-link"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://get.adobe.com/reader"
                                        data-track-category="FooterNav"
                                        data-track-action="DownloadAdobeReader"
                                        data-track-label="AdobeReader"
                                    >
                                        <svg className="icon">
                                            <use xlinkHref="#icon-download" />
                                        </svg>
                                        Download Adobe Reader
                                    </a>
                                </li>
                                <span className="divider"></span>
                                <li>
                                    <a
                                        href="mailto:sb-mat-help@semanticbits.com"
                                        className="email-link"
                                    >
                                        sb-mat-help@semanticbits.com
                                    </a>
                                </li>
                                <li>
                                    1-866-288-8292 (TRS: 711)
                                    <div className="footer-trs-infotip">
                                        <InfoTip
                                            lightIcon
                                            label={infoTipLabel}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={
                            isFullWidth
                                ? "col-sm-12 col-md-4 col-lg-4"
                                : "col-sm-4 col-md-3 col-lg-3"
                        }
                    >
                        <div className="hhs-logo-container">
                            <img
                                alt="Department of Health &amp; Human Services USA"
                                src="/images/hhs-logo-white.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

LegacyFooterUI.propTypes = {
    buildVersion: PropTypes.string,
    isFullWidth: PropTypes.bool,
    signUpNowLink: PropTypes.string,
};

export default LegacyFooterUI;
