import React from 'react';
import './style.scss';

export default function New({data}) {
  return <div className='new'>
      <div className='image' style={{backgroundImage: `url(${data.img})`}}></div>
      <h2>{data.title.slice(0,60) + '...'}</h2>
  </div>;
}
