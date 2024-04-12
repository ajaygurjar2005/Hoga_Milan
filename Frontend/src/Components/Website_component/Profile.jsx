import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [product, setProduct] = useState([]);
    const [valid, setValid] = useState(true);
    const [visibleProducts, setVisibleProducts] = useState(6)

    useEffect(() => {
        axios.get("http://localhost:8000/user")
            .then((success) => {
                if (success.status === 200) {
                    setProduct(success.data.data);

                }
                // console.log(success.data);
            })
            .catch((error) => {
                setProduct([]);
                console.log(error, 'error');
            });
            varify();
    }, []);
    const loadMore = () => {
        setVisibleProducts((prevVisible) => prevVisible + 3); // Increase the number of visible items by 4
    };

    const varify = () => {
        const token = sessionStorage.getItem('accesstoken')
        // console.log(token)
        if (token == null) {
            setValid(false)
        }
        else{
            setValid(true)
        }
    }



    return (
        <div>
            <div className='grid grid-cols-4 gap-10'>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-4  gap-4 justify-center '>

                {product.slice(0, visibleProducts).map((data, index) => {
                    
                    return (

                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }} key={index} className='w-[240px] p-1 m-[40px]     '>

                            <div className="md:w-[200px] flex  h-[100px] md:h-[200px] border mt-[15px] ml-[15px]">
                                <img className="w-full  h-400" src={data.image} alt="image" />
                            </div>
                            <div className='flex justify-between mt-2  flex-col '>
                                <div>
                                    <h1 className=' md:text-[20px]: text-[13px] mb-2 ml-[15px]'>{data.username}</h1>
                                </div>
                                <div>
                                    <h1 className=' md:text-[20px]: text-[13px] mb-2 ml-[15px]'>Gender:-{data.gender}</h1>
                                </div>
                                <div>
                                    <h1 className='  md:text-[20px]: text-[13px]  mb-2 ml-[15px]'>Age: {data.dob} year</h1>
                                </div>
                                <div>
                                    <h1 className=' md:text-[20px]: text-[13px] mb-2 ml-[15px]'>Prof.:-{data.employein}</h1>
                                </div>

                                <button className="hover:bg-[#c32143] md:text-[20px]: text-[16px] p-2 text-[black] hover:text-[white] font-semibol   border  rounded">
                                   {valid ? <Link to={`/user/${data._id}`}>View Now</Link> : <Link to={'/login'}>View Now</Link> } 
                                </button>
                            </div>
                        </div>

                    )
                })
                }
            </div>
            <div className='flex mt-10 justify-center items-center'>
                <button onClick={loadMore} type="button" className="text-white bg-[pink]  from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Load more
                </button>
            </div>
        </div>

    );
}




export default Profile;
