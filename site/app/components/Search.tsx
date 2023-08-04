"use client";

export default function Search() {

  return(
    
    <div className="flex mt-3 mb-3 w-4/5 justify-center">
      <label htmlFor="search-id"></label>
      <input
        className="border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="search-id"
        type="text"
        placeholder="Search a Course by Name"
        
      />
    </div>
    
  )
}