import { makeStyles } from '@material-ui/core';
import React, {useState } from 'react'
import Appbar from '../components/Appbar';
import Search from '../components/Search';
import Footer from '../components/Footer';

const useStyles=makeStyles((theme)=>({
    root:{
        position:"relative",
        minHeight:"100vh",
        background:`url(${process.env.PUBLIC_URL}/assets/images/bg.jpg)`,
        objectFit:"cover",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        "&::before":{
            content:"''",
            position:"absolute",
            top:"0",
            right:"0",
            bottom:"0",
            left:"0",
            backgroundColor: "rgba(0,0,0,0.6)"
        }
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
