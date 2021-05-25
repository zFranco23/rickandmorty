import { 
    makeStyles, 
    Toolbar,
    Typography,
} from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    appbar:{
        margin:0,
        background:"#1f2937"
    },
    toolbar:{
        margin:"0.5rem 0",
        [theme.breakpoints.down("xs")]:{
            justifyContent:"center",
        }
    },
    title:{
        fontFamily:"Shlop,sans-serif",
        color:"#82bf45",
        fontSize:"1.5rem",
        [theme.breakpoints.down("xs")]:{
            fontSize:"2rem",
        }
    },
    link:{
        textDecoration:"none",
    }
}))
function Appbar() {

    const classes=useStyles();
    return (
        <div className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Link className={classes.link}  to="/">
                    <Typography className={classes.title}>
                        Rick and Morty
                    </Typography>
                </Link>
            </Toolbar>
        </div>
    )
}

export default Appbar
