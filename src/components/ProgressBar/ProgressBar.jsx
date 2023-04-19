import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

//feeling > understanding > support > comments > review

const steps = [
    'Feeling',
    'Understanding',
    'Support',
    'Comments',
    'Review'
];

function ProgressBar({ currentStep }) {

    return (
        <Stepper sx={{ margin: '30px' }} activeStep={currentStep}>
            {
                steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))
            }
        </Stepper>
    )
}

export default ProgressBar;