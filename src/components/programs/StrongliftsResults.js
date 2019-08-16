import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ( {
    form:{
        marginTop: theme.spacing(8),
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "aquamarine",
        borderRadius: "20px",
    },
    weekPaper: {
        marginTop: theme.spacing(10),
        marginBottom:theme.spacing(10),
        marginRight:theme.spacing(5),
    },
    workingDay:{
        marginLeft:theme.spacing(3),
    },
    exercises:{
        marginLeft:theme.spacing(8),
    },
}));

export default function Results(props){
    const classes = useStyles();

    /*
    The number is necessary as to avoid string cocatenation (123 + 2.5 = 1232.5)
    The floor is necessary to round up to the lowest 2.5 Math.floor(x/2.5)*2.5 does that
     */
    const squatWeight = Math.floor(Number(props.squatWeight)/2.5)*2.5;
    const deadliftWeight = Math.floor(Number(props.deadliftWeight)/2.5)*2.5;
    const overheadPressWeight = Math.floor(Number(props.overheadPressWeight)/2.5)*2.5;
    const benchWeight = Math.floor(Number(props.benchWeight)/2.5)*2.5;
    const rowWeight = Math.floor(Number(props.rowWeight)/2.5)*2.5;

    function OverheadPressDay (props) {
        return (
            <div>
                <Typography className={classes.workingDay}>{props.day}</Typography>
                <div>
                    <Typography className={classes.exercises}>Squat 5x5 - {squatWeight + props.increment}</Typography>
                    <Typography className={classes.exercises}>Overhead Press 5x5 - {overheadPressWeight + props.increment}</Typography>
                    <Typography className={classes.exercises}>Deadlift 1x5 - {deadliftWeight + props.increment}</Typography>
                </div>
            </div>
        );
    }

    function BenchDay(props) {
        return (
            <div>
                <Typography className={classes.workingDay}>{props.day}</Typography>
                <div>
                    <Typography className={classes.exercises}>Squat 5x5 - {squatWeight + props.increment}</Typography>
                    <Typography className={classes.exercises}>Bench Press 5x5 - {benchWeight + props.increment}</Typography>
                    <Typography className={classes.exercises}>Barbell Rows 5x5 - {rowWeight + props.increment}</Typography>
                </div>
            </div>
        );
    }

    function WeekResultsEven(props){
        return (
            <div>
                <OverheadPressDay day="Monday" increment={props.weekNumber*2.5}/>
                <BenchDay day="Wednesday"increment={props.weekNumber*2.5}/>
                <OverheadPressDay day="Friday"increment={props.weekNumber*2.5} />
            </div>
        );
    }


    function WeekResultsOdd(props){
        return (
            <div>
                <BenchDay day="Monday"increment={props.weekNumber*2.5} />
                <OverheadPressDay day="Wednesday" increment={props.weekNumber*2.5}/>
                <BenchDay day="Friday" increment={props.weekNumber*2.5} />
            </div>
        );
    }

    return (
        <Grid item={true}container direction="row"
              alignItems="center"
              className={classes.form} spacing={3}  xs={12}>
            <Grid item={true} xs={3}>
                <WeekResultsOdd className={classes.weekPaper} weekNumber="0" {...props} />
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResultsEven className={classes.weekPaper} weekNumber="1" {...props}/>
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResultsOdd className={classes.weekPaper} weekNumber="2" {...props}/>
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResultsEven className={classes.weekPaper} weekNumber="3" {...props}/>
            </Grid>
        </Grid>
    );
}