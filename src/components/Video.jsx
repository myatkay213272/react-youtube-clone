import { Stack,Box } from "@mui/material" 
// import {VideoCard,ChannelCard} from './'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Video