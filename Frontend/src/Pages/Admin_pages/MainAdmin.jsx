import React, { useContext,useEffect } from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { MainContxt } from '../../Context/MainContext';


const MainAdmin = () => {
    const { admin ,clearAdminData } = useContext(MainContxt);
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/admin/login");
    } 
    useEffect(
        () => {
            if (admin == null) {
                goToLogin()
            }
        },
        []
    )
    const AdminLogout = () => {
        clearAdminData();
        navigate('/admin/login');
    };
    
    return (
        <>
        <div className='w-full text-2xl px-6'>
            
                <ul className='flex text-[black]  font-bold bg-nav justify-between'>
                    <li><Link to={"/admin/create"}>Admin Create</Link></li>
                    <li><Link to="/admin/view">Admin View</Link></li>
                    <li><Link to="/admin/user">User View</Link></li>
                    <li><Link onClick={AdminLogout}>Logout</Link></li>
                </ul>
            
        </div>
        
          <div >
            <div className='text-2xl  text-center font-bold mx-auto mt-5'>
            welcome to hoga milan admin panel 
            </div>
            <Outlet/>
            
          </div>

          
          </>
    );
}
export default MainAdmin;
