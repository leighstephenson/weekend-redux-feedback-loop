import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import ArrowRight from '@mui/icons-material/ArrowRight'


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
    const nextStep = (event) => {
        event.preventDefault();
        if (feelingRating < 1 || feelingRating === '' || feelingRating > 10) {
            alert('Please enter a rating between 1 and 10');
        } else {
            history.push('/understanding')
        };
    };

    //! What Displays
    //feeling > understanding > support > comments > review

    return (

        <>
            <ProgressBar currentStep={0} />

            <Card sx={{
                display: 'block',
                justifyContent: 'center',
                margin: 5,
                padding: 5,
                boxShadow: 9,

            }}>

                <Typography variant="h5">
                    How you feelin'?
                </Typography>

                <form onSubmit={nextStep}>
                    <br />
                    <br />

                    <input id="rating"
                        value={feelingRating}
                        onChange={handleChange}
                        type="number"
                        placeholder="1-10"
                    />

                    <br />
                    <br />
                    <br />

                    <Button type="submit"
                        variant="contained"
                        endIcon={<ArrowRight />}
                        sx={{
                            ':hover': {
                                bgcolor: 'secondary.main',
                            },
                        }}
                    >
                        Next </Button>

                </form>
            </Card>

        </>
    )
} // end Feeling()

export default Feeling;