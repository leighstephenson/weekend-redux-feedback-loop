//TODO imports here
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';

function Review() {
    const history = useHistory()
    const feelingRating = useSelector(store => store.feeling);
    const understandingRating = useSelector(store => store.understanding);
    const supportRating = useSelector(store => store.support);
    const additionalComments = useSelector(store => store.comments);


//TODO need to build the success page and route on App
    //! Submit feedback
    const submit = () => {
        axios.post('/feedback', {
            feeling: feelingRating,
            understanding: understandingRating,
            support: supportRating,
            comments: additionalComments,
        }).then(response => {
            history.push('/success');
        }).catch(error => {
            alert('Something is wrong in POST on Review');
            console.log(error)
        });
    };

    //! What displays 
    //feeling > understanding > support > comments > review
    return (

        <>
            <ProgressBar currentStep={5} />
            <Typography>
                Review your answers.
            </Typography>

            <Card>
                <form onSubmit={submit}>
                    <p>Feeling: {feelingRating} </p>
                    <p>Understanding: {understandingRating} </p>
                    <p> Support: {supportRating} </p>
                    <p> Comments: {additionalComments} </p>
                    <Button type="submit">  SUBMIT </Button>

                </form>
            </Card>
        </>
    )
} // end Review ()

export default Review;