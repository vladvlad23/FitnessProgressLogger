import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme=>({
    form:{
        marginTop: theme.spacing(8),
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "aquamarine",
        borderRadius: "20px",
    },
    workingDay:{
        marginLeft:theme.spacing(3),
    },
    exercises:{
        marginLeft:theme.spacing(8),
    },

    weekPaper: {
        marginTop: theme.spacing(10),
        marginBottom:theme.spacing(10),
        marginRight:theme.spacing(5),
    },
}))

export default function Results(props){
    const classes = useStyles();

    if(false)
        return (null);

    function WeekResults(props){
        var percentMultiplier=65;
        if(props.weekNumber == 2){
            percentMultiplier+=5;
        }
        else if(props.weekNumber==3){
            percentMultiplier+=10;
        }
        else if(props.weekNumber==4){
            percentMultiplier=40;
        }

        return (
            <div className={classes.form} >
                <Typography variant="h4" component="h6">
                    Week {props.weekNumber}
                </Typography>
                <div>
                    <Typography className={classes.workingDay} variant="h5">
                        Monday
                    </Typography>
                    <div>
                        <p className={classes.workingDay} style={{fontSize:"130%"}}>Working sets</p>
                        <div className={classes.exercises}>
                            <div>Set1: {percentMultiplier/100*props.overheadPressOneRepMax}</div>
                            <div>Set2: {(percentMultiplier+10)/100*props.overheadPressOneRepMax}</div>
                            <div>Set3: {(percentMultiplier+20)/100*props.overheadPressOneRepMax}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography className={classes.workingDay} variant="h5">
                        Tuesday
                    </Typography>
                    <div>
                        <p className={classes.workingDay} style={{fontSize:"130%"}}>Working sets</p>
                        <div className={classes.exercises}>
                            <div>Set1: {percentMultiplier/100*props.deadliftOneRepMax}</div>
                            <div>Set2: {(percentMultiplier+10)/100*props.deadliftOneRepMax}</div>
                            <div>Set3: {(percentMultiplier+20)/100*props.deadliftOneRepMax}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography className={classes.workingDay} variant="h5">
                        Thursday
                    </Typography>
                    <div>
                        <p className={classes.workingDay} style={{fontSize:"130%"}}>Working sets</p>
                        <div className={classes.exercises}>
                            <div>Set1: {percentMultiplier/100*props.benchOneRepMax}</div>
                            <div>Set2: {(percentMultiplier+10)/100*props.benchOneRepMax}</div>
                            <div>Set3: {(percentMultiplier+20)/100*props.benchOneRepMax}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography className={classes.workingDay} variant="h5">
                        Friday
                    </Typography>
                    <div>
                        <p className={classes.workingDay} style={{fontSize:"130%"}}>Working sets</p>
                        <div className={classes.exercises}>
                            <div>Set1: {percentMultiplier/100*props.squatOneRepMax}</div>
                            <div>Set2: {(percentMultiplier+10)/100*props.squatOneRepMax}</div>
                            <div>Set3: {(percentMultiplier+20)/100*props.squatOneRepMax}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Grid item={true}container direction="row"
              alignItems="center"
              className={classes.form} spacing={3}  xs={12}>
            <Grid item={true} xs={3}>
                <WeekResults className={classes.weekPaper} weekNumber="1" {...props} />
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResults className={classes.weekPaper} weekNumber="2" {...props}/>
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResults className={classes.weekPaper} weekNumber="3" {...props}/>
            </Grid>
            <Grid item={true} xs={3}>
                <WeekResults className={classes.weekPaper} weekNumber="4" {...props}/>
            </Grid>

        </Grid>
    )
}