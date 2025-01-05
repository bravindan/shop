'use client'
import React from 'react'
import { useRouter } from 'next/router';

export default function SearchBar() {
    // const router = useRouter(); 
    const SearchItem = (event) => {
        event.preventDefault();
        // console.log(event.target.searchTerm.value);
        const formData = new FormData(event.currentTarget);
        const searchTerm = formData.get('searchTerm');
        console.log(searchTerm);

        // if (searchTerm) {
        //     router.push(`/search?name=${searchTerm}`);
        //     }
    }
  return (
    <form className='flex flex-1 justify-between items-center gap-4 p-2 rounded-md bg-gray-100' onSubmit={SearchItem}>
        <input type="text" name='searchTerm' placeholder="Search" className='bg-transparent outline-none'/>
        <button type="submit" className=''>Search</button>
    </form>
  )
}
