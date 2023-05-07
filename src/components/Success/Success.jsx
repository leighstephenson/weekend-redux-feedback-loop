import { Card, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Replay } from '@mui/icons-material';
import ReplayIcon from '@material-ui/icons/Replay';

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
                Your response has been submitted. You can now close this window.

                <br />
                <br />

                Thank you!
            </Typography>
            <br />
            <br />

            <Button onClick={restartSurvey}
                variant="contained"
                endIcon={<Replay />}
                sx={{
                    ':hover': {
                        bgcolor: 'secondary.main',
                    },
                }} >
                Restart </Button>

        </span>
    )
}; //End Success()

export default Success; 