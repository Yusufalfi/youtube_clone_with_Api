import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi';
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';


const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videoSuggest, setVideoSuggest] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        // fetch detail Video
        fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        })
        // fetch suggest video
        fetchApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then((data) => {
        //    console.log(data)
            setVideoSuggest(data.items);
        })
    }, [id])
    console.log(videoDetail);
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='grow md:basis-8/12 lg:basis-7/12 mt-3'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="h-full" width="100%" />
            <div className='p-4'>
                <h1 className='text-lg font-medium'>{videoDetail?.snippet.title}</h1>
                <p className='mb-4'>{videoDetail?.statistics.viewCount} Views</p>
                <hr />
                {/* <p>{videoDetail?.snippet.description.substring(0, 200)}</p> */}
                <p className='mt-4 mb-4'>{videoDetail?.snippet.description}</p>
                <hr />
            </div>
        </div>
        <div className='grid grid-cols-1 md:basis-4/12 lg:basis-3/12 md:p-3'>
            {videoSuggest?.map((video, i) => {
                return <VideoCard video={video} key={i}/>
            })}
        </div>
    </div>
  )
}

export default VideoDetails