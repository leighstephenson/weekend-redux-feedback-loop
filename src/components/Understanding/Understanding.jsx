//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import ArrowRight from '@mui/icons-material/ArrowRight'


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
    const nextStep = (event) => {
        event.preventDefault();
        if (understandingRating < 1 | understandingRating === '' | understandingRating > 10) {
            alert('Please enter a rating between 1 and 10');
        } else {
            history.push('/support')
        };
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={1} />

            <Card sx={{
                display: 'block',
                justifyContent: 'center',
                margin: 5,
                padding: 5,
                boxShadow: 9,

            }}>

                <Typography variant="h5">
                    Rate your understanding.
                </Typography>

                <form onSubmit={nextStep}>
                    <br />
                    <br />

                    <input id="rating"
                        value={understandingRating}
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
                        sx={{':hover': {
                            bgcolor: 'secondary.main',
                        },
                    }}
                    >
                        Next </Button>

                </form>
            </Card>

        </>
    )
} // end Understanding ()

export default Understanding;