
//Traer data
export const fetchDataAPI = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const {results}= await res.json();

    return results;
}