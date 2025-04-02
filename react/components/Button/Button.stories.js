import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import FeatherIcon from "feather-icons-react";

import Button, { TextButton } from "./index";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};

const Container = ({ className = "", children }) => (
    <div className={`qppds qpp-u-padding--16 ${className}`}>{children}</div>
);
Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export const Primary = () => (
    <div>
        <Container>
            <Button>Button</Button>
        </Container>
        <Container>
            <Button disabled>Button</Button>
        </Container>
    </div>
);

export const FormAction = () => (
    <div>
        <Container>
            <Button variant="action">Button</Button>
        </Container>
        <Container>
            <Button variant="action" disabled>
                Disabled
            </Button>
        </Container>
    </div>
);

export const Cyan = () => (
    <div>
        <Container>
            <Button className="qpp-c-button--cyan">Button</Button>
        </Container>
        <Container>
            <Button variant="cyan" disabled>
                Disabled
            </Button>
        </Container>
    </div>
);

export const Secondary = () => (
    <div>
        <Container>
            <Button variant="secondary">Button</Button>
        </Container>
        <Container>
            <Button variant="secondary" disabled>
                Disabled
            </Button>
        </Container>
    </div>
);

export const Danger = () => (
    <div>
        <Container>
            <Button variant="danger">Button</Button>
        </Container>
        <Container>
            <Button disabled variant="danger">
                Disabled
            </Button>
        </Container>
    </div>
);

export const DangerPrimary = () => (
    <div>
        <Container>
            <Button variant="danger-primary">Button</Button>
        </Container>
        <Container>
            <Button disabled variant="danger-primary">
                Disabled
            </Button>
        </Container>
    </div>
);

export const Outline = () => (
    <Container>
        <Button variant="outline">Button</Button>
        <hr />
        <Button variant="outline" disabled>
            Button
        </Button>
    </Container>
);

export const OutlineFilled = () => (
    <Container className="qpp-u-fill--blue-80">
        <Button variant="outline-filled">Button</Button>
        <hr />
        <Button variant="outline-filled" disabled>
            Button
        </Button>
        <hr />
        <Button variant="outline-filled">
            <FeatherIcon icon="download" />
            Button
        </Button>
    </Container>
);

export const OutlineSecondary = () => (
    <Container>
        <Button variant="outline-secondary">Button</Button>
        <hr />
        <Button variant="outline-secondary" disabled>
            Button
        </Button>
    </Container>
);

export const White = () => (
    <div>
        <Container className="qpp-u-fill--blue-80">
            <Button variant="white">Button</Button>
        </Container>
        <Container className="qpp-u-fill--blue-80">
            <Button variant="white" disabled>
                Button
            </Button>
        </Container>
    </div>
);

export const Icon = () => (
    <Container>
        <Button>
            Icon Button <FeatherIcon icon="chevron-right" />
        </Button>
        <hr />
        <Button variant="secondary">
            <FeatherIcon icon="download" /> Icon Button
        </Button>
        <hr />
        <Button variant="danger">
            Icon Button <FeatherIcon icon="chevron-right" />
        </Button>
        <hr />
        <Button variant="white">
            Icon Button <FeatherIcon icon="chevron-right" />
        </Button>
    </Container>
);

export const Big = () => (
    <Container>
        <Button size="big">Big Primary Button</Button>
        <hr />
        <Button size="big" variant="secondary">
            Big Secondary Button
        </Button>
        <hr />
        <Button size="big" variant="action">
            Big Action Button
        </Button>
    </Container>
);

export const Link = () => (
    <Container>
        <Button href="https://qpp.cms.gov/">Link Button</Button>
        <hr />
        <Button href="https://qpp.cms.gov/" variant="secondary">
            SecondaryLink Button
        </Button>
        <hr />
        <Button href="https://qpp.cms.gov/" variant="danger">
            Danger Link Button
        </Button>
        <hr />
        <div className="qpp-u-fill--gray-60 qpp-u-padding--8">
            <Button href="https://qpp.cms.gov/" variant="white">
                White Link Button
            </Button>
        </div>
    </Container>
);

export const TextButtonStory = () => (
    <Container>
        <TextButton>Button</TextButton>
        <hr />
        <TextButton variant="danger">Button</TextButton>
        <hr />
        <div className="qpp-u-fill--gray-60 qpp-u-padding--8">
            <TextButton variant="white">Button</TextButton>
        </div>
        <hr />
        <TextButton>
            <FeatherIcon icon="download" /> Icon Button
        </TextButton>
        <hr />
        <TextButton>
            Icon Button <FeatherIcon icon="chevron-right" />
        </TextButton>
    </Container>
);

TextButtonStory.storyName = "Text Button";
