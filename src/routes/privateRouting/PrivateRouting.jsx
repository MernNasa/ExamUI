import React, { useEffect, useState } from 'react';
import axiosInstances from '../../utils/axiosInstances';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/loaders/Loading';

const PrivateRouting = ({ children, requiredRole }) => {
  const [user, setUser] = useState(null);       // ✅ start with null
  const [loading, setLoading] = useState(true); // ✅ add loading state

  useEffect(() => {
    const validatetoken = async () => {
      try {
        const { data: { userdetails } } = await axiosInstances.get("/findme");
        setUser(userdetails);
      } catch (err) {
        console.error("Token validation failed:", err);
        setUser(null); // not logged in or invalid token
      } finally {
        setLoading(false);
      }
    };
    validatetoken();
  }, []);


  if (loading) return <Loading/>;


  if (!user || user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Role matches
  return children;
};

export default PrivateRouting;
