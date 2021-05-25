import { makeStyles } from '@material-ui/core';
import React, { useState }  from 'react'
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

function Search({dataFound,setDataFound,setPagination , pagination}) {
    const classes=useStyles();

    const [search,setSearch]=useState("");
    const [searching,setSearching]=useState(false);

    const {data : characters,loading} = useFetchData();

    //Pagination    
    const charactersPerPage=6;
    const indexOfLastCharacter = pagination*charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter,indexOfLastCharacter);

    const handleSearch = (str)=>{
        //Control buscador
        let arrResults=[];
        characters.forEach((character)=>{
            if(character.name.toLowerCase().includes(str.toLowerCase())){
                arrResults.push(character);
            }
        });
        setDataFound(arrResults);
    }

    return (
        <div className={classes.root}>
            {loading ? <Loader type="ThreeDots" color="#3333333" height={80} width={80} /> :
                (
                    <>
                        <SearchInput setPagination={setPagination} handleSearch={handleSearch} setSearching={setSearching} search={search} setSearch={setSearch}/>
                        {!searching && <SearchResults characters={currentCharacters}/>}
                        {searching && <SearchResults characters={dataFound.slice(indexOfFirstCharacter,indexOfLastCharacter)}/>}
                    </>
                )
            }
            
        </div>
    )
}

export default Search
