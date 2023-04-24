//TODO any imports?
import { Card, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';

function Success() {

    const history = useHistory();
    const dispatch = useDispatch();

    //! Takes user back to step 1, clears all inputs
    const restartSurvey = () => {
        dispatch({ type: 'CLEAR_FORM' });
        history.push('/')
    };

    //! What displays
    return (
        <span>
            <Typography variant='h2'>
                Success!
            </Typography>
            <br />
            <Typography>
                Your response has been submitted. Thank you!
            </Typography>
            <br />
            <br />

            <Button onClick={restartSurvey}> Restart </Button>

        </span>
    )
}; //End Success()

export default Success; 