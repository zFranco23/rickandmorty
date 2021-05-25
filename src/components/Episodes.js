
import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import { fetchEpisodesAPI } from '../helpers/fetchEpisodesAPI';

const useStyles=makeStyles((theme)=>({
    episode:{
        fontSize:"0.9rem",
        display:"inline-block",
        color:"#333333",
        fontFamily:"Shlop",
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
                <Typography className={classes.title}>
                    Episodes
                </Typography> 
                <div className={classes.episodes}>
                    <Grid container>
                        
                        {/* Dividir los episodios en 4 partes */}
                        {reduceArray(0,temp.length/4).length>0 && <Grid  className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(0,temp.length/4).map((episode,i)=>(
                                    <Typography className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`} 
                                    </Typography>     
                            ))}
                        </Grid>}
                        {reduceArray(temp.length/4,temp.length/2).length>0 && <Grid  className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(temp.length/4,temp.length/2).map((episode,i)=>(
                                    <Typography className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`}
                                    </Typography>
                            ))}
                        </Grid>}
                        
                        {reduceArray(temp.length/2,3*temp.length/4).length>0 && <Grid className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(temp.length/2,3*temp.length/4).map((episode,i)=>(
                                    <Typography className={classes.episode} gutterBottom>
                                    EP {`${temp[temp.indexOf(episode)].id} | ${temp[temp.indexOf(episode)].name}`}
                                    </Typography>
                            ))}
                        </Grid>}
                        {reduceArray(3*temp.length/4,temp.length).length >0 && <Grid className={classes.grid} item xs={6} sm={6} md={3}>
                            {reduceArray(3*temp.length/4,temp.length).map((episode,i)=>(
                                    <Typography className={classes.episode} gutterBottom>
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
                    <Loader type="ThreeDots" color="#1f2937" height={80} width={80} />
                </div>
            }

        </div>
    )
}

export default Episodes
