import {createRef} from "react"
import {Carousel} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import "./styles.css"
import Item from "./item";
import Image from "./image";

const images = [
    {id: 1, src: './1.jpeg'},
    {id: 2, src: './2.jpeg'},
    {id: 3, src: './3.jpeg'}
];

function App() {
    const carousel = createRef();

    const handleNext = () => {
        carousel.current.next();
        console.log('next')
    }

    const handlePrev = () => {
        carousel.current.prev();
        console.log('prev')
    }

    return (
        <div className="wrapper">
            <LeftOutlined className="prev-button" onClick={handlePrev}/>
            <RightOutlined className="next-button" onClick={handleNext}/>
            <Carousel ref={carousel} lazyLoad="ondemand"
                      autoplay dots infinite draggable>
                {images.map((image) => (
                    <Item id={image.id} key={image.id}
                        component={<Image src={image.src}/>}
                    />
                ))}
            </Carousel>
        </div>

    );
}

export default App;
