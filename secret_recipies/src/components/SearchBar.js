import React, { useState } from 'react';


export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    title: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, title: event.target.value })
  }
  
  const search = (event) => {
     onSearch(query.title);
    event.preventDefault();

  }

  return (
    <section className="searchbar">
      <form inline onSubmit={(event) => search(event)}>
        <input className='searchinput'
          onChange={handleInputChange}
          placeholder="Find a family recipe"
          value={query.title}
          name="title"
        />
        <button className='searchbutton' color="success" type="submit">Search</button>
      </form>
    </section>
  );
}