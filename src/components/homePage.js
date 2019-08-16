import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProgramPreview from './programPreview'
import ImageDeadlift from '../images/deadlifting.jpg'
import ImageOverheadPressing from '../images/overheadpressing.jpg'
import { withRouter } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    toolbarRightButtons: {
        marginLeft: "auto",
        marginRight: "-12"
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));


function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h2" variant="h5" align="center" color="textPrimary" gutterBottom>
                        Who am i and what is Progress Logger?
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{display: 'inline-block'}}>
                        I am a computer science student that needed some practice with web development.
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{display: 'inline-block'}}>
                        I also am passionate about fitness and lifting and i found that the online calculators for logging
                        progress were not to my liking and they had no log-in system.
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{display: 'inline-block'}}>
                        This site has been made so that you can track your progress using weightlifting programs.
                        Just log in and your progress will be stored.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container direction="row" spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Where should i start?
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        <ProgramPreview
            programPath="/531program/"
            programName="5/3/1"
            programDescription="5/3/1 is a weightlifting program developed by Jim Wendler. It incorporates
            a well fixed and tested progression scheme which, in time, increases the numbers on the bar."
            image={ImageDeadlift}/>
        <ProgramPreview
            programPath="/stronglifts/"
            programName="Stronglifts 5x5"
            programDescription="Stronglifts 5x5 is a program highly recommended to beginners that are looking to build
            a foundation of strength and muscle because of its linear progression and exclusivity to compound movements."
            image={ImageOverheadPressing}/>
        </div>
    )
}

export default withRouter(HomePage);