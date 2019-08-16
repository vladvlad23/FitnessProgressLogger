import React from 'react';
import './App.css';
import HomePage from './components/homePage'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import LogInPage from "./components/logInPage";
import SignUpPage from "./components/signUpPage";
import DonationPage from "./components/donationPage";
import {makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from 'firebase'
import FiveThreeOne from "./components/programs/FiveThreeOne";
import ContactPage from "./components/contactPage"
import Stronglifts from "./components/programs/Stronglifts"

var firebaseConfig = {
    apiKey: "AIzaSyDWoxWpt28tk0DwkTEVyMy4RlJANOZXpoc",
    authDomain: "fitness-program-logger.firebaseapp.com",
    databaseURL: "https://fitness-program-logger.firebaseio.com",
    projectId: "fitness-program-logger",
    storageBucket: "",
    messagingSenderId: "919970343116",
    appId: "1:919970343116:web:0b3c2cddab045512"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
                Material-UI
        </Typography>
    );
}




const useStyles = makeStyles(theme => ({
    toolbarTitle: {
        fontSize:20,
        fontFamily: ['Tahoma']
    },
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
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


function receiveDataForSignUp(email,password){
    if(email && password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
    }
}

function receiveDataForLogIn(email,password){
    if(email && password){
        firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
            console.log(error.code);
            console.log(error.message);
        })
    }

}

function App() {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                            <Button className={classes.toolbarTitle} component={Link} to="/" color="inherit" size="small">
                                PROGRESS LOGGER
                            </Button>
                            <div className={classes.toolbarRightButtons}>
                                <Button component={Link} to="/logIn/" className={classes.toolbarRightButtons} color="inherit" size="small">
                                    Log In
                                </Button>
                                <Button component={Link} to="/signUp/" className={classes.toolbarRightButtons} color="inherit" size="small">
                                    Sign-Up
                                </Button>
                                <Button component={Link} to="/donationPage/" className={classes.toolbarRightButtons} color="inherit" size="small">
                                    Donate
                                </Button>
                                <Button component={Link} to="/contactPage/" className={classes.toolbarRightButtons} color="inherit" size="small">
                                    Contact Me
                                </Button>

                            </div>
                    </Toolbar>
                </AppBar>
                <main>
                    <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/logIn/" render={ (props) => <LogInPage dataCallback={receiveDataForLogIn} /> }/>
                            <Route path="/signUp/" render={ (props) => <SignUpPage dataCallback={receiveDataForSignUp} /> } />
                            <Route path="/donationPage/" component={DonationPage}/>
                            <Route path="/531program/" component={FiveThreeOne}/>
                            <Route path="/stronglifts/" component={Stronglifts} />
                            <Route path="/contactPage/" component={ContactPage} />
                    </Switch>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                    <MadeWithLove />
                </footer>
                {/* End footer */}
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;