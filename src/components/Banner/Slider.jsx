import React, { useEffect, useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [currentSlide] = useState(0);
  const slides = [
    {
      backgroundImage:
        'url(https://res.cloudinary.com/de7mwtft7/image/upload/v1698829160/bww2t3eullnip9kivve8.jpg)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://res.cloudinary.com/de7mwtft7/image/upload/v1698829360/vbgmxd9tl6xydqfcf5xl.jpg)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://res.cloudinary.com/de7mwtft7/image/upload/v1698829610/mlhfmoxtdfyyzpwhdpxh.jpg)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
 
  
    {
      backgroundImage:
        'url(https://res.cloudinary.com/de7mwtft7/image/upload/v1698828552/znf95ehlh0clrfztwk4e.jpg)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://res.cloudinary.com/de7mwtft7/image/upload/v1698829275/gdffr6mbivvt2jny2tzg.jpg)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
  ];

  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll('.home-item');
      document.getElementById('home-slide').appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll('.home-item');
      document.getElementById('home-slide').prepend(lists[lists.length - 1]);
    };

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', handleNextClick);
      prevButton.addEventListener('click', handlePrevClick);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', handleNextClick);
        prevButton.removeEventListener('click', handlePrevClick);
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div id="home-slide">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`home-item ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.des}</div>
             <Link to='/about' > <button>See more</button></Link>
            </div>
          </div>
        ))}
        <div className="buttons">
          <button id="prev">
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <button id="next">
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
