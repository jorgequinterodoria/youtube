import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Inicio"/>
            <SidebarRow  Icon={WhatshotIcon} title="Tendencias"/>
            <SidebarRow  Icon={SubscriptionsIcon} title="Subscripciones"/>
            <hr/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Biblioteca"/>
            <SidebarRow  Icon={HistoryIcon} title="Historial"/>
            <SidebarRow  Icon={OndemandVideoIcon} title="Tus Videos"/>
            <SidebarRow  Icon={WatchLaterIcon} title="Ver más tarde"/>
            <SidebarRow  Icon={ThumbUpAltIcon} title="Videos que me gustan"/>
            <SidebarRow  Icon={ExpandMoreOutlinedIcon} title="Mostrar más"/>
            <hr/>
        </div>
    )
}

export default Sidebar
