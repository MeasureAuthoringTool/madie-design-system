function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const svgAttrs = (svgString, { ...attrs }) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(svgString, 'image/svg+xml');
  setAttributes(document.firstChild, attrs);
  return document.firstChild.outerHTML;
};

export default svgAttrs;

export const mapSvgAttrs = (svgStrings = [], attrs = {}) =>
  svgStrings.map((s) => svgAttrs(s, attrs));
