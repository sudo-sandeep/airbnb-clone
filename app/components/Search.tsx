"use client";
import {BiSearch} from 'react-icons/bi'
import { useState } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-full border-[1px] md:w-auto py-2 shadow-sm hover:shadow-md rounded-full transition cursor-pointer">
        <div className="flex flex-row justify-between items-center">
            <div className="text-sm font-semibold px-6">Anywhere</div>
            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">Any Week</div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Add Guests</div>
                <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18}/>
                </div>
            </div>
        </div>
      {/* <input type="text" placeholder="Search here..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/> */}
    </div>
  );
};

export default Search;
