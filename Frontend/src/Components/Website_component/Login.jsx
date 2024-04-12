import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { MainContxt } from '../../Context/MainContext';

const Login = () => {
  const { setUser, BASEURL, notify } = useContext(MainContxt);
  const [msg, setmsg] = useState("")
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();
    const data = event.target;
    const mobile = data.mobilenumber.value;
    const pass = data.password.value;
    console.log("mobile", mobile)
    console.log("pass", pass)

    if (mobile !== "" && pass !== "") {
      const formData = {
        mobilenumber:mobile,
        password:pass
      }

      axios.post(BASEURL +'user/login',formData)
        .then(
          (success) => {
            console.log(success,"success")
            if(success.status === 200){
              console.log("success" ,success)
              const userData = {
                name: success.data.user.username,
                  id: success.data.user._id
                };
                console.log(userData)
              setUser(userData);
                setmsg(success.accessToken)
                sessionStorage.setItem("accesstoken", JSON.stringify(success.data.accessToken));
                navigate("/")
            }
            else{
              setmsg(success.data.msg)
              console.log("error")
              notify("plese try again")
            }
          }
        )
        .catch(
          (error) => {
            console.log("error",error)
            notify("error")
          }
        )

    }
    else {
      notify("Please fill all the data", "error");
    } 
}

return (
  <section style={{
    backgroundImage: 'url("image/1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} className="dark:bg-gray-900 h-[100vh] relative">
    <div className="flex flex-col fixed top-[5px] md:right-[35%]  items-center justify-center px-10 py-8 mx-auto md:h-screen lg:py-0">
      <span href="#" className="flex text-[white] items-center mb-6 text-2xl font-semibo dark:text-white">
        <img className="w-8  h-8 mr-2" src="image/logo.png" alt="logo" />
        Hoga Milan.com
      </span>
      <div className="w-full  bg-[black] text-[white] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl  text-center mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login in to your account
          </h1>
          <h1 className="text-[16px] text-center mb-4 font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
            {msg}
          </h1>
          <form className="space-y-4 md:space-y-6 text-[white]" onSubmit={loginHandler}>
            <div>
              <label htmlFor="mobilenumber" className="block mb-2 text-sm font-medium  ">Your Mobile Number</label>
              <input type="tel" name="mobilenumber" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[white]" placeholder="10 Digit Mobile Number" required="" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium  text-[white]">Password</label>
              <input type="text" name="password" placeholder="••••••••" className="text-[white] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
            </div>
            <button type="submit" className="w-[50%] ml-[25%]
                            border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500 text-white">Sign in</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}

export default Login;
