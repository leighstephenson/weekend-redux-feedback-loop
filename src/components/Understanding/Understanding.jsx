//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory()
    const understandingRating = useSelector(store => store.understanding);

    //! Handle change
    const handleChange = (event) => {
        const action = { type: "SET_UNDERSTANDING", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        if (understandingRating === '') {
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
                <p> Rate your understanding.</p>
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={understandingRating}
                        onChange={handleChange}
                        type="number" />
                    <input type="submit" value="Next" />

                </form>
            </Card>

        </>
    )
} // end Understanding ()

export default Understanding;