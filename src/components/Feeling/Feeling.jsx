//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';


function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory()
    const feelingRating = useSelector(store => store.feeling);

    //! Handle change
    const handleChange = (event) => {
        const action = { type: "SET_FEELING", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        if (feelingRating === '') {
            alert('Please enter a rating');
        } else {
            history.push('/understanding')
        };
    };


    //! What Displays
    //TODO add conditional to keep rating between 1-10. Maybe add a conditional
    //TODO to the submit to change a color if rating is < 1 or > 10

    return (

        <>
            <Typography>
                <p> How you feelin'?</p>
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={feelingRating}
                        onChange={handleChange}
                        type="number" />
                    <input type="submit" value="Next" />

                </form>
            </Card>

        </>
    )
} // end Feeling()

export default Feeling;