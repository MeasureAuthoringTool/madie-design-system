import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// The content is populated with the following priority order:
// 1. Use the content in localStorage if it's there
// 2. If not, make a call to get it from a QPPFE endpoint.
//    Hydrate the localStorage item with the response if localStorage item doesn't match call content.
// 3. If the call fails, use the default content
const useGetConfig = ({
    url = "",
    localStorageName = "",
    equalityCheckExclude = [],
    timeout = 30,
    defaultContent,
}) => {
    const [result, setResult] = useState();

    if (!url || !localStorageName) {
        throw new Error("Arguments for url and localStorageName are required");
    }

    useEffect(() => {
        const storageContent = JSON.parse(
            localStorage.getItem(localStorageName),
        );
        if (
            storageContent?.content &&
            new Date().valueOf() < storageContent.expiration
        ) {
            setResult(storageContent);
        } else {
            const origin = window.location.origin;
            axios
                .get(`${origin}${url}`)
                .then(({ data: { data = {} } }) => {
                    const expiration =
                        new Date().valueOf() + timeout * 60 * 1000;
                    const storageItem = {
                        expiration,
                    };
                    if (
                        data?.content &&
                        storageContent?.content &&
                        Object.keys(data.content).every((key) => {
                            if (equalityCheckExclude.includes(key)) {
                                return true;
                            }
                            return (
                                data.content[key] ===
                                storageContent.content[key]
                            );
                        })
                    ) {
                        storageItem.content = storageContent.content;
                    } else {
                        storageItem.content = data.content;
                    }

                    localStorage.setItem(
                        localStorageName,
                        JSON.stringify(storageItem),
                    );
                    setResult(storageItem);
                })
                .catch((e) => {
                    setResult({ content: defaultContent, expiration: 0 });
                });
        }
    }, []);

    return result;
};

export const withGetConfig = (Component, options) => {
    function WrappedComponent(props) {
        const result = useGetConfig(options);
        return <Component result={result} {...props} />;
    }
    return WrappedComponent;
};

export default useGetConfig;
