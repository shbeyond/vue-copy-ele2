import axios from 'axios'
// console.log()
export const HOST = 'http://localhost:8000/' 

export const otherData = axios.get(HOST+'v1/cities?type=hot').then(function(res){
    return res.data;
});

export const searchplace = (cityid,inputValue) => axios.get(HOST+'v1/pois?type=search&city_id='+cityid+'&keyword='+inputValue);

export const cityGuess =()=>axios.get(HOST+'v1/cities',{
    type:'guess'
})
export const msiteAdress = geohash => fetch(HOST+'v2/pois/' + geohash);