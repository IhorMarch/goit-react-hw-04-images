import React from 'react';
import { Search,SearchForm,SearchBtn,SearchInput } from '../Searchbar/Searchbar.styled';
import { BsSearch } from 'react-icons/bs';


export class Searchbar extends React.Component {
    state = {
        query: '',
        
    };
    

    handleSubmit = event => {
        event.preventDefault();
        // const searchQuery = event.target.elements.searchName.value.trim();
    
        this.props.onSubmit(this.state.query);
        this.setState({ query: "" });
    }
      

    handleChange = event => {
     this.setState({ query: event.target.value });
    };
    

    render() {
    
        return (
            <Search>
            <SearchForm onSubmit={this.handleSubmit}>
               
                <SearchInput
                    type="text"
                    name="searchName"
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder="Search images and photos"
                    title="query"
                    required
              />
            
                
            
                <SearchBtn type="submit"><BsSearch /></SearchBtn>
                </SearchForm>
            </Search>
        );
    }
};









// export const Searchbar = ( onSubmit,value,onChangeFilter) => {
  

//     return (
      

//       <header class="searchbar">
//         <form class="form" >
          
//           <button type="submit" class="button" onClick={onSubmit} >
            
//             <span class="button-label">Search</span>
            
//     </button>

//     <input
//       class="input"
//       type="text"
//       value =""
//       autocomplete="off"
//       autofocus
      
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//   );
// };
