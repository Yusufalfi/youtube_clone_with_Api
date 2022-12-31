import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Search = () => {
  return (
    <>
        <form className='relative'>
            <input type='text' className='outline-none border text-sm p-2 rounded-full w-500 sm:w-80 w-50 ' placeholder='ketik..' />
            <button type='submit'><MagnifyingGlassIcon className='text-black absolute h-6 right-3 top-2 bg-white ' /></button>
        </form>
    </>
  )
}

export default Search