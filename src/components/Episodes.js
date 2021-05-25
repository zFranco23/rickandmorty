
import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { fetchEpisodesAPI } from '../helpers/fetchEpisodesAPI';

const useStyles=makeStyles((theme)=>({
    episode:{
        fontSize:"0.8rem",
        display:"inline-block",
        fontFamily:"Poppins",
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
            .then(val =>setTemp(val))
    },[])
    return (
        <div>
            <div className={classes.episodes}>
                <Grid container>
                    
                    {/* Dividir los episodios en 4 partes */}
                    {reduceArray(0,temp.length/4).length>0 && <Grid item xs={6} sm={6} md={3}>
                        {reduceArray(0,temp.length/4).map((episode,i)=>(
                            <li key={i}>
                                <Typography className={classes.episode}>
                                    {`${temp[temp.indexOf(episode)]}`} 
                                </Typography>
                            </li>        
                        ))}
                    </Grid>}
                    {reduceArray(temp.length/4,temp.length/2).length>0 && <Grid item xs={6} sm={6} md={3}>
                        {reduceArray(temp.length/4,temp.length/2).map((episode,i)=>(
                            <li key={i}>
                                <Typography className={classes.episode}>
                                {`${temp[temp.indexOf(episode)]}`}
                                </Typography>
                            </li>
                        ))}
                    </Grid>}
                    
                    {reduceArray(temp.length/2,3*temp.length/4).length>0 && <Grid item xs={6} sm={6} md={3}>
                        {reduceArray(temp.length/2,3*temp.length/4).map((episode,i)=>(
                            <li key={i}>
                                <Typography className={classes.episode}>
                                {`${temp[temp.indexOf(episode)]}`}
                                </Typography>
                            </li>
                        ))}
                    </Grid>}
                    {reduceArray(3*temp.length/4,temp.length).length >0 && <Grid item xs={6} sm={6} md={3}>
                        {reduceArray(3*temp.length/4,temp.length).map((episode,i)=>(
                            <li key={i}>
                                <Typography className={classes.episode}>
                                {`${temp[temp.indexOf(episode)]}`}
                                </Typography>
                            </li>
                        ))}
                    </Grid>
                    
                    }
                    
                </Grid>
            </div>

        </div>
    )
}

export default Episodes
