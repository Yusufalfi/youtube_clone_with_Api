import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  } 

  return (
    <>
        <form className='relative' onSubmit={handleSubmit}>
            <input
             onChange={(e) => setInputSearch(e.target.value)} 
             value={inputSearch}
             type='text' 
             className='outline-none border text-sm p-2 rounded-full w-500 sm:w-80 w-50 '
             placeholder='ketik..' />
            <button type='submit'><MagnifyingGlassIcon className='text-black absolute h-6 right-3 top-2 bg-white ' /></button>
        </form>
    </>
  )
}

export default Search