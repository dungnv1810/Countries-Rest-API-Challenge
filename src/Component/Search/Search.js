import React, {useState} from "react";
import "../../app.css"
const Search = ({onSearch}) => {
    const [input, setInput] = useState('')
    const SearchInput = event => {
        const value = event.target.value
        setInput(value)
    }

    const submitHandler  = (event) => {
        event.preventDefault()
        onSearch(input)
    } 
    return(
        <>
            <form onSubmit={submitHandler}>
                <input 
                    type='text' 
                    name="name"
                    value={input}
                    onChange={(event) => SearchInput(event)}    
                    autoComplete='off'
                    placeholder="Search a country ..."
                />
            </form>
        </>
    )
}
export default Search