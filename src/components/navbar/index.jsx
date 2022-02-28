import { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import './style.scss';
import logo from '../../images/logo.png';

export default function (props) {
    const [mobile, setmobile] = useState(false);
    const toggle = () => setmobile(!mobile)
    return (<nav className='navbar'>
        <div className='top flex-center flex-beetwen container'>
            <a href='/'>Muhammadzarif.uz</a>
            <div className="social-media flex-center">
                <a href="#"><img src={telegram} alt="Telegram" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={youtube} alt="Youtube" /></a>
            </div>
        </div>
        <div className='main'>
            <div className='container flex-center'>
                <menu className='menu flex-center flex-start'>
                    <li><Link to='/hero'>Bosh Sahifa</Link></li>
                    <li><Link to='/news'>Yangiliklar</Link></li>
                    <li><Link to='/articles'>Maqolalar</Link></li>
                </menu>
                <div className="logo">
                    <img src={logo} alt="Logotip" />
                </div>
                <menu className='menu flex-center flex-end'>
                    <li><Link to='/hero'>Ayollar Sahifasi</Link></li>
                    <li><Link to='/news'>Kutibxona</Link></li>
                    <li><Link to='/articles'>Oila Muqaddas</Link></li>
                </menu>
                <menu className={`mobile flex-center ${mobile && 'active'}`}>
                    <li><Link to='/hero'>Bosh Sahifa</Link></li>
                    <li><Link to='/news'>Yangiliklar</Link></li>
                    <li><Link to='/articles'>Maqolalar</Link></li>
                    <li><Link to='/hero'>Ayollar Sahifasi</Link></li>
                    <li><Link to='/news'>Kutibxona</Link></li>
                    <li><Link to='/articles'>Oila Muqaddas</Link></li>
                    <li onClick={toggle} ><img src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" /></li>
                </menu>
                <a className='mobile-btn' onClick={toggle} ><img src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" /></a>
            </div>
        </div>

    </nav>);
}
