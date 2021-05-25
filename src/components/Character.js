import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    card:{
        cursor:"pointer",
        borderRadius:"6px",
        boxShadow:"4px 5px #d9e5d6",
        transition:"all 0.5s ease-in-out",
        "&:hover":{
            transform:"scale(1.05)"
        }
    },
    container:{
        borderRadius:"6px",
        position:"relative",
        display:"flex",
        backgroundColor:"#1f2937",
    },
    image:{
        borderBottomLeftRadius:"6px",
        borderTopLeftRadius:"6px",
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
        width:"100%",
    },
    alive:{
        fontSize:"1.5rem",
        position:"absolute",
        bottom:"2px",
        right:"5px",
        fontFamily:"Shlop,Poppins",
        color:"lightgreen",
    },
    dead:{
        fontSize:"1.5rem",
        position:"absolute",
        bottom:"2px",
        right:"5px",
        fontFamily:"Shlop,Poppins",
        color:"#cb3234",
    }
}))
function Character({
    name,
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
                    {status !=="unknown" && <Typography className={classes.text}>
                        {status}
                    </Typography>}
                </div>
                {status==="Alive" && <div className={classes.alive}>Alive</div> }
                {status==="Dead" && <div className={classes.dead}>Dead</div> }
            </div>
        </div>
    )
}

export default Character
