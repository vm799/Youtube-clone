import React from 'react'
import './SearchPage.css'
import TuneIcon from "@material-ui/icons/Tune"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
          <h2>FILTER</h2>
        <div className= "searchPage__videos">
        </div>
      </div>
    </div>
  )
}

export default SearchPage