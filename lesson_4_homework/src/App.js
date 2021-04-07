import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"

const images = [
    {id: 1, src: './1.jpeg'},
    {id: 2, src: './2.jpeg'},
    {id: 3, src: './3.jpeg'}
];

function App() {
    const sliderStyle = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        adaptiveHeight: true
    };

    return (

        <div className="container">
            <Slider {...sliderStyle}>
                {images.map((image) => (
                    <img className="item" src={image.src} alt={image.id}/>
                ))}
            </Slider>
        </div>

    );
}

export default App;
