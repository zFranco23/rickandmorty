import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router'

import Appbar from '../components/Appbar';
import CharacterDetails from '../components/CharacterDetails';


const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
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
