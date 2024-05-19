import {React} from "react";
import Button from '@mui/material/Button';
import classes from "./SwipePage.module.css"
import ImageCarosel from "../components/ImageCarosel/ImageCarosel"
import Rating from "../components/Rating/Rating"
import data from "../dummydata"


const SwipePage = () => {
    return (
        <div className={classes.SwipeContainer}>
            <h2 className={classes.Title}>
                Pupularity Contest!
            </h2>

            <div className={classes.PupCarosel}>
                <ImageCarosel data={data}/>
                
            </div>

            <div className={classes.UploadNew}>
                <Button variant="contained">Upload New</Button>

            </div>
        </div>
    );
};

export default SwipePage;