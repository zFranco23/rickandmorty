import { useEffect, useState } from "react"
import {fetchDataAPI} from '../helpers/fetchDataAPI'


export const useFetchData = () => {
    const [state,setState]=useState({
        data: [],
        names: [],
        loading: true
    });

    useEffect(()=>{
        fetchDataAPI()
            .then(res => setState({
                data: res,
                names: res.map(el => el.name),
                loading: false,
            }));
    },[])

    return state;
}
