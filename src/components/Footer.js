import { makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles=makeStyles((theme)=>({
    footer:{
        padding:"1rem 4rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:"wrap",
        [theme.breakpoints.down("xs")]:{
            flexDirection:"column",
        }
    },
    btn:{
        cursor:"pointer",
        fontFamily:"Poppins",
        padding:"0.5rem 1.5rem",
        backgroundColor:"#f3ca4c",
        borderRadius:"24px",
        transition:"0.3s ease-in-out",
        "&:hover":{
            transform:"translateY(-1px)",
            backgroundColor:"#ffc600",
        },
        [theme.breakpoints.down("xs")]:{
            marginTop:"1rem",
        }
    }
}))
function Footer({setPagination}) {
    
    const classes=useStyles();

    const handleBack = () =>{
        setPagination(pag => pag===1 ? setPagination(4) : setPagination(pag-1))
    }

    const handleForward= ()=>{
        setPagination(pag => pag===4 ? setPagination(1) : setPagination(pag+1))
    }


    return (
        <div className={classes.footer}>
            <div className={classes.btn} onClick={handleBack}>
                Anterior
            </div>
            <div className={classes.btn} onClick={handleForward}>
                Siguiente
            </div>
        </div>
    )
}

export default Footer