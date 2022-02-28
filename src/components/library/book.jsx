import React from 'react'

export default function Book({data}) {
  return (
    <div className='book flex-center'>
        <img src={data.img} alt="Image" />
        <div className="content">
            <div className="book-title">{data.title}</div>
            <div className="book-author">{data.author}</div>
            <a href={data.downloadLink} download className="book-author">Yuklab olish</a>
        </div>
    </div>
  )
}
