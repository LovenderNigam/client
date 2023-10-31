import React, { useEffect, useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage:
        'url(https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25062.jpg?w=826&t=st=1698747952~exp=1698748552~hmac=b7a04549cd51baf55435b8537d9ab18318748685d110de2b50eae0a1f4220954)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://img.freepik.com/free-photo/rear-view-female-business-executive-giving-speech_107420-63811.jpg?w=826&t=st=1698746485~exp=1698747085~hmac=56c8f73e5f84be6fc78f2e3702312a1aaae4c782d513b936878c3f0695aa994a)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-16005.jpg?w=826&t=st=1698746558~exp=1698747158~hmac=ffbcacc44d762741b1f71f2f870d2ed893e7b9cf340d402f7e45fce15d1ebe0c)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://img.freepik.com/free-photo/close-up-people-business-meeting_23-2149304767.jpg?w=826&t=st=1698746743~exp=1698747343~hmac=515206ba34ea1a9df1616bcc76a648c4fa847eb2e5c16d95145eb5bd3e5d8ac6)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://img.freepik.com/free-psd/empty-conference-room-generative-ai_587448-1943.jpg?w=996&t=st=1698748038~exp=1698748638~hmac=b8a7a04d11a3c33276de02cca530c735ea1baa6969fba902de4539b69d5c5359)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    {
      backgroundImage:
        'url(https://img.freepik.com/free-photo/smiling-senior-leader-meeting-with-his-team_1262-2160.jpg?w=826&t=st=1698748081~exp=1698748681~hmac=1aabbd012095b404e79ad466b9caa0b328950f7d24c03d339a8a2bf5b60af61b)',
      name: 'Conference',
      des: 'Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.',
    },
    // Add more slides here
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
