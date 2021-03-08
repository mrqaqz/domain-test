import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Stepper, Step, StepLabel, Typography, Button} from "@material-ui/core";
// Components Import
import Signup_One from "../_components/Signup_One";

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "1px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active":{
            color: "#E2251D",
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed":{
            color: "#E2251D",
        }
    }
})

const Signup = () => {
    // React Hooks
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["PERSONAL DETAILS", "COMPANY DETAILS", "ADDRESS DETAILS"];
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const steps = getSteps();

    function getStepsContent(stepIndex) {
        switch(stepIndex){
            case 0: return (
                // eslint-disable-next-line react/jsx-pascal-case
                <Signup_One
                    handleNext={handleNext}
                    activeStep={activeStep}
                    steps={steps}
                />
            )
            case 1: return "Step 2 (COMPANY DETAILS)";
            case 2: return "Step 3 (ADDRESS DETAILS)";
            default: return "Unknown Step";
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key = {label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
                  
            {activeStep === steps.length ? "The Steps Completed" :(
                <>
                    {getStepsContent(activeStep)}
                </>
            )}
        </div>
    )
}

export default Signup
