import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export function useWindowWidth() {
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export const HeaderStateContext = createContext(null);

export const HeaderStateProvider = ({ children, RouterLink }) => {
    const [currentOpenMenu, setCurrentOpenMenu] = useState("");

    const handleToggleMenu = (name) => {
        if (currentOpenMenu === name) {
            return setCurrentOpenMenu("");
        }
        return setCurrentOpenMenu(name);
    };

    const closeMenus = () => setCurrentOpenMenu("");
    return (
        <HeaderStateContext.Provider
            value={{
                currentOpenMenu,
                handleToggleMenu,
                closeMenus,
                RouterLink,
            }}
        >
            {children}
        </HeaderStateContext.Provider>
    );
};
HeaderStateProvider.propTypes = {
    children: PropTypes.node.isRequired,
    RouterLink: PropTypes.func,
};
HeaderStateProvider.defaultProps = {
    RouterLink: null,
};

export const useHeaderState = () => {
    const context = useContext(HeaderStateContext);
    if (context === undefined) {
        throw new Error(
            "useHeaderState must be used within a HeaderStateProvider"
        );
    }
    return context;
};
