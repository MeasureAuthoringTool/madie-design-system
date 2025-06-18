import React from "react";
import PropTypes from "prop-types";
import ReadOnlyTextField from "./index";
import { FormHelperText } from "@mui/material";

export default {
    title: "ReadOnlyTextField",
    component: ReadOnlyTextField,
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export const Textfield = () => (
    <Wrapper>
        <ReadOnlyTextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            value="All Patient Encounters; Cancer Diagnosis; Chemo Administered; Chemotherapy Received during Last 14 days; Chemotherapy Received during Last 14 days - Encounter; Chemotherapy Received during Last 14 days - Medication; Chemotherapy Received during Last 14 days - Procedure; Denominator; Initial Population; Numerator; Patient Expired; SDE Ethnicity; SDE Payer; SDE Race; SDE Sex; Two Office Visits in Measurement Period"
        />
    </Wrapper>
);

export const Disabled = () => (
    <Wrapper>
        <ReadOnlyTextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            disabled
            required
        />
    </Wrapper>
);

export const Required = () => (
    <Wrapper>
        <ReadOnlyTextField
            placeholder="Placeholder"
            required
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
        />
    </Wrapper>
);

export const Error = () => (
    <Wrapper>
        <ReadOnlyTextField
            placeholder="Placeholder"
            error
            required
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText={
                <FormHelperText data-testid="helper-text" error>
                    An error message
                </FormHelperText>
            }
        />
    </Wrapper>
);
