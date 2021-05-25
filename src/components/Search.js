import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { useFetchData } from '../hooks/useFetchData'

const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column",
    }
}))

function Search({pagination}) {
    const classes=useStyles();
    /* const [data,setData]=useState([]);

    const {data : characters,loading} = useFetchData();

    useEffect(()=>{
        setData(characters);
    },[]) */

    return (
        <div className={classes.root}>
            <SearchInput />
            <SearchResults /* data pagination={pagination} *//>
        </div>
    )
}

export default Search
