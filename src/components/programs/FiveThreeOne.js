import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {CssBaseline} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Results from "./FiveThreeOneResults"
const useStyles = makeStyles(theme=>({
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
    radioButtonGroups:{
        marginLeft: theme.spacing(2),
    },

    horizontalSeparator: {
        borderRadius: "10px",
        marginBottom: theme.spacing(8),
        marginTop: theme.spacing(8),
    },
    textField: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    paperGrid: {
        marginLeft: theme.spacing(8),
    },
}));

function saveToAccount(){
    alert("works as well");
}

export default function FiveThreeOne(){
    const classes = useStyles();

    const [benchOneRepMax,setBenchOneRepMax] = useState(0);
    const [squatOneRepMax,setSquatOneRepMax] = useState(0);
    const [overheadPressOneRepMax,setOverheadPressOneRepMax] = useState(0);
    const [deadliftOneRepMax,setDeadliftOneRepMax] = useState(0);

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        if(isNaN(parseInt(data.get('squatRepMax')))||
            isNaN(parseInt(data.get('benchRepMax'))) ||
            isNaN(parseInt(data.get('deadliftRepMax'))) ||
            isNaN(parseInt(data.get('overheadPressRepMax'))))
                alert("Fields must be valid numbers!");

        if(data.get('repMaxType') == 'actualRepMax'){
            setSquatOneRepMax(data.get('squatRepMax') * 90/100);
            setBenchOneRepMax(data.get('benchRepMax') * 90/100);
            setDeadliftOneRepMax(data.get('deadliftRepMax') * 90/100);
            setOverheadPressOneRepMax(data.get('overheadPressRepMax') * 90/100);
        }
        else{
            setSquatOneRepMax(data.get('squatRepMax'));
            setBenchOneRepMax(data.get('benchRepMax'));
            setDeadliftOneRepMax(data.get('deadliftRepMax'));
            setOverheadPressOneRepMax(data.get('overheadPressRepMax'));
        }
    }


    return (
        <Container component="main" >
            <CssBaseline />
            <div>
                <form onSubmit={handleSubmit} className={classes.form} noValidate={true}>
                    <Grid container spacing={2}>
                        <Typography className={classes.sectionTitle} component="h2" variant="h5">
                                Rep Maxes Types
                        </Typography>
                        <Grid item={true} xs={12}>
                            <RadioGroup className={classes.radioButtonGroups}
                                        name="repMaxType"
                                aria-label="repMaxTypes">
                                <FormControlLabel
                                    value="actualRepMax"
                                    control={<Radio color="primary" />}
                                    label="Actual 1RM"
                                    labelPlacement="end"
                                    />
                                <FormControlLabel
                                    value="wendlerRepMax"
                                    control={<Radio color="primary" />}
                                    label="Wendler 1RM"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                        <Typography className={classes.sectionTitle} component="h2" variant="h5">
                            Rep Maxes
                        </Typography>
                        <Grid item={true} xs={12}>
                            <RadioGroup className={classes.radioButtonGroups}>
                                <FormControlLabel
                                    value="massPickerImperial"
                                    control={<Radio color="primary" />}
                                    label="Imperial(lbs)"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="massPickerMetric"
                                    control={<Radio color="primary" />}
                                    label="Metric(kg)"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                            <FormGroup className={classes.radioButtonGroups}
                                aria-label="repMaxes">
                                <TextField
                                    required
                                    name="squatRepMax"
                                    className={classes.textField}
                                    hint="Introduce Squat Value Here" label="Squat" />
                                <TextField required name="deadliftRepMax" className={classes.textField}
                                           hint="Introduce Deadlift Value Here"  label="Deadlift"/>
                                <TextField required name="benchRepMax" className={classes.textField}
                                           hint="Introduce Bench Press Value Here"  label="Bench Press" />
                                <TextField required name="overheadPressRepMax" className={classes.textField}
                                           hint="Introduce Overhead Press Value Here"  label="Overhead Press" />
                            </FormGroup>
                        </Grid>
                        <Typography className={classes.sectionTitle} component="h2" variant="h5">
                            Template
                        </Typography>
                        <Grid item={true} xs={12}>
                            <RadioGroup className={classes.radioButtonGroups}>
                                <FormControlLabel
                                    value="simple"
                                    control={<Radio color="primary" />}
                                    label="Simple(just give me the math)"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="boringButBig"
                                    control={<Radio color="primary" />}
                                    label="Boring But Big"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button className={classes.sectionTitle} variant="contained" label="Submit" type="submit" >
                                Submit
                            </Button>
                            <Button className={classes.sectionTitle} variant="contained" label="Save to account" onClick={saveToAccount}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Results
                    benchOneRepMax={benchOneRepMax}
                    squatOneRepMax={squatOneRepMax}
                    deadliftOneRepMax={deadliftOneRepMax}
                    overheadPressOneRepMax={overheadPressOneRepMax}
                />
            </div>
        </Container>
    )
}