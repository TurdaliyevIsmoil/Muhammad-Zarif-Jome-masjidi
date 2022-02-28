import { useState, useRef } from 'react';
import New from './new';
import './style.scss';

export default function (props) {
    const data = [
        {
            title: 'Toshkentda islom bankchiligi va moliyasi bo’yicha forum boshlandi',
            img: require('../../images/new.png')
        },
        {
            title: 'Toshkent shaxar bosh imom xatibi ustoz shayx sayyid roxmatulloh termiziy...',
            img: require('../../images/new-2.png')
        },
        {
            title: 'tojikiston muftiysi tabrik yo’lladi',
            img: require('../../images/new-3.png')
        },
        {
            title: 'falastin elschisi muftiy xazratlarini qutladi',
            img: require('../../images/new-4.png')
        },
        {
            title: 'moskva elchisi albir xazrat nuriddin domla xoliqnazarovni qutladi',
            img: require('../../images/new-5.png')
        },
        {
            title: 'diyonat ishlari boshqarmasi raxbarining tabrigi qabul qilindi',
            img: require('../../images/new-1.png')
        }
    ]
    return (<div className='news'>
        <div className="container">
            <h1 className="title">Yangiliklar</h1>
            <div className="data">
                {data.map(data=><New data={data}/>)}
            </div>
        </div>
    </div>);
}
