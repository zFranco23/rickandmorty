
import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { fetchEpisodesAPI } from '../helpers/fetchEpisodesAPI';

const useStyles=makeStyles((theme)=>({
    episode:{
        fontSize:"0.9rem",
        display:"block",
        color:"#F2F2F2",
        fontFamily:"Shlop",
    },
    containerTitle:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    }
    ,
    btnTitle:{
        backgroundColor:"#1f2937",
        padding:"0.5rem 1rem",
        borderRadius:"12px",
        cursor:"pointer"
    }
    ,
    text:{
        fontFamily:"Shlop",
        color:"#fff",
        margin:0,
    },
    title:{
        color:"#82bf45",
        fontFamily:"Shlop,Poppins",
        fontSize:"2rem",
        fontWeight:"600",
        [theme.breakpoints.down("sm")]:{
            textAlign:"center",
        }
    },
    center:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    grid:{
        padding:"1rem",
    },
    link:{
        textDecoration:"none",
    }
}))
function Episodes({episodes}) {

    const [temp,setTemp]=useState([]);
    const classes=useStyles();


    const reduceArray= (ini,fin) =>{
        return temp.slice(ini,fin);
    }


    useEffect(()=>{
        fetchEpisodesAPI(episodes)
            .then(val => setTemp(val))
    },[episodes])
    return (
        <div>
            {temp.length>0 ?
                <>
                <div className={classes.containerTitle}>
                    <Typography className={classes.title}>
                        Episodes
                    </Typography>

                    <Link to="/" className={classes.link}>
                        <div className={classes.btnTitle}>
                                <Typography className={classes.text}>
                                    Back  
                                </Typography>
                        </div>
                    </Link>

                </div>
                
                <div className={classes.episodes}>
                    <Grid container>
                        
                        {/* Dividir los episodios en 4 partes */}
                        {reduceArray(0,temp.length/4).length>0 && <Grid  className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(0,temp.length/4).map((episode,i)=>(
                                    <Typography key={i} className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`} 
                                    </Typography>     
                            ))}
                        </Grid>}
                        {reduceArray(temp.length/4,temp.length/2).length>0 && <Grid  className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(temp.length/4,temp.length/2).map((episode,i)=>(
                                    <Typography key={i} className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`}
                                    </Typography>
                            ))}
                        </Grid>}
                        
                        {reduceArray(temp.length/2,3*temp.length/4).length>0 && <Grid className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(temp.length/2,3*temp.length/4).map((episode,i)=>(
                                    <Typography key={i} className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`}
                                    </Typography>
                            ))}
                        </Grid>}
                        {reduceArray(3*temp.length/4,temp.length).length >0 && <Grid className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(3*temp.length/4,temp.length).map((episode,i)=>(
                                    <Typography key={i}  className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`}
                                    </Typography>
                            ))}
                        </Grid>
                        
                        }
                        
                    </Grid>
                </div>
                </>
                :
                <div className={classes.center}>
                    
                </div>
            }

        </div>
    )
}

export default Episodes
