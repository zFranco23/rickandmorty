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
                data: [res[0],res[1],res[2],res[3],res[4],res[5]],
                loading: false,
            }));
    },[])

    return state;
}
