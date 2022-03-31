import React from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

// To change the spinner size you have to pass style props for height and width.
const MadieSpinner = (props) => {
    const useStyles = makeStyles({
        svg: {
            backgroundColor: 'transparent',
            borderRadius: '100%',
            // box shadow is our track. It needs to match the thickness of the svg element to look like it
            // if we get a thickness value, we update our box shadow
            boxShadow: `inset 0 0 0px ${props.thickness ? props.thickness : '7'}px #DDDDDD`,
        },
        circle: {
            color: '#209FA6',
            strokeLinecap: 'round',
        }
    });
    const classes = useStyles();
    return (
    <CircularProgress
        aria-label="loading-spinner"
        classes={classes}
        thickness={7}
        style={{ height: 50, width: 50 }}
        // Props overwrite whatever they want.
        {...props}
    />)
}

MadieSpinner.propTypes = {
    thickness: PropTypes.number
};

export default MadieSpinner;
