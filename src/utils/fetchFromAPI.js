import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3'


const API_KEY='AIzaSyB3nuhpX7NxswoIVXokr-MBDZsILVx3SCw'

export const fetchFromAPI = async(url)=>{
  try{
    const {data} = await axios.get(`${BASE_URL}/${url}?&key=${API_KEY}`)

  return data
}catch(error){
   console.error("❌ fetchFromAPI error:", error.message);
    return null; 
}
}

