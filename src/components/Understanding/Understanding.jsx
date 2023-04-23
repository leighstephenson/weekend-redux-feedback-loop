//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory()
    const understandingRating = useSelector(store => store.understanding);

    //! Handle change
    const handleChange = (event) => {
        event.preventDefault();
        const action = { type: "SET_UNDERSTANDING", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        if (understandingRating === '0') {
            alert('Please enter a rating');
        } else {
            history.push('/support')
        };
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={1} />
            <Typography>
                Rate your understanding.
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={understandingRating}
                        onChange={handleChange}
                        type="number" />

                    <Button type="submit">  Next </Button>
                </form>
            </Card>

        </>
    )
} // end Understanding ()

export default Understanding;