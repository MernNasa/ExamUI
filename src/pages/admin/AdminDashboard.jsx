import React, { useState }  from 'react'
import Sidebar from './adminComponents/Sidebar';
import MainContent from './adminComponents/MainContent';
import Nav from './adminComponents/Nav';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  

  return (
    <div className="flex h-screen">
      <Sidebar  />
      <div className="flex-1 flex flex-col">
        <Nav/>
        
          <Outlet/>
       
      </div>
    </div>
  );
}

export default AdminDashboard