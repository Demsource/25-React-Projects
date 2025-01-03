import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMSG, setErrorMSG] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchImages(getURL) {
    try {
      setLoading(true);
      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMSG(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading Data</div>;
  }

  if (errorMSG) {
    return <div>Error occured: {errorMSG}</div>;
  }

  return (
    <div className="image-slider">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images &&
        images.length &&
        images.map((image, index) => (
          <img
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
            key={image.id}
            src={image.download_url}
            alt={`By ${image.author}`}
          />
        ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images &&
          images.length &&
          images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
