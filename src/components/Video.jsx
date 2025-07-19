import { Stack,Box } from "@mui/material" 
import {VideoCard,ChannelCard} from './'

const Video = ({videos}) => {
  console.log(videos)
  return (
    <Stack>
      {videos.map((item,idx)=>(
        <Box key={item.idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail = {item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Video