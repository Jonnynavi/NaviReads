import { useState } from "react";

function SearchBar({onSearch}) {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
        setSearch("");
    }
    
    return (
        <form onSubmit={handleSearch}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." value={search}/>
            <button >Search</button>
        </form>
    )
}

export default SearchBar;