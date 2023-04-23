//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';


function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory()
    const feelingRating = useSelector(store => store.feeling);

    //! Handle change
    const handleChange = (event) => {
        event.preventDefault();
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
    //feeling > understanding > support > comments > review
    //TODO add conditional to keep rating between 1-10. Maybe add a conditional
    //TODO to the submit to change a color if rating is < 1 or > 10

    return (

        <>
            <ProgressBar currentStep={0} />
            <Typography>
                 How you feelin'?
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={feelingRating}
                        onChange={handleChange}
                        type="number" />
                    <Button type="submit">  Next </Button>

                </form>
            </Card>

        </>
    )
} // end Feeling()

export default Feeling;