import storyWrapper from '../storyWrapper';

export default {
  title: 'Components/TextInput',
};

export const TextInput = () =>
  storyWrapper(`
    <label class="qpp-u-margin-bottom--8" for="example">Input Field</label>
    <input class="qpp-c-text-input" type="text" id="example" name="single_example" value="Example value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="placeholder-example">Input Field With Placeholder</label>
    <input class="qpp-c-text-input" type="text" id="placeholder-example" name="placeholder" placeholder="Placeholder value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="placeholder-example">Big Input Field</label>
    <input class="qpp-c-text-input qpp-c-text-input--big" type="text" id="placeholder-example" name="placeholder" placeholder="Placeholder value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="disabled-example">Disabled Input Field</label>
    <input class="qpp-c-text-input" disabled type="text" id="disabled-example" name="disabled_example" value="Example value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="focused-example">Focused Input Field</label>
    <input class="qpp-c-text-input qpp-c-text-input--focus" type="text" id="focused-example" name="focused_example" value="Example value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="error-example">Error Input Field</label>
    <input class="qpp-c-text-input qpp-c-text-input--error qpp-u-margin-bottom--8" type="text" id="error-example" name="error_example" value="Example value">
    <span class="qpp-error-message">Error Message</span>
    <br />
    <label class="qpp-u-margin-bottom--8" for="success-example">Success Input Field</label>
    <input class="qpp-c-text-input qpp-c-text-input--success" type="text" id="success-example" name="success" value="Example value">
    <br />
    <label class="qpp-u-margin-bottom--8" for="hint-example">Input Field With Hint</label>
    <input class="qpp-c-text-input qpp-u-margin-bottom--8" type="text" id="hint-example" name="hint" value="Example value">
    <span class="qpp-hint-message">Hint Message</span>
    <br />
    <label class="qpp-u-margin-bottom--8" for="textarea-example">Textarea</label>
    <textarea class="qpp-c-text-input qpp-u-margin-bottom--8" type="textarea" placeholder="placeholder" id="textarea-example" name="textarea">Example value</textarea>
  `);
