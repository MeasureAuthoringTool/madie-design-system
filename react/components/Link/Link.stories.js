import React from "react";
import DSLink from "./index";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default {
    title: "Link",
    component: DSLink,
    argTypes: {
        href: { control: "text" },
        variant: {
            control: { type: "select" },
            options: ["default", "gray", "white"],
        },
        children: { control: "text" },
    },
};

export const LinkLabel = (args) => <DSLink {...args} />;
LinkLabel.args = {
    href: "#",
    children: "Link Label",
};

export const LinkColorVariants = () => (
    <>
        <div className="qpp-dark-background qpp-u-padding--16">
            <DSLink href="#" variant="white">
                Link Label
            </DSLink>
        </div>
        <p>
            <DSLink href="#" variant="gray">
                Link Label
            </DSLink>
        </p>
    </>
);

export const inlineLinks = () => (
    <div className="qpp-u-padding--16">
        <p className="qpp-u-width--60">
            Aenean lacinia <DSLink href="#">inline link</DSLink> nulla sed{" "}
            <DSLink href="#">inline link</DSLink>. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Integer posuere erat a ante
            venenatis <DSLink href="#">inline link</DSLink> dapibus posuere
            velit aliquet.
        </p>
    </div>
);

export const inlineLinksDarkBackground = () => (
    <div className="qpp-dark-background qpp-u-padding--16">
        Aenean lacinia{" "}
        <DSLink href="#" variant="white">
            inline link
        </DSLink>{" "}
        nulla sed{" "}
        <DSLink href="#" variant="white">
            inline link
        </DSLink>
        . Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Integer posuere erat a ante venenatis{" "}
        <DSLink href="#" variant="white">
            inline link
        </DSLink>{" "}
        dapibus posuere velit aliquet.
    </div>
);

export const linkWithIcon = () => {
    const icon = <OpenInNewIcon classes={{ root: "qpp-icon-mat" }} />;
    return (
        <div className="qpp-u-padding--16">
            <DSLink href="#">Standalone Link With Icon {icon}</DSLink>
            <p className="qpp-u-width--60">
                Aenean lacinia <DSLink href="#">inline link {icon}</DSLink>{" "}
                nulla sed <DSLink href="#">inline link {icon}</DSLink>. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Integer posuere erat a ante venenatis{" "}
                <DSLink href="#">inline link {icon}</DSLink> dapibus posuere
                velit aliquet.
            </p>
        </div>
    );
};
