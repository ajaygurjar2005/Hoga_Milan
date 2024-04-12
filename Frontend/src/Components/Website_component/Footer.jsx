import React from 'react'
import { BsWhatsapp, BsFacebook, BsYoutube, BsArrowUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-[#111415] pt-8 pb-6  mt-[20px] text-[white]'>
      <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
      <div className='md:ml-[25px] ml-[2px] mb-[20px]'>
        <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className='flex text-[30px]   mt-5'>
          <BsFacebook />
          <BsWhatsapp className='ml-5' />
          <BsYoutube className='ml-5' />
        </div>
      </div>
      <div>
        <div className=' md:ml-[140px] ml:[2px] mb-20'>
          <h3 className='font-semibold text-40px'>USEFUL LINKS</h3>
          <ul className='text-12 mb-5 '>
            <li className='mt-4'><Link to={'/register'}>Register Now</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li ><Link to={'/'}>Home Page</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <div className=' mb-20 md:ml-[100px] mr-[100px] ml-[2px]'>
          <div className="block uppercase text-[16px]  font-semibold mb-2">Registation Office</div>

          <ul className=" text-[15px] font-semibold ">
            <li className='mt-4'> 21,suntower, Malviya  Nagar, Jaipur
              302017 ,Rajasthan, India</li>
            <li className='mt-2'>++91 7568111771</li>
          </ul>
        </div>
      </div>
      
      </div>
      <BsArrowUp className='md:ml-[1200px] mb-[50px] text-[30px] border-[1px] animate-ping border-[white]  rounded-full ml-[600px] ' />
          
      <hr className='w-[95%] ml-[20px]' />
      
             <div  className="w-full  px-4 mx-auto text-center">
          <div className="text-[20px] text-blueGray-500 mt-10 font-semibold ">
                  Copyright © 2023 Hoga milan.com
                  </div>
                  <div></div>

          </div>

    </div>
  )
}

export default Footer
