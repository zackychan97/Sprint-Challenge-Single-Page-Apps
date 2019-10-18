import React, { useState } from "react";
// import CharacterList from './CharacterList';

const Search = (props) => {
  // const [searchValue, setSearchValue]=useState('');
  // const [searchResults, setSearchResults]=useState([]);

  // const handleSearchInputChanges = (e) => {
  //   setSearchValue(e.target.value);
  // }

  // const resetInputField = () => {
  //   setSearchValue("")
  // }

  // const callSearchFunction = (e) => {
  //   e.preventDefault();
  //   props.search(searchValue);
  //   resetInputField();
  // }

  return (
    <section className="search-form">
      <form>
        <input
          className="search-bar"
          type="text"
          // Passing in props so that it can be utulized on the CharacterCard component
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </section>
    
  );
}


export default Search;