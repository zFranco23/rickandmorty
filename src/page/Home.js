import { makeStyles } from '@material-ui/core';
import React, {useState } from 'react'
import Appbar from '../components/Appbar';
import Search from '../components/Search';
import Footer from '../components/Footer';

const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    }
}))
function Home() {

    const classes=useStyles();
    const [pagination,setPagination]=useState(1);
    const [dataFound,setDataFound]=useState([]);

    return (
        <div className={classes.root}>
            <Appbar />
            <Search dataFound={dataFound} setDataFound={setDataFound} setPagination ={setPagination} pagination={pagination}/>
            <Footer length={dataFound.length} setPagination={setPagination}/>
        </div>
    )
}

export default Home
