import React from 'react';
import { useState } from 'react';
import { Search,SearchForm,SearchBtn,SearchInput } from '../Searchbar/Searchbar.styled';
import { BsSearch } from 'react-icons/bs';


export const Searchbar = ({ onSubmit }) => {
    
    const [query, setQuery] = useState('');
  

    const handleChange = event => {
     setQuery(event.target.value );
    };


    const handleSubmit = event => {
        event.preventDefault();
        // const searchQuery = event.target.elements.searchName.value.trim();
        onSubmit(query);
        setQuery('');
    }

     
        return (
            <Search>
            <SearchForm onSubmit={handleSubmit}>
               
                <SearchInput
                    type="text"
                    name="searchName"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                    title="query"
                    required
              />
            
            
                <SearchBtn type="submit"><BsSearch /></SearchBtn>
                </SearchForm>
            </Search>
        );
    
  
};
