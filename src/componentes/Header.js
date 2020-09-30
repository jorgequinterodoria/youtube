import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import '../css/Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const[inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            {/* Icono y logo */}
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                        alt=""
                    />
                </Link>
                <p>By Jorge Quintero</p>
            </div>

            {/* Busqueda */}
            <div className="header__input">
            <input 
                onChange={e =>setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder="Buscar" 
                type="text" 
            />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>
            </div>

            {/* Avatar y botones */}
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon  className="header__icon"/>
                <NotificationsIcon  className="header__icon"/>
                <Avatar
                    alt="Jorge Quintero"
                    src="https://avatars3.githubusercontent.com/u/69540195?s=400&u=f82ea81ab7918279a24855f11177cbcf81dee184&v=4"
                />
            </div>


        </div>
    )
}

export default Header
