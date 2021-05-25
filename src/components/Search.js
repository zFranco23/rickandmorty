import { makeStyles } from '@material-ui/core';
import React  from 'react'
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { useFetchData } from '../hooks/useFetchData'

import Loader from "react-loader-spinner";

const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:"1rem",
    }
}))

function Search({pagination}) {
    const classes=useStyles();

    const charactersPerPage=6;

    let {data : characters,loading} = useFetchData();

    const indexOfLastCharacter = pagination*charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter,indexOfLastCharacter);

    return (
        <div className={classes.root}>
            {loading ? <Loader type="ThreeDots" color="#3333333" height={80} width={80} /> :
                (
                    <>
                        <SearchInput />
                        <SearchResults characters={currentCharacters}/>
                    </>
                )
            }
            
        </div>
    )
}

export default Search
