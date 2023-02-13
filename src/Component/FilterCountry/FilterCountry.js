import React from "react";
import "../../app.css"
const FilterCountry = ({onSelect}) => {
    const selectHandler = (event) => {
        const regionName = event.target.value
        onSelect(regionName)
    }
    return(
        <>
            <select onChange={selectHandler}>
                <option>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </>
    )
}
export default FilterCountry