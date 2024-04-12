import React from 'react'
import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const FullProfile = () => {
    const [user, setUser] = useState([]);
    

    const [imgBaseUrl, setBaseUrl] = useState("")

    const { userId } = useParams();



    useEffect(() => {
        axios
            .get("http://localhost:8000/user")
            .then((success) => {
                console.log(success.status, 200)
                if (success.status === 200) {

                    const users = success.data.data;
                    console.log(userId)
                    console.log(users)
                    const foundUser = users.find((user) => user._id === userId);
                    console.log('re')
                    setUser(foundUser);

                    console.log(foundUser, 'found')
                }

            })
            .catch((err) => {
                setUser([]);
                setBaseUrl("");
                console.log('just')
            });
            
    }, [])


    return (
        <div>
            <h2 className='text-center text-[black] font-bold text-[35px]'>Full User Profile</h2>
            <hr className='mb-10 w-[50%] mx-auto text-[black]' />
            <div className='grid  md:grid-cols-2 '>
                <div className='shadow-lg '>
                    <div className='h-[400px] border max-w-[400px] md:ml-[120px] ml-[20px]'>
                        <img className='h-[100%] w-[100%]' src={imgBaseUrl + user.image} alt="image" />
                    </div>
                    <div className='text-[black] mt-10 font-semibold'>
                        <h1 className='text-center font-bold'>Personal
                            Details</h1>
                        <hr className='w-[200px] mt-4 mx-auto' />
                        <div className='grid md:grid-cols-2 p-2 mt-6   gap-2'>
                            <p> Profile createFor:-  {user.createFor} </p>

                            <p>Name:-  {user.username} </p>
                            <p> Dob:-  {user.dob} </p>
                            <p>Gender:-  {user.gender} </p>
                            <p>Religion:-  {user.religion}</p>
                            <p>Caste:-  {user.caste}</p>
                            <p>mobile Number:-  {user.mobilenumber} </p>
                        </div>
                    </div>
                </div>

                <div className=' p-2 mt-10 md:mt-0 shadow-lg'>
                    <div className=' font-semibold text-[black]  shadow-lg'>
                        <h1 className='text-center font-bold '>Caree Details</h1>
                        <hr className='w-[200px] mt-4 mx-auto' />
                        <div className='grid p-2   shadow-lg  md:grid-cols-2 gap-2'>
                            <p>Education:-  {user.education} </p>
                            <p>Income:-  {user.income}</p>
                            <p className='md:col-span-2 md:mt-2 md:text-center'>Employein:-  {user.employein} </p>
                        </div>

                    </div>
                    <div className='font-semibold text-[black] mt-10 shadow-lg'>
                        <h1 className='text-center font-bold'>Family Details</h1>
                        <hr className='w-[200px]  mt-4 mx-auto' />
                        <div className='grid p-2  md:grid-cols-2  gap-2'>
                            <p>Father Occupation:-  {user.father_occupation} </p>
                            <p>Mother Occupation:-  {user.mother_occupation} </p>

                            <p>Family-Type:-  {user.family_type} </p>

                            <p>Brother:-  {user.brother}</p>

                            <p>Sister:-  {user.sister}</p>
                            <p className='md:col-span-2'>
                            </p>
                            <p className='md:col-span-2'>Brother Mobile Number:-  {user.brother_mno}</p>
                            <p className='md:col-span-2'>Sister Mobile Number:-  {user.sister_mno}</p>


                        </div>
                    </div>
                    <div className='font-semibold text-[black] mt-10  shadow-lg'>
                        <h1 className='text-center font-bold'>Address Details</h1>
                        <hr className='w-[200px] mt-4 mx-auto' />
                        <div className='grid  p-2  md:grid-cols-3 gap-2'>
                            <p>State:-  {user.state}</p>
                            <p>Distric:-   {user.distric}</p>
                            <p>Pincode:-  {user.pincode}</p>
                            <p className='md:col-span-2'>Address:-  {user.address}</p>
                        </div>
                    </div>
                    <div className='font-semibold text-[black] mt-10  shadow-lg'>
                        <h1 className='text-center  font-bold'>Personalty  Details</h1>
                        <hr className='w-[200px] mt-4 mx-auto' />
                        <div className='grid  p-2 md:grid-cols-2  gap-2'>
                            <p>Time Of Birth:-  {user.time_of_birth} </p>
                            <p>Height:-  {user.height} </p>
                            <p>Blood Group:-  {user.blood_group} </p>
                            <p>Day Of Birth:-  {user.day_of_birth} </p>
                            <p>Weight:-  {user.weight} kg</p>
                            <p>Mother tonque:-  {user.mother_tonque}</p>
                            <p>Merried Status:-   {user.merried_status}</p>
                            <p>Maglic Details:-  {user.maglic}</p>
                            <p>Describe:-  {user.describe}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FullProfile
