import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import FilterCountry from "../FilterCountry/FilterCountry";
import {apiUrl} from "../../util/api"

const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    useEffect(()=>{
        getAllCountries()
    },[])
    const getAllCountries = async() => {
        setIsLoading(true)
        const res = await fetch(`${apiUrl}/all`);
        const data = await res.json();
        try{
            if(res.status === 200 || res.status === 201){
                setCountries(data)
                setIsLoading(false)
            } 
        }catch(err){
            setIsLoading(false)
            setError(err.message)
        }
    }

    const getCountryByName = async(countryName) => {
        const res = await fetch(`${apiUrl}/name/${countryName}`)
        const data = await res.json()
        try{
            setCountries(data)
            setIsLoading(false)
        }catch(err){
            setIsLoading(false)
            setError(err.message)
        }
    }

    const getCountryByRegion = async(regionName) => {
        try{
            const res = await fetch(`${apiUrl}/region/${regionName}`);
            const data = await res.json()
            console.log('data === ', data)
            setCountries(data)
            if(!res.ok) throw new Error('Failed ...')
        }catch(err){
            setIsLoading(false)
            setError(false)
        }
    }
    return(
        <>
            <div className="all_country_wrapper">
                <div className="country_top">
                    <div className="search">
                        <Search onSearch={getCountryByName}/>
                    </div>
                    <div className="filter">
                        <FilterCountry onSelect={getCountryByRegion}/>
                    </div>
                </div>
                <div className="country_bottom">
                    {
                        isLoading && !error && <h4>Loading.....</h4>
                    }
                    {
                        error && !isLoading && <h4>{error}</h4>
                    }
                    {
                        countries.map((item, index) => {
                            return(
                                <Link key={index} to={`/country/${item.name.common}`}>
                                    <div className="country_card">
                                        <div className="country_img">
                                            <img src={item.flags.png} alt=""/>
                                        </div>
                                        <div className="country_data">
                                            <h3>{item.name.common}</h3>
                                            <h5>Population: {item.population}</h5>
                                            <h6>Region: {item.region}</h6>
                                            <h6>Capital: {item.capital}</h6>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default AllCountries;