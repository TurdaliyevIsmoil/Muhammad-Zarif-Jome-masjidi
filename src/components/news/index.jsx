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
            img: require('../../images/new.png')
        },
        {
            title: 'Someting somethingest some things',
            img: require('../../images/new.png')
        },
        {
            title: 'Someting somethingest some things',
            img: require('../../images/new.png')
        },
        {
            title: 'Someting somethingest some things',
            img: require('../../images/new.png')
        },
        {
            title: 'Someting somethingest some things',
            img: require('../../images/new.png')
        },
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
