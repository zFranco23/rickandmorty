import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    card:{
        cursor:"pointer",
        borderRadius:"6px",
        boxShadow:"4px 5px #d9e5d6",
        transition:"0.3s ease-in-out",
        "&:hover":{
            transform:"scale(1.05)"
        }
    },
    container:{
        display:"flex",
        backgroundColor:"#1f2937",
    },
    image:{
        width:"45%",
    },
    text:{
        fontSize:"1rem",
        color:"#fff",
        fontFamily:"Shlop,Poppins",
    },
    textName:{
        fontSize:"1.5rem",
        fontFamily:"Shlop,Poppin",
        color:"#82bf45",
    },
    details:{
        padding:"1rem",
    }
}))
function Character({
    name,
    species,
    image,
    gender,
    origin,
    type,
    status
}) {

    const classes=useStyles();
    return (
        <div className={classes.card}>
            <div className={classes.container}>
                <img className={classes.image} src={image} alt={name}/>
                <div className={classes.details}>
                    <Typography className={classes.textName}>
                        {name}
                    </Typography>
                    <Typography className={classes.text}>
                        {gender}
                    </Typography>
                    <Typography className={classes.text}>
                        {origin.name}
                    </Typography>
                    <Typography className={classes.text}>
                        {type}
                    </Typography>
                    <Typography className={classes.text}>
                        {status}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Character
