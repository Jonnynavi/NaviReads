import { useState } from "react";

function SearchBar({onSearch}) {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search);
        onSearch(search);
    }
    
    return (
        <form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" placeholder="Search..." value={search}/>
            <button >Search</button>
        </form>
    )
}

export default SearchBar;