import { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import HeroImage from './heroImage';
import './style.scss';

const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
};

export default function (props) {

    const dataImg = [
        require('../../images/hero.png'),
        require('../../images/hero2.jpg'),
        require('../../images/hero3.jpg.jpg'),
    ]

    return (<header className='hero'>
        <Carousel responsive={responsive}
            swipeable={false}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["all"]}
        >
            {dataImg.map(data => <HeroImage img={data} />)}
        </Carousel>
    </header>);
}
