//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory()
    const supportRating = useSelector(store => store.support);

    //! Handle change
    const handleChange = (event) => {
        const action = { type: "SET_SUPPORT", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    //TODO add onto conditionals on all components!
    const nextStep = () => {
        if (supportRating === '') {
            alert('Please enter a rating');
        } else {
            history.push('/comments')
        };
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={2} />
            <Typography>
                <p> How well are you being supported? </p>
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={supportRating}
                        onChange={handleChange}
                        type="number" />
                    <input type="submit" value="Next" />

                </form>
            </Card>

        </>
    )
} // end Support ()

export default Support;