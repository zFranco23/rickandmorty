import { useEffect, useState } from "react"
import {fetchDataAPI} from '../helpers/fetchDataAPI'


export const useFetchData = () => {
    const [state,setState]=useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        fetchDataAPI()
            .then(res => setState({
                data: res,
                loading: false,
            }));
    },[])

    return state;
}
