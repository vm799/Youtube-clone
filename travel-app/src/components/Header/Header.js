import './Header.css'
import React, {useState } from "react"
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"

function Header() {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <>
    <div className="header container_df_ai">
       <div className="header_left container_df_ai_jc">
      <MenuIcon />
      <Link to={"/"}>
          <img className= 'header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_of_YouTube_%282011-2013%29.svg/800px-Logo_of_YouTube_%282011-2013%29.svg.png?20170830032119" alt="youtube logo"/>
      </Link>
    </div>
    

    <div className="header__input container_df_ai">
      <input 
      onChange={(e)=> setInputSearch(e.target.value)} 
      value ={inputSearch} 
      placeholder="Search" 
      type="text" 
      />
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon  className="header__inputButton"/>
      </Link>
    </div>
   
    <div className="header__icons container_df_ai">
      <VideoCallIcon className="header__icon" />
      <AppsIcon className="header__icon"/>
      <NotificationsIcon className="header__icon"/>
      <Avatar className="header__icon header__avatar" 
      alt="V" 
      src='https://www.ophthalsj.com/assets/images/speakers/vaishali_mehmi.png' 
      />
    </div>

    </div>
    </>
  )
}

export default Header