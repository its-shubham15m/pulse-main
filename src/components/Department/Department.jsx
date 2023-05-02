import React, { useState, useEffect } from 'react';
import './Department.css';
import photo1 from '../../img/dept01.JPG';
import photo2 from '../../img/dept02.JPG';
import photo3 from '../../img/dept03.JPG';
import photo4 from '../../img/dept04.JPG';
import photo5 from '../../img/dept05.JPG';
import photo6 from '../../img/dept06.JPG';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Department = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contain1">
      <h1 className="main-heading">Our IT Department</h1>
      <div className="dialog">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index}`}
            className={`photo ${
              index === activeIndex ? 'active' : index < activeIndex ? 'left' : 'right'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
