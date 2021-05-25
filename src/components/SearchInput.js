import { makeStyles} from '@material-ui/core';
import React, { useState } from 'react'

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
        fontSize:"1rem",
        fontFamily:"Poppins",
        borderRadius:"5px",
        borderColor:"#333333"
    }
}))
function SearchInput() {

    const classes=useStyles();

    const [name,setName]=useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();
    }

    const handleInput = (e) =>{
        setName(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <input
                
                value={name}
                className={classes.input}
                type="text"
                placeholder="Nombre"
                onChange={handleInput}
            />
        </form>
    )
}

export default SearchInput
