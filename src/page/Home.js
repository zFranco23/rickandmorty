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


    return (
        <div className={classes.root}>
            <Appbar />
            <Search pagination={pagination}/>
            <Footer setPagination={setPagination}/>
        </div>
    )
}

export default Home
