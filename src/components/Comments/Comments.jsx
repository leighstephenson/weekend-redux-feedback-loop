//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory()
    const additionalComments = useSelector(store => store.comments);

    //! Handle change
    const handleChange = (event) => {
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        if (additionalComments === '') {
            alert('Please enter a rating');
        } else {
            history.push('/review')
        };
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={4} />
            <Typography>
                <p> Do you have any additional comments?</p>
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={additionalComments}
                        onChange={handleChange}
                        type="text" />
                    <input type="submit" value="Next" />

                </form>
            </Card>
        </>
    )
} // end Comments()

export default Comments;