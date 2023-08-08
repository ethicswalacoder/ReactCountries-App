import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "./util/api";

const Details = () => {
  const [country, setCountry] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) {
          throw new Error("Not found Any Country in this Name");
        } else {
          const data = await res.json();
          setCountry(data);
          setIsloading(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getCountryByName();
  }, [countryName]);

  return (
    <>
      <div className="mx-5">
        {country?.map((country, index) => (
          <div
            className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-7"
            key={index}
          >
            <div className="md:flex ">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-56 bg-cover overflow-hidden"
                  src={country.flags.png}
                  alt="Modern building architecture"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide  text-indigo-500 font-semibold text-2xl">
                  Country Details
                </div>
                <a
                  href="#"
                  className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
                >
                  <h5> <span  className="text-xl">Native Name: </span> {country.name.common}</h5>
                </a>
                <h5 className="mt-2 text-slate-500">
                <span  className="text-lg">Population:</span> {country.population}
                </h5>
                <h5 className="mt-2 text-slate-500"><span  className="text-lg">Region:</span> {country.region}</h5>
                <h5 className="mt-2 text-slate-500">
                <span  className="text-lg">Sub Region:</span> {country.subregion}
                </h5>
              </div>
            </div>
          </div>
        ))}
          <div className="max-w-md mx-auto  md:max-w-2xl my-7">
        <button  className="bg-indigo-500 hover:bg-indigo-400 shadow-xl px-8 py-2 text-white text-2xl rounded-full ml-10  md:ml-80">
          <Link to="/">Back</Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default Details;
