import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authcheck, logout } from '../../redux/features/authSlice';

const LoginLogoutBtn = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
     dispatch(logout());
    navigate("/login"); // redirect to login page
  };
  const handleLogin=()=>{
    navigate("/login")
  }
  useEffect(()=>{
    dispatch(authcheck())
  },[])

  console.log(isLoggedIn)
  return (
    <div>
         <button
            className="bg-orange-400 text-white px-4 py-[5px] rounded hover:bg-orange-500 transition" onClick={isLoggedIn?handleLogout:handleLogin}
          >
           {isLoggedIn? "Logout":"Login"}
           
          </button>
    </div>
  )
}

export default LoginLogoutBtn