import React, { useState, useEffect } from "react";
import { apiURL } from "./util/api";
import Search from "./Search";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState('');

  //get all countries
  const getAllCountries = async() => {
    try {
      const res = await fetch(`${apiURL}/all`)
      if (!res.ok){
        throw new Error("Some thing went Wrong!");
      }else {
        const data = await res.json()
        setCountries(data);
        // console.log(data);
        setIsloading(false);
      }
      
    } catch (err) {
      console.log(err.message);
      
    }
  }

  useEffect(()=> {
    getAllCountries();

  }, []);


  const getCountryByName = async(countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

    if(!res.ok){
      throw new Error("Not found Any Country in this Name");
    }else {
      const data = await res.json();
      setCountries(data);
      setIsloading(false);
    }
    } catch (err) {
      console.log(err.message);
    }
    
  }

  const getCountryByRegion = async (countryRegion) => {
    try {
      const res = await fetch(`${apiURL}/region/${countryRegion}`);
      if(!res.ok) {
        throw new Error("Not found any Country in this Region.");
      }else{
        const data = await res.json();
        setCountries(data);
        setIsloading(false);
      }
      
    } catch (err) {
      console.log(err.message);
      
    }
  }


  return (
    <div>
       <Search   onSearch={getCountryByName} onSelect={getCountryByRegion} />
      <div className="flex">
       
        <div >
          {isloading && !error && <h2>Loading...</h2> }
          {error && !isloading && <h4>{error}</h4>}
         <div className=" p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5  w-full">
    
           {
            countries?.map((country, index)=> (
              <Link to={`/country/${country.name.common}`} key={index}>
              <div className="card  w-full rounded overflow-hidden  bg-gradient-to-b from-blue-400 to-cyan-800" >
                  <div className="w-full">
                    <img className="rounded w-full  h-44  bg-cover" src={country.flags.png} alt="flags"/>
                  </div>
                  <div className="text-white py-3">
                    <div>
                    <h3 className="text-white  font-bold text-lg tracking-widest">{country.name.common}</h3>
                    <h6 ><span className="font-semibold">Population:</span> {country.population}</h6>
                    <h6><span className="font-semibold">Region: </span>{country.region}</h6>
                    <h6><span className="font-semibold">Capital:</span> {country.capital}</h6>
                   {/* <h6>TimeZone: {country.timezones}</h6> */}
                    </div>
                    
                  </div>
              </div>
              </Link>
            ))
           }
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
