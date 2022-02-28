import { useState, useRef } from 'react';
import Book from './book';
import './style.scss';
const data = [
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
    {
        img: require('../../images/book.png'),
        title: "Baxtiyor Oila",
        author: "Shayx Muhammad Sodiq",
        downloadLink: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=studio-media-9DaOYUYnOls-unsplash.jpg'
    },
]

export default function (props) {
    return (<div className='library'>
        <div className="container">
            <div className="title">Kutubxona</div>
            <div className="books">
                {data.map(data=><Book data={data} />)}
            </div>
        </div>
    </div>);
}
