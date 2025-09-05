import React, { useState } from 'react';
import './App.css';

const images = [
  { name: "EAGLE", image: "https://cdn.pixabay.com/photo/2019/06/29/12/36/eagle-owl-4306146_1280.jpg" },
  { name: "Wolf", image: "https://cdn.pixabay.com/photo/2018/03/19/21/46/wolf-3241382_1280.jpg" },
  { name: "KINGFISHER", image: "https://cdn.pixabay.com/photo/2021/08/29/13/19/kingfisher-6583229_1280.jpg" },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
	setCurrentIndex((currentIndex + 1) % images.length);
  }

  function handlePrev() {
	setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  return (
	<div className='App'>
	  <div className='App-header'>
		<nav className='navbar'>
		  <li className='list-item'>Home</li>
		  <li className='list-item'>About</li>
		  <li className='list-item'>Gallery</li>
		  <li className='list-item'>Contact</li>
		</nav>
	  </div>

	  {/* Carousel Image Background */}
	  <div
		className='image-container'
		style={{ background: `url(${images[currentIndex].image}) no-repeat center/cover` }}
	  >
		<div className="content">
		  <div className="title">SLIDER</div>
		  <div className="name">{images[currentIndex].name}</div>
		  <div className="des">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		  </div>
		  <div className="btn">
			<button>See More</button>
			<button>Subscribe</button>
		  </div>
		</div>

		{/* Arrows */}
		<div className='Arrows'>
		  <button className='arrow-button' onClick={handlePrev}>{'<'}</button>
		  <button className='arrow-button' onClick={handleNext}>{'>'}</button>
		</div>

		{/* Thumbnails (Optional: could show all or current one) */}
		<div className='thumbnails'>
			<div className='thumbnail-item'>
			  {images.length > 1 && (
				<img
				  src={images[(currentIndex + 1) % images.length].image}
				  alt={images[(currentIndex + 1) % images.length].name}
				/>
			  )}
			</div>
		</div>
	  </div>
	</div>
  );
};

export default App;
