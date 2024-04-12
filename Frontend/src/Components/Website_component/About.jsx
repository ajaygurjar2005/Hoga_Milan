import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            
                <div className='md:w-[100%] w-full text-[black] '>
                    <div className='md:w-fullw-full ml-[20px] mr-[20px] justify-center items-center'>
                        <h1 className='text-center  font-semibold mt-5 text-[25px]'>Contact Us</h1>
                        <hr className=' bg-[black] h-[2px]' />

                        <div className='md:w-[100%] w-full h-[auto] mt-10 grid grid-cols-1 md:grid-cols-2'>
                            <img src="image/10.gif " className='ml-[100px] w-[65%] mt-10' alt="" />
                            <div className='w-30% '>
                                <p className=' text-[25px]'>Hoga Milan-Where Dreams Unite </p>
                                <hr className=' h-[2px] bg-[black]' />
                                <p className=' text-[#777]'>Welcome to Hoga Milan Wedding, your premier destination for creating the perfect wedding experience. We specialize in crafting unforgettable weddings that blend tradition and modernity, ensuring your special day is nothing short of magical. With over a decade of expertise in wedding planning and execution, Hoga Milan Wedding is your trusted partner for turning dreams into reality.</p>
                                <br />
                                <p className=' text-[#777]'>Our team of dedicated professionals works closely with you to bring your vision to life. From enchanting venues to exquisite decor, we offer a wide range of services tailored to your unique preferences. With Hoga Milan Wedding, every detail is meticulously planned and executed, leaving you free to savor every moment of your celebration.</p>
                            </div>
                        </div>
                        <div className='md:w-[100%] w-full h-[auto] mt-10 grid grid-cols-1 md:grid-cols-2'>
                            <div className='w-30%  '>
                                <p className=' text-[25px]'>Hoga Milan-Where Dreams Unite </p>
                                <hr className='h-[2px] bg-[black]' />
                                <p className=' text-[#777]'>Welcome to Hoga Milan Wedding, your premier destination for creating the perfect wedding experience. We specialize in crafting unforgettable weddings that blend tradition and modernity, ensuring your special day is nothing short of magical. With over a decade of expertise in wedding planning and execution, Hoga Milan Wedding is your trusted partner for turning dreams into reality.</p>
                                <br />
                                <p className=' text-[#777]'>Our team of dedicated professionals works closely with you to bring your vision to life. From enchanting venues to exquisite decor, we offer a wide range of services tailored to your unique preferences. With Hoga Milan Wedding, every detail is meticulously planned and executed, leaving you free to savor every moment of your celebration.</p>
                            </div>
                            <img src="image/9.gif " className='ml-20 w-[60%] mt-10' alt="" />
                        </div>



                    </div>
                

                </div>

            {/* <Link to={"/about"}>about</Link> */}
        </div>
    )
}

export default About
