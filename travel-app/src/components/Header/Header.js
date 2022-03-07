import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  return (
    <div className="header">
       
    <MenuIcon />
    <img className= 'header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_of_YouTube_%282011-2013%29.svg/800px-Logo_of_YouTube_%282011-2013%29.svg.png?20170830032119" alt="youtube logo"/>
    <input type="text" />
    <SearchIcon />
    <VideoCallIcon />
    <AppsIcon />
    <NotificationsIcon />
    <Avatar alt="V" src='' />

    </div>
  )
}

export default Header