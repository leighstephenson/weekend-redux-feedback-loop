//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import ArrowRight from '@mui/icons-material/ArrowRight'


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


            <Card sx={{
                display: 'block',
                justifyContent: 'center',
                margin: 5,
                padding: 5,
                boxShadow: 9,

            }}>

                <Typography variant="h5">
                    How well are you being supported?
                </Typography>

                <form onSubmit={nextStep}>
                    <br />
                    <br />

                    <input id="rating"
                        value={supportRating}
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
} // end Support ()

export default Support;