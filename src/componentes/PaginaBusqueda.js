import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import '../css/PaginaBusqueda.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

function PaginaBusqueda() {
    return (
        <div className="paginaBusqueda">
            <div className="paginaBusqueda__filtro">
                <TuneOutlinedIcon />
                <h2>Filtro</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJy_TeIEYMGLdW3qYNRo4XHQdsFEPzo7NeBiMikS=s100-c-k-c0xffffffff-no-rj-mo"
                channel="MontajeONLINE"
                verified
                subs="113"
                noOfVideos={5}
                description="Somos un canal especializado en eventos y cultura digital. 
                - cultura- arte-  concursos- recreación - promoción - formación digital- "
            />
            <hr />
            <VideoRow
                views="384"
                subs="113"
                description="Actividad familiar virtual, en la cual se comparte y disfruta de manera sana a través de maravillosos concursos, que brindan la oportunidad  de participar activamente por espectaculares premios."
                timestamp="Hace 2 días"
                channel="MontajeONLINE"
                title="RECREBINGO VIRTUAL SOLIDARIO 09 DE AGOSTO 2020"
                image="https://i.ytimg.com/vi/P7VMA7NS0L8/hqdefault.jpg"
            />

        </div>
    )
}

export default PaginaBusqueda
