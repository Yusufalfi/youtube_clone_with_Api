import React, {useState, useEffect} from 'react'
import { fetchApi } from '../utils/fetchApi'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {

  const [selectCategory, setSelectCategory] = useState('Coding')
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => 
      setVideos(data.items)
    )
  }, [selectCategory])
  // console.log(videos);
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='py-2 flex sm:flex-col overflow-auto  sm:basis-2/12'>
        <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} setVideos={setVideos} />
      </div>
      <div className=' sm:basis-10/12'>
        <Videos dataV={videos} />
      </div>
    </div>
  )
}

export default Feed