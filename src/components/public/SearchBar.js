import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {

    return (
        <div className="search-bar">
            <form className="search-box">
                <input
                    type="text"
                    placeholder=" "
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button type="reset"></button>
            </form>
        </div>
    );
};

export default SearchBar;
