import React from 'react';
import './style.scss';

export default function New({ data }) {
  return <div className='new'>
    <img className='image' src={data.img} alt="Image" />
    <h2>{data.title.slice(0, 60) + '...'}</h2>
  </div>;
}
