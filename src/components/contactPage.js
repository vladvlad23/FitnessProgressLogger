import React from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "../images/githubIcon.svg"
import IconButton from "@material-ui/core/IconButton";
import {Icon} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    title: {
        marginTop: theme.spacing(8),
        marginBot: theme.spacing(8),
    }
}));

export default function ContactPage(){
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.title} variant="h4">Contact me using one of the following</Typography>
            <div>
                <a style={{textDecoration:"none"}} target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ungureanu.vlad1@gmail.com&body=my-text">
                    <IconButton aria-label={"email"} size="medium">
                        Email Me!
                        <EmailIcon />
                    </IconButton>
                </a>
            </div>
            <div>
                <a style={{textDecoration:"none"}} target="_blank" href="https://github.com/vladvlad23">
                    <IconButton aria-label={"github"} size="medium">
                        See my other projects!
                        <img src={GithubIcon}/>
                    </IconButton>
                </a>
            </div>
        </div>
    )
}