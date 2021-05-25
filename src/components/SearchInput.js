import { makeStyles} from '@material-ui/core';
import React from 'react'

import Fade from 'react-reveal/Fade';
const useStyles=makeStyles((theme)=>({
    container:{
        display:"flex",
        justifyContent:"center",
        fontFamily:"Poppins",
        [theme.breakpoints.down("sm")]:{
            marginTop:"1rem",
            marginBottom:"1rem",
        },
        marginBottom:"1rem",
    },
    input:{
        padding:"0.5rem",
        fontSize:"1.8rem",
        fontFamily:"Shlop",
        borderRadius:"5px",
        borderColor:"#f2f2f2",
        color:"#F2F2F2",
        background:"none",
    }
}))
function SearchInput({setPagination,handleSearch,search,setSearch,setSearching}) {

    const classes=useStyles();

    const handleSubmit= (e)=>{
        e.preventDefault();
        setPagination(1);
        setSearching(true);
        handleSearch(search);
    }

    const handleInput = (e) =>{
        setSearch(e.target.value);
        if(e.target.value ===""){
            setSearching(false);
        }
        
    }
    return (
        <Fade>
        <form onSubmit={handleSubmit} className={classes.container}>
            
                <input
                    value={search}
                    className={classes.input}
                    type="text"
                    placeholder="Name"
                    onChange={handleInput}
                />

            
        </form>
        </Fade>
    )
}

export default SearchInput
