import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import Character from './Character';

import Loader from "react-loader-spinner";


const useStyles=makeStyles((theme)=>({
    container:{
        maxWidth:"100%",
    }
}))
function SearchResults({pagination}) {
    
    
    const {data : characters,loading} = useFetchData();
    const classes=useStyles();

    return (
        <Container className={classes.container}>
        <Grid container spacing={3}>
                {loading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> }
                {characters?.length>0 && characters.map((character,i)=>(
                    <Grid key={i} item xs={12} sm={6} md={4}>
                        <Character
                            key={character.id}
                            {...character}
                        />
                    </Grid>
                ))}

            </Grid> 
            {/* CAMBIO {pagination} */}
        </Container>
    )
}

export default SearchResults
