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
import FiveThreeOne from "./components/programs/FiveThreeOne";
import ContactPage from "./components/contactPage"
import Stronglifts from "./components/programs/Stronglifts"

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

var firebaseConfig = {
    apiKey: "", //REMOVED KEY FOR SECURITY
    authDomain: "fitness-program-logger.firebaseapp.com",
    databaseURL: "https://fitness-program-logger.firebaseio.com",
    projectId: "fitness-program-logger",
    storageBucket: "fitness-program-logger.appspot.com",
    messagingSenderId: "",
    appId: "" //Removed for security
};

var userId=null;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userData = null


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
        console.log("Received data for sign up");

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
    }

}

function receiveDataForLogIn(email,password){
    if(email && password) {
        console.log("Data received for log in " + email + " " + password );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(user){
                alert("Logged in sucesfully");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                console.log("Ya ba da ba doo")
            });
    }

}

function logOutUser(){
    firebase.auth().signOut();
    userId=null;
    alert("Logged out sucessfuly");
}



function updateUser() {

    return firebase.auth().onAuthStateChanged(function (user) {
        if (user) { //user signed in
            userId = user.uid;
            console.log("User signed in" + userId);
            firebase.database().ref('users/' + userId).once("value").then(function(snapshot) {
                console.log(snapshot.val());
            }, function(errorObject){
                console.log("read failed" + errorObject.code);
            });
            //todo add userData here
        } else {
            console.log("User not signed in");
        }
    });
}

function App() {
    const classes = useStyles();

    var listener = updateUser();

    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
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
                            <Route path="/logIn/" render={ (props) => <LogInPage logOutUser={logOutUser} userId={userId} dataCallback={receiveDataForLogIn} /> }/>
                            <Route path="/signUp/" render={ (props) => <SignUpPage logOutUser={logOutUser} userId={userId} dataCallback={receiveDataForSignUp} /> } />
                            <Route path="/donationPage/" component={DonationPage}/>
                            <Route path="/531program/" render={(props) => <FiveThreeOne userData={userData} userId={userId} /> } />
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