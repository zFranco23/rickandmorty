import { 
    makeStyles, 
    Toolbar,
    Typography,
} from '@material-ui/core';
import React from 'react'

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
    }
}))
function Appbar() {

    const classes=useStyles();
    return (
        <div className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>
                    Rick and Morty
                </Typography>
            </Toolbar>
        </div>
    )
}

export default Appbar
