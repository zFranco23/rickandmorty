
//Traer data
const fetchData= async (url) =>{
    const response= await fetch(url);
    const {name,id}= await response.json();
    
    return {name,id};
}

export const fetchEpisodesAPI = async (arrayEpisodes) => {
    let arrayData =[];
    for(let i=0;i<arrayEpisodes.length;i++){
        let val= await fetchData(arrayEpisodes[i]);
        arrayData.push(val);
    }
    return arrayData;
        
}