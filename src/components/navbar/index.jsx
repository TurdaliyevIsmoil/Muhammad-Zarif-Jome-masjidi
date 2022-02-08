import { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import './style.scss';
import logo from '../../images/logo.png';

export default function (props) {
    return (<nav className='navbar'>
        <div className='top'></div>
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
            </div>
        </div>

    </nav>);
}
