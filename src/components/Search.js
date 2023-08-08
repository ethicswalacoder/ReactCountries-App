import React, { useState } from "react";

const Search = ({ onSearch, onSelect }) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  const handleSelect = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <>
      <div className="mb-3 w-full sticky  top-16 h-16 backdrop-blur-sm bg-white/50">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch  ">
          <div className="float-left w-3/5 md:w-4/5">
            <span
              className=" float-left input-group-text flex items-center whitespace-nowrap rounded ml-5 px-2  py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5  mt-3"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <form onSubmit={submitHandler} className="  float-left">
              <input
                type="text"
                id="search-navbar"
                className="relative mt-3 block  w-40  md:w-80 border-slate-400 
      min-w-0 flex-auto rounded border border-solid bg-blue-300
       bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]
       text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary
        focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none placeholder:text-white"
                placeholder="Country Name Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          {/* //filter section--------------------- */}
          <div className="mt-3  float-right w-1/5  flex end-0">
            <select
              onChange={handleSelect}
              className=" w-52  h-9 border-slate-400 border-2 rounded"
            >
              <option>Filter By Region</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
