
import { CiSearch } from "react-icons/ci";
import './Searchbar.scss'
const SearchBar = () => {
  return (
    <div className='search-bar-outer'>
      <div className="inner">
       
      <div class="search-container">
            <CiSearch className="prefix-icon"/>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>


      </div>
    </div>
  )
}

export default SearchBar
