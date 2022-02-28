import { useState, useRef } from 'react';
import Article from '../article';
import './style.scss';

export default function ({data}) {
    return (<div className='articles'>
        <div className="container">
            <h2 className="title">{data.title}</h2>
            <div className="articles-container">
                {data.datas.map(data => <Article data={data} key={data.id} />)}
            </div>
        </div>
    </div>);
}
