import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLessThan, FaGreaterThan } from "react-icons/fa"
import Profile from './Profile'

const Home = () => {
  const [mySlider, setMySlider] = useState(0)
  const slides = [
    'url(image/11.jpg)',
    'url(image/2.jpg)',
    'url(image/header.jpg)',
    'url(image/1.jpg)',
    'url(image/09.webp)'
  ]

  const nextSlide = () => {
    setMySlider((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setMySlider((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <div className='w-[100%] h-[auto] '>

          <div className='w-[100%] h-[auto] bg-[red] relative '>
            <div
              className="relative   transition-transform duration-500 "
              style={{
                backgroundImage: slides[mySlider],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '600px'
              }}
            >
            </div>
            <button
              onClick={prevSlide}
              className="bg-[white] absolute top-[50%] left-0 flex items-center cursor-pointer bg-opacity-30 hover:bg-opacity-40 text-black p-2 rounded-full focus:outline-none"
            >
              <FaLessThan className='md:text-[12px] text-[7px]' />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-800 absolute top-[50%] right-0 flex items-center cursor-pointer bg-opacity-30 hover:bg-opacity-40 text-black p-2 rounded-full focus:outline-none"
            >
              <FaGreaterThan className='md:text-[12px] text-[7px]' />
            </button>


            <button className='absolute left-[40%]  p-2 md:p-4 text-[white] top-[60%] md:top-[78%] border-[2px] border-[red]'><Link to={'register'}>Create Your Profile Free <div>1 year Valid</div></Link></button>


          </div>
          <div className='w-[100%] h-[auto] bg-slate-200 mt-[20px] grid grid-cols-1 md:grid-cols-3 '>
            <img src='image/3.gif' className='w-[250px] h-[280px] md:mr-10 mt-8 mb-8 ml-20 ' />
            <img src='image/9.gif' className='w-[250px] h-[280px] md:mr-10 mt-8 mb-8 ml-20' />
            <img src='image/10.gif' className='w-[250px] h-[280px] md:mr-10 mt-8 mb-8 ml-20' />
          </div>
          <Profile />





        </div>
      </div>

    </div>
  )
}

export default Home
