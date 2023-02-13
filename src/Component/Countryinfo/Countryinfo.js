import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

import {apiUrl} from "../../util/api"
const Countryinfo = () => {
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    const {countryName} = useParams();

    
    const getCountryByName = async() =>{
        setIsLoading(true)
        try{
            const res = await fetch(`${apiUrl}/name/${countryName}`)
            console.log('res ===', res)
            const data = await res.json()
            console.log('data === ', data)
            setCountry(data)
            isLoading(false)
        }catch(err){
            setIsLoading(false)
            setError(err.message)
        }
    }
    useEffect(()=>{
        getCountryByName()
    }, [countryName])

    return(
        <>
            <div className="country_info_wrapper">
                <button>
                    <Link to='/'>
                        Back
                    </Link>
                </button>
                {
                    country?.map((item, index) => {
                        return(
                            <div key={index} className="country_info_container">
                                <div className="country_info_img">
                                    <img src={item.flags.png} alt=""/>
                                </div>
                                <div className="country_info">
                                    <div className="country_info_left">
                                        <h3>Native Name: <span>{item.name.common}</span></h3>
                                        <h5>Population: <span>{item.population}</span></h5>
                                        <h5>Region: <span>{item.region}</span></h5>
                                        <h5>Sub Region: <span>{item.subRegion}</span></h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Countryinfo