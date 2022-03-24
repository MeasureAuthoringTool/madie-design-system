import React from "react";
import PropTypes from "prop-types";

const IndividualDetails = ({ individualName, individualNpi }) => {
    return (
        <div className="individual-container">
            <h3 className="individual-name">{individualName}</h3>
            <p className="individual-npi">NPI: {individualNpi}</p>
        </div>
    );
};

IndividualDetails.propTypes = {
    individualName: PropTypes.string,
    individualNpi: PropTypes.string,
};

export default IndividualDetails;
