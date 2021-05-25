import { makeStyles, TextField } from '@material-ui/core';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    input:{
        display:"flex",
        justifyContent:"center",
        fontFamily:"Poppins",
        marginBottom:"1rem",
    }
}))
function SearchInput() {

    const classes=useStyles();
    return (
        <div className={classes.input}>
            <TextField 
                label="Search"
                placeholder="Search"
                variant="outlined" 
            />
        </div>
    )
}

export default SearchInput
