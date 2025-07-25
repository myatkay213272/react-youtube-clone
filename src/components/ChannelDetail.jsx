import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Video,ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([])
  const {id} = useParams()

  console.log(channelDetail,videos)

  useEffect(()=>{
    const fetchResults = async()=>{
        try{
            const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`)
            if(channelData?.items){
                setChannelDetail(channelData.items[0])
            }
            const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            if(videoData?.items){
                setVideos(videoData.items)
            }
        }catch(error){
            console.error("❌ Error in ChannelDetail:", error.message);
        }
    }
    fetchResults()
  },[id])

  return (
     <Box minHeight="95vh" >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg,rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
          zIndex : 10,
          height : '300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/> 
          <Video videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail