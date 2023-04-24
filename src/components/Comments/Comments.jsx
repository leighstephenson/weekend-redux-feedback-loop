//TODO imports here
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import ArrowRight from '@mui/icons-material/ArrowRight'

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory()
    const additionalComments = useSelector(store => store.comments);

    //! Handle change
    const handleChange = (event) => {
        event.preventDefault();
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    };

    //! Next Step
    const nextStep = () => {
        history.push('/review')
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={4} />

            <Card sx={{
                display: 'block',
                justifyContent: 'center',
                margin: 5,
                padding: 5,
                boxShadow: 9,

            }}>
                <Typography variant="h5">
                    Do you have any additional comments?
                </Typography>

                <form onSubmit={nextStep}>
                    <br />
                    <br />

                    <input id="rating"
                        value={additionalComments}
                        onChange={handleChange}
                        type="text"
                        placeholder="Optional"
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
} // end Comments()

export default Comments;