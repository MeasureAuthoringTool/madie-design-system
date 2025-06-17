import React, { useState } from "react";
import Modal from "./index";
import { humanReadable } from "./HumanReadable";

export default {
    title: "Modal",
    component: Modal,
};

const useModal = () => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    return [open, openModal, closeModal];
};

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris.";

export const WithDesignSystem = () => {
    const [open, openModal, closeModal] = useModal();

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open}
                title="Title Text"
                onRequestClose={closeModal}
            >
                <p>{lorem}</p>
            </Modal>
        </div>
    );
};

export const WithDesignSystemDialog = () => {
    const [open, openModal, closeModal] = useModal();

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open}
                title="Title Text"
                onRequestClose={closeModal}
                primary={{
                    title: "Yes, go for it",
                    onClick: () => {
                        console.log("submit");
                        closeModal();
                    },
                }}
                secondary={{
                    title: "No, take me back",
                }}
            >
                <p>{lorem}</p>
            </Modal>
        </div>
    );
};

export const WithDesignSystemOverflow = () => {
    const [open, openModal, closeModal] = useModal();

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open}
                title="Title Text"
                onRequestClose={closeModal}
                primary={{
                    title: "Yes, go for it",
                    onClick: () => {
                        console.log("submit");
                        closeModal();
                    },
                }}
                secondary={{
                    title: "No, take me back",
                }}
            >
                {[...Array(5)].map((_, i) => (
                    <p key={i}>{lorem.repeat(5)}</p>
                ))}
            </Modal>
        </div>
    );
};

export const WithDesignSystemOverflowForHR = () => {
    const [open, openModal, closeModal] = useModal();
    const hr = humanReadable();

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <div data-testid="view-hr-modal">
                <Modal
                    useDesignSystem
                    isOpen={open}
                    title="Human Readable"
                    onRequestClose={closeModal}
                    width="75rem"
                    primary={{
                        title: "Yes, go for it",
                        onClick: () => {
                            console.log("submit");
                            closeModal();
                        },
                    }}
                    secondary={{
                        title: "No, take me back",
                    }}
                >
                    <div
                        className="modal-body"
                        dangerouslySetInnerHTML={{ __html: hr }}
                    />
                </Modal>
            </div>
        </div>
    );
};
