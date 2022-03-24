import React from "react";
import xss from "xss";
import PropTypes from "prop-types";

// Override the default allowed HTML tags
const defaultAllowedTags = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "b",
    "blockquote",
    "br",
    "button",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hr",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "mark",
    "meter",
    "nav",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "svg",
    "use",
    "polygon",
    "circle",
    "g",
    "path",
];

// Override the default allowed HTML attributes for all tags
const defaultAllowedAttributes = {
    "*": [
        "action",
        "alt",
        "aria-*",
        "autocomplete",
        "cite",
        "class",
        "cols",
        "colspan",
        "data-*",
        "datetime",
        "disabled",
        "download",
        "for",
        "headers",
        "height",
        "hidden",
        "href",
        "hreflang",
        "id",
        "lang",
        "list",
        "max",
        "maxlength",
        "minlength",
        "media",
        "method",
        "min",
        "multiple",
        "name",
        "novalidate",
        "open",
        "pattern",
        "placeholder",
        "readonly",
        "rel",
        "required",
        "reversed",
        "rows",
        "rowspan",
        "sandbox",
        "scope",
        "scoped",
        "selected",
        "size",
        "sizes",
        "span",
        "spellcheck",
        "src",
        "srcset",
        "start",
        "step",
        "style",
        "summary",
        "tabindex",
        "target",
        "title",
        "type",
        "value",
        "width",
        "wrap",
        "fill",
        "stroke",
        " stroke-width",
        "d",
        "points",
        "viewbox",
        "x",
        "y",
        "cx",
        "cy",
        "r",
        "xmlns",
        "xmlns:xlink",
        "xlink:href",
        "version",
        "preserveaspectratio",
        "enable-background",
    ],
};

const SanitizedContent = ({
    html = "<div/>",
    customClassName = null,
    allowedTags = defaultAllowedTags,
    allowedAttributes = defaultAllowedAttributes,
}) => {
    const whiteList = allowedTags.reduce((map, tag) => {
        map[tag] = allowedAttributes["*"];
        return map;
    }, {});
    const sanitizedHTML = xss(html, { whiteList });
    return (
        <div
            {...(customClassName && { className: customClassName })}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
    );
};

SanitizedContent.propTypes = {
    html: PropTypes.string,
    customClassName: PropTypes.string,
    allowedTags: PropTypes.array,
    allowedAttributes: PropTypes.array,
};

export default SanitizedContent;
