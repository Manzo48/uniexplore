import { Carousel } from 'antd';
import './index.css'; 

const Slider = ({ images }) => {
  return (
    <div className="carousel-container"> 
      <Carousel autoplay>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}> 
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
