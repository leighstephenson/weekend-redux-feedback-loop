//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';


function Support() {
    const dispatch = useDispatch();
    const history = useHistory()
    const supportRating = useSelector(store => store.support);

    //! Handle change
    const handleChange = (event) => {
        event.preventDefault();
        const action = { type: "SET_SUPPORT", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        if (supportRating < 1 || supportRating === '' || supportRating > 10) {
            alert('Please enter a rating between 1 and 10');
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
                How well are you being supported?
            </Typography>

            <Card>
                <form onSubmit={nextStep}>
                    <input id="rating"
                        value={supportRating}
                        onChange={handleChange}
                        type="number"
                        placeholder="1-10"
                    />
                    <Button type="submit">  Next </Button>

                </form>
            </Card>

        </>
    )
} // end Support ()

export default Support;