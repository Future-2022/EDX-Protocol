
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import GithubIcon from '../../img/github.svg';
import TwitterIcon from '../../img/twitter.svg';
import DiscordIcon from '../../img/discord.svg';
import Wechat from '../../img/wechat.svg';
import TelegramIcon from '../../img/telegram.png';
import PolygonIcon from '../../img/polygon-white.png';
import AvalancheIcon from '../../img/avalanche-white.png';
const Footer = () => {

    return (
        <div>            
            <footer className='w-auto'>
                <a href="https://www.saitamatoken.com/" target="_blank" rel="noreferrer"><img src={GithubIcon} width={25} /></a>
                <a href="https://t.me/SaitamaWorldwide" target="_blank" rel="noreferrer"><img src={TelegramIcon} width={25} /></a>
                <a href="https://discord.com/invite/saitama" target="_blank" rel="noreferrer"><img src={DiscordIcon} width={25} /></a>
                <a href="https://twitter.com/WeAreSaitama" target="_blank" rel="noreferrer"><img src={TwitterIcon} width={25} /></a>
                <a href="https://etherscan.io/address/0xce3f08e664693ca792cace4af1364d5e220827b2" target="_blank" rel="noreferrer"><img src={PolygonIcon} width={25} /></a>
                <a href="https://etherscan.io/address/0xce3f08e664693ca792cace4af1364d5e220827b2" target="_blank" rel="noreferrer"><img src={AvalancheIcon} width={25} /></a>
                <a href="https://www.saitamatoken.com/" target="_blank" rel="noreferrer"><img src={Wechat} width={25} /></a>
            </footer>
        </div>
    )
}

export default Footer;
