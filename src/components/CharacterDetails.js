import { Container, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Episodes from './Episodes';


import Fade from 'react-reveal/Fade'
import Loader from 'react-loader-spinner';

const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:"3rem",
        overflow:"hidden",
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
        color:"#f2f2f2",
    },
    episodes:{
        width:"100%",
        marginLeft:"3rem",
        borderLeft:"3.5px solid #fff",
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
    },
    alive:{
        textAlign:"center",
        fontSize:"1.5rem",
        fontFamily:"Shlop,Poppins",
        color:"lightgreen",
    },
    dead:{
        textAlign:"center",
        fontSize:"1.5rem",
        fontFamily:"Shlop,Poppins",
        color:"#cb3234",
    },
}))


function CharacterDetail({name,id}) {

    const classes=useStyles();

    const [image,setImage]=useState([]);
    const [episodes,setEpisodes]=useState([]);
    const [status,setStatus]=useState([]);
    


    
    const getData = async () => {
        //Obtener datos del character
        const response=await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const {image,episode,status} = await response.json();
        setImage(image);
        setEpisodes(episode);
        setStatus(status);
    }
    
    useEffect(()=>{
       getData();
    },[])

    return (
        <Container className={classes.root}>
            <div className={classes.containerContent}>
                    <Fade left>
                        <div className={classes.containerImg}>
                            {image.length>0 ? 
                                <div>
                                    <img className={classes.image} src={image} alt={name}/>
                                    <div className={classes.name}>{name}</div>
                                    {status==="Alive" && <div className={classes.alive}>Alive</div> }
                                    {status==="Dead" && <div  className={classes.dead}>Dead</div > }
                                </div>
                            :
                            <Loader type="Circles" color="#333333" height={80} width={80}/>
                            }
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={classes.episodes}>  
                            <Episodes episodes={episodes}/>
                        </div>
                    </Fade> 
            </div>
        </Container>
    )
}

export default CharacterDetail
