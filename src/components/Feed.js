import React, {useState, useEffect} from 'react'
import { fetchApi } from '../utils/fetchApi'
import Sidebar from './Sidebar'

const Feed = () => {

  const [selectCategory, setSelectCategory] = useState('Coding')
  
  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => console.log(data))
  }, [selectCategory])
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='py-2 flex sm:flex-col overflow-auto  sm:basis-3/12'>
        <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </div>
      <div className='bg-gray-40 sm:basis-3/12'>Videos</div>
    </div>
  )
}

export default Feed