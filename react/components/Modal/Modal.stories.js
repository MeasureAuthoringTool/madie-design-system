import React, { useState } from "react";
import Modal from "./index";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { humanReadable } from "./HumanReadable";

export default {
    title: "Modal",
    component: Modal,
    decorators: [withKnobs],
};

const useModal = () => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    return [open, openModal, closeModal];
};

export const WithDesignSystem = () => {
    const [open, openModal, closeModal] = useModal();
    const knobIsOpen = boolean("isOpen", false);
    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open || knobIsOpen}
                title={text("Title text", "Title Text")}
                onRequestClose={closeModal}
            >
                <p>
                    {text(
                        "bodyText",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris."
                    )}
                </p>
            </Modal>
        </div>
    );
};

export const WithDesignSystemDialog = () => {
    const [open, openModal, closeModal] = useModal();
    const knobIsOpen = boolean("isOpen", false);
    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open || knobIsOpen}
                title={text("Title text", "Title Text")}
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
                <p>
                    {text(
                        "bodyText",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris."
                    )}
                </p>
            </Modal>
        </div>
    );
};

export const WithDesignSystemOverflow = () => {
    const [open, openModal, closeModal] = useModal();
    const knobIsOpen = boolean("isOpen", false);
    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>
            <Modal
                useDesignSystem
                isOpen={open || knobIsOpen}
                title={text("Title text", "Title Text")}
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus ac pulvinar massa, in mattis ligula. Vestibulum
                    enim velit, ullamcorper vitae lorem ullamcorper, blandit
                    fringilla mauris. Aenean odio nulla, dapibus convallis est
                    ac, tempor congue lorem. Aliquam facilisis tortor eget
                    lectus gravida bibendum. Suspendisse vel posuere risus.
                    Etiam condimentum sollicitudin est, eget auctor lectus
                    suscipit nec. Duis efficitur vitae risus at malesuada.
                    Mauris tempus turpis sed lacus lacinia, et mattis tortor
                    eleifend. In sit amet felis vel quam egestas ultricies ac ac
                    nisl. Morbi elementum dui libero, non convallis risus ornare
                    vel. Maecenas posuere ipsum ut sem aliquet, quis maximus
                    dolor cursus. Praesent vulputate orci tellus, sed fringilla
                    arcu mollis sit amet. Phasellus eros turpis, consequat sit
                    amet placerat sed, mollis ac justo.
                </p>
                <p>
                    Cras quis pharetra elit. Mauris lacinia quam quis metus
                    mattis lobortis vel nec arcu. Fusce nec tellus vel nunc
                    cursus vestibulum. Quisque pretium, arcu at sagittis
                    posuere, leo magna tempus nunc, vel malesuada nunc mauris ac
                    ante. Donec arcu velit, imperdiet vitae purus nec, imperdiet
                    auctor nisi. Cras ornare, elit sit amet viverra bibendum,
                    justo dolor congue mi, quis pretium erat orci a lorem. Sed
                    rhoncus quam ut tellus hendrerit accumsan.
                </p>
                <p>
                    Donec varius elit vitae elit efficitur fermentum. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Nulla facilisi. Ut malesuada
                    venenatis varius. Nunc libero massa, luctus sagittis sapien
                    ultrices, pulvinar venenatis purus. In nec orci ac nibh
                    sagittis lobortis vel sed massa. Morbi pretium odio vitae
                    malesuada ullamcorper. Pellentesque facilisis posuere
                    consectetur. Nam maximus finibus ante, non eleifend neque
                    euismod et.
                </p>
                <p>
                    Pellentesque vehicula nec massa nec accumsan. Pellentesque
                    non odio eu felis hendrerit pellentesque non sed neque.
                    Morbi dui nisl, facilisis id gravida non, vehicula at dui.
                    In eleifend suscipit imperdiet. Quisque facilisis augue et
                    mi lobortis tristique. Praesent auctor dictum erat, non
                    mollis ante tempus id. Integer et libero iaculis, imperdiet
                    neque at, pharetra nisl. Suspendisse diam massa, vehicula eu
                    varius ullamcorper, semper vel velit. Morbi consequat mattis
                    nisi, id dignissim est bibendum non. Suspendisse semper
                    laoreet neque, ac tincidunt tortor. Ut posuere urna a
                    convallis consectetur. Mauris varius cursus libero sed
                    molestie. Duis id dignissim arcu. Mauris tincidunt egestas
                    congue.
                </p>
                <p>
                    Donec rutrum erat vitae nulla ultricies, quis laoreet orci
                    consequat. Nunc et justo volutpat dolor feugiat convallis.
                    Vivamus efficitur nisi quis risus eleifend, ut tincidunt
                    turpis volutpat. Nam commodo turpis dolor, dapibus rutrum
                    erat facilisis a. Ut a dictum urna. Maecenas vel egestas
                    odio. Ut venenatis est dolor, eget ullamcorper diam finibus
                    et. Proin tincidunt porta pellentesque.
                </p>
            </Modal>
        </div>
    );
};

export const WithDesignSystemOverflowForHR = () => {
    const [open, openModal, closeModal] = useModal();
    const knobIsOpen = boolean("isOpen", false);

    const hr = humanReadable();

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={openModal}>
                Open Modal
            </button>

            <div data-testid="view-hr-modal">
                <Modal
                    useDesignSystem
                    isOpen={open || knobIsOpen}
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
