import React, { useState, useRef } from 'react';
import './index.css'; 
import { FaArrowLeft, FaArrowRight, FaFileImage } from 'react-icons/fa'; 

const PanoramaViewer = ({ initialImage }) => {
  const [images, setImages] = useState(initialImage ? [initialImage] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const panoramaRef = useRef(null);
  const [currentX, setCurrentX] = useState(0);

  const handleArrowClick = (direction) => {
    const newRotation = currentX + (direction === 'right' ? -300 : 300);
    const minRotation = Math.min(0, -panoramaRef.current.clientWidth + window.innerWidth);
    const maxRotation = 0;
    const boundedRotation = Math.max(minRotation, Math.min(maxRotation, newRotation));
    setCurrentX(boundedRotation);
    panoramaRef.current.style.transform = `translateX(${boundedRotation}px)`;
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageUrl = e.target.result;
      setImages([...images, newImageUrl]);
      setCurrentImageIndex(images.length); // Установка индекса нового изображения
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="panorama-container">
      <div className="panorama-image-container" ref={panoramaRef}>
        <img src={images[currentImageIndex]} alt="Panorama" className="panorama-image" />
      </div>
      <div className="navigation-arrows">
        <button className="arrow-button" onClick={() => handleArrowClick('left')}>
          <FaArrowLeft />
        </button>
        <button className="arrow-button" onClick={() => handleArrowClick('right')}>
          <FaArrowRight />
        </button>
      </div>
      <div className="change-image-button">
        <label htmlFor="imageInput" className="image-input-label">
          <FaFileImage />
          <input type="file" id="imageInput" onChange={handleFileInputChange} style={{ display: 'none' }} />
        </label>
      </div>
    </div>
  );
};

export default PanoramaViewer;
