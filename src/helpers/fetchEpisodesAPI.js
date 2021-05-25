
//Traer data
const fetchData= async (url) =>{
    const response= await fetch(url);
    const {name}= await response.json();
    
    return name;
}

export const fetchEpisodesAPI = async (arrayEpisodes) => {
    let arrayData =[];
    for(let i=0;i<arrayEpisodes.length;i++){
        let val= await fetchData(arrayEpisodes[i]);
        arrayData.push(val);
    }

    console.log(arrayData)
    return arrayData;
        
}