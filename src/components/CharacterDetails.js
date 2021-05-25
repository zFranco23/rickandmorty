import { Container, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Episodes from './Episodes';



const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:"3rem",
    },
    containerContent:{
        display:"flex",

        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }
    },
    image:{
        borderRadius:"50%",
    },
    name:{
        fontSize:"1.5rem",
        marginTop:"1rem",
        textAlign:"center",
        fontFamily:"Shlop",
        color:"#1f2937",
        fontWeight:"700",
    },
    episodes:{
        width:"100%",
        marginLeft:"3rem",
        borderLeft:"3.5px solid #333333",
        padding:"1rem",
        [theme.breakpoints.down("sm")]:{
            border:"none",
            marginLeft:"0",
            padding:0,
        }
    },
    containerImg:{
        marginTop:"1rem",
        paddingBottom:"1rem",
        marginBottom:"1rem",
        [theme.breakpoints.down("sm")]:{
            borderBottom:"5px solid #1f2937"
        }
    }
}))


function CharacterDetail({name,id}) {

    const classes=useStyles();

    const [image,setImage]=useState([]);
    const [episodes,setEpisodes]=useState([]);
    


    
    const getData = async () => {
        //Obtener datos del character
        const response=await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const {image,episode} = await response.json();
        setImage(image);
        setEpisodes(episode);
    }
    
    useEffect(()=>{
       getData();
    },[])

    return (
        <Container className={classes.root}>
            <div className={classes.containerContent}>
                    <div className={classes.containerImg}>
                        <img className={classes.image} src={image} alt={name}/>
                        <Typography className={classes.name}>{name}</Typography>
                    </div>
        
                    <div className={classes.episodes}>  
                        {episodes.length>0 && <Episodes episodes={episodes}/>}
                    </div>
            </div>
        </Container>
    )
}

export default CharacterDetail
