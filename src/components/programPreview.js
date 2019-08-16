import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import {Link }from "react-router-dom";
import React from "react";

const useStyles = makeStyles(theme => ({
    whatIsProgram: props=> ({
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }),
    whatIsProgramContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
}))

export default function ProgramPreview (props){
    const classes = useStyles(props);
    const programName=props.programName;
    const programDescription=props.programDescription;
    const programPath = props.programPath;

    return (
        <div>
            <Paper className={classes.whatIsProgram}>
            {/* Increase the priority of the hero background image */}
            {
                <img
                    style={{display: 'none'}}
                    alt="background"
                />
            }
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.whatIsProgramContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                What is {programName} ?
                            </Typography>
                            <Typography variant="h6" color="inherit" paragraph>
                                {programDescription}
                            </Typography>
                                <Link to={programPath} variant="subtitle1" href="#">
                                    Details and calculator...
                                </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}