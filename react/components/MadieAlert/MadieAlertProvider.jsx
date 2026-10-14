import React, { createContext, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const MadieAlertContext = createContext(null);

const MadieAlertProvider = ({ children }) => {
    const [minimizedAlerts, setMinimizedAlerts] = useState(() => new Map());

    const registerMinimizedAlerts = useCallback((errorCount, restore) => {
        const id = Symbol();
        setMinimizedAlerts((previous) =>
            new Map(previous).set(id, { errorCount, restore })
        );

        return () => {
            setMinimizedAlerts((previous) => {
                if (!previous.has(id)) return previous;
                const next = new Map(previous);
                next.delete(id);
                return next;
            });
        };
    }, []);

    const restoreAlerts = useCallback(() => {
        minimizedAlerts.forEach((alert) => alert.restore());
        setMinimizedAlerts(new Map());
    }, [minimizedAlerts]);

    const value = useMemo(
        () => ({
            registerMinimizedAlerts,
            restoreAlerts,
            hasMinimizedAlerts: minimizedAlerts.size > 0,
            totalMinimizedErrors: Array.from(minimizedAlerts.values()).reduce(
                (total, alert) => total + alert.errorCount,
                0
            ),
        }),
        [minimizedAlerts, registerMinimizedAlerts, restoreAlerts]
    );

    return (
        <MadieAlertContext.Provider value={value}>
            {children}
        </MadieAlertContext.Provider>
    );
};

MadieAlertProvider.propTypes = {
    children: PropTypes.node,
};

export default MadieAlertProvider;
