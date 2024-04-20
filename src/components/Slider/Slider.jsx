import { Carousel } from 'antd';
import './index.css'; 

const Slider = ({ images }) => {
  console.log(images)
  return (
    <div className="carousel-container"> 
      <Carousel style={{width: '600px'}} autoplay>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}> 
            <img style={{objectFit: 'cover'}} width='600px' height='400px' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
