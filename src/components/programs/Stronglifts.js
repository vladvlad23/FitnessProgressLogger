import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Results from "./StrongliftsResults"

const useStyles = makeStyles( theme =>({
    form:{
        marginTop: theme.spacing(8),
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "aquamarine",
        borderRadius: "20px",
    },
    sectionTitle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        fontWeight: "bold",
    },
    textFieldGroups:{
        marginLeft: theme.spacing(2),
    },
    field: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

})) ;




export default function Stronglifts(){
    const classes = useStyles();
    const [benchMax,setBenchMax] = useState(0);
    const [squatMax,setSquatMax] = useState(0);
    const [overheadPressMax,setOverheadPressMax] = useState(0);
    const [deadliftMax,setDeadliftMax] = useState(0);
    const [rowMax,setRowMax] = useState(0);

    function submitData(event){
        event.preventDefault();
        const data = new FormData(event.target);

        if(isNaN(parseInt(data.get('squatMax')))||
            isNaN(parseInt(data.get('benchMax'))) ||
            isNaN(parseInt(data.get('deadliftMax'))) ||
            isNaN(parseInt(data.get('overheadPressMax'))) ||
            isNaN(parseInt(data.get('rowMax'))))
            alert("Fields must be valid numbers!");
        else {
            setSquatMax(data.get('squatMax'));
            setBenchMax(data.get('benchMax'));
            setDeadliftMax(data.get('deadliftMax'));
            setOverheadPressMax(data.get('overheadPressMax'));
            setRowMax(data.get('rowMax'));
        }

    }
    //todo here we will add a description of stronglifts
    function saveToAccount() {
        alert("Works as well");
    }

    return (
        <Container component="main">
            <CssBaseline />
            <div>
                <form onSubmit={submitData} className={classes.form} >
                    <Grid container spacing={2} >
                        <Typography className={classes.sectionTitle} component="h2" variant="h5">
                            Rep Maxes
                        </Typography>
                        <Grid item={true} xs={12} >
                            <FormGroup>
                                <Grid item={true} xs={12}>
                                        <TextField
                                        required
                                        name="squatMax"
                                        className={classes.field}
                                        hint="Introduce Squat Value Here" label="Squat" />
                                        <TextField
                                        required
                                        name="numberOfRepsSquat"
                                        className={classes.field}
                                        hint="Introduce number of max reps here" label="Squat max reps" />

                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField required name="deadliftMax" className={classes.field}
                                           hint="Introduce Deadlift Value Here"  label="Deadlift"/>
                                    <TextField
                                        required
                                        name="numberOfRepsDeadlift"
                                        className={classes.field}
                                        hint="Introduce number of max reps here" label="Deadlift max reps" />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField required name="benchMax" className={classes.field}
                                               hint="Introduce Bench Press Value Here"  label="Bench Press" />
                                    <TextField
                                        required
                                        name="numberOfRepsBench"
                                        className={classes.field}
                                        hint="Introduce number of max reps here" label="Bench max reps" />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField required name="overheadPressMax" className={classes.field}
                                               hint="Introduce Overhead Press Value Here"  label="Overhead Press" />
                                    <TextField
                                        required
                                        name="numberOfRepsOverheadPress"
                                        className={classes.field}
                                        hint="Introduce number of max reps here" label="Overhead Press max reps" />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField required name="rowMax" className={classes.field}
                                               hint="Introduce Row Value Here"  label="Barbell Row" />
                                    <TextField
                                        required
                                        name="numberOfRepsRow"
                                        className={classes.field}
                                        hint="Introduce number of max reps here" label="Barbell Row max reps" />
                                </Grid>
                                <Grid item={true} xs={12} className={classes.field}>
                                    <Button variant="contained" label="Submit" type="submit">Submit</Button>
                                    <Button variant="contained" label="Save" onClick={saveToAccount}>Save</Button>
                                </Grid>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </form>
                <Results
                    benchWeight={benchMax}
                    squatWeight={squatMax}
                    overheadPressWeight={overheadPressMax}
                    deadliftWeight={deadliftMax}
                    rowWeight={rowMax}
                />
            </div>
        </Container>
    )
}