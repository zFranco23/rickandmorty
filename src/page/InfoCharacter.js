import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router'
import Appbar from '../components/Appbar';
import Footer from '../components/Footer';


const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    }
}))

function InfoCharacter() {
    const classes=useStyles();
    const {name}= useParams();
    return (
        <div className={classes.root}>
            <Appbar />
            <Footer />
        </div>
    )
}

export default InfoCharacter
