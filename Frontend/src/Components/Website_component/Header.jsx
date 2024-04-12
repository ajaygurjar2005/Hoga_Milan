// import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react';



const Header = () => {
  const [toggle, settoggle] = useState(false)
  const MenuItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Login",
      link: "/login"
    }
  ]

  return (
    <div className='w-full h-[100px] bg-[#111415] flex'>
      <div className='justify-between justify-items-center w-[40%] ml-[20px] pt-[25px]'>
        <span className='text-[red] text-[27px] justify-between items-center h-[100px] mr-3'>Hoga</span>
        <span className='text-[green] text-[27px] justify-between  h-[100px] underline'>Milan</span>
      </div>
      <div className='w-[50%] text-[white] md:block hidden justify-between justify-items-center mt-[30px]'>
        <ul className=' flex  w-50%  text-center  text-[25px] justify-between justify-items-center  ' >
          {
            MenuItems.map((data, index) => {
              return (
                <li key={index}>
                  <Link to={data.link} className='hover:text-[red]  flex justify-center items-center hover:cursor-pointer '>{data.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <ul className={`md:hidden  fixed w-screen h-[100vh] bg-[rgba(0,0,0,0.7)] text-white flex flex-col   items-center   pt-6  duration-300 top-[0px] sm:mr-[30px]
               ${toggle == true ? 'left-[0%]' : 'left-[-100%]'}
               `}>
          {
            MenuItems.map((items, index) => {
              return (
                <li key={index} className='hover:text-[red]  mt-20 text-[25px] cursor-pointer  '>
                  <Link to={items.link}>{items.name}</Link> 
                </li>
              )
            })
          }

        </ul>
      </div>
      {
        toggle == true ?
          <AiOutlineClose style={{ zIndex: '100' }} className='text-[30px]   md:hidden text-[white] ml-[300px] mt-[50px]' onClick={() => { settoggle(false) }}>

          </AiOutlineClose>
          :

          <AiOutlineMenu onClick={() => { settoggle(true) }} className='md:hidden  text-[white] text-[30px] ml-[300px] mt-[50px]' />

      }


    </div>
  )
}

export default Header
