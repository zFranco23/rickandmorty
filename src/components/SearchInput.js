import { makeStyles} from '@material-ui/core';
import React from 'react'

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
        <form onSubmit={handleSubmit} className={classes.container}>
            <input
                
                value={search}
                className={classes.input}
                type="text"
                placeholder="Nombre"
                onChange={handleInput}
            />
        </form>
    )
}

export default SearchInput
