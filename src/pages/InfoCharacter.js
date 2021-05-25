import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router'

import Appbar from '../components/Appbar';
import CharacterDetails from '../components/CharacterDetails';


const useStyles=makeStyles((theme)=>({
    root:{
        position:"relative",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        background:`url(${process.env.PUBLIC_URL}/assets/images/bg2.jpg)`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        "&::before":{
            content:"''",
            position:"absolute",
            top:"0",
            right:"0",
            bottom:"0",
            left:"0",
            backgroundColor: "rgba(0,0,0,0.6)"
        }
    }
}))

function InfoCharacter() {
    const classes=useStyles();
    const {name,id}= useParams();
    return (
        <div className={classes.root}>
            <Appbar />
            <CharacterDetails id={id} name={name}/>
        </div>
    )
}

export default InfoCharacter
