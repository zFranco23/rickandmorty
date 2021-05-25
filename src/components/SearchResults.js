import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import Character from './Character';

import Shake from 'react-reveal/Shake';

const useStyles=makeStyles((theme)=>({
    container:{
        width:"90%",
        [theme.breakpoints.down("xs")]:{
            width:"100%",
        }
    },
    center:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    link:{
        textDecoration:"none",
    },
    text:{
        marginTop:"1rem",
        color:"red",
        position:"relative",
        fontSize:"2rem",
        fontFamily:"Shlop"
    }
}))
function SearchResults({characters}) {
    
    
    /* const {data : characters,loading} = useFetchData(); */
    const classes=useStyles();

    return (
        <Container className={classes.container}>
        <Grid container spacing={3} className={classes.center}>
                {characters?.length>0 ? characters.map((character,i)=>(
                    <Grid key={i} item xs={12} sm={6} md={4}>
                            <Link className={classes.link} to={`/${character.name}/${character.id}`}>
                                <Character
                                    key={character.id}
                                    {...character}
                                />
                            </Link>
                        
                    </Grid>
                ))
                :
                <Shake>
                    <Typography className={classes.text} >No results</Typography>

                </Shake>
                
                }


            </Grid> 
            {/* CAMBIO {pagination} */}
        </Container>
    )
}

export default SearchResults
