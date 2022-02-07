import React from 'react';
import PropTypes from 'prop-types';

const PracticeDetails = ({
  practiceName,
  practiceTin,
  apmEntityId,
  vgId,
  cpcPlusId,
  pcfId
}) => {
  function renderId() {
    if (cpcPlusId) {
      return <p className="practice-tin">CPC+ ID: {cpcPlusId}</p>;
    } else if (pcfId) {
      return <p className="practice-tin">PCF ID: {pcfId}</p>;
    } else if (apmEntityId) {
      return <p className="practice-tin">APM Entity ID: {apmEntityId}</p>;
    } else if (vgId) {
      return <p className="practice-tin">VG ID: {vgId}</p>;
    } else if (practiceTin) {
      return <p className="practice-tin">TIN: {practiceTin}</p>;
    } else {
      return;
    }
  }

  return (
    <div className="practice-container">
      <h2 className="practice-name">{practiceName || 'No name on record'}</h2>
      {renderId()}
    </div>
  );
};

PracticeDetails.propTypes = {
  practiceName: PropTypes.string,
  practiceTin: PropTypes.string,
  apmEntityId: PropTypes.string,
  vgId: PropTypes.string,
  cpcPlusId: PropTypes.string,
  pcfId: PropTypes.string,
};

export default PracticeDetails;
