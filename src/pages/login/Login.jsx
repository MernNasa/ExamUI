import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstances from '../../utils/axiosInstances';
import { useDispatch } from 'react-redux';
import { authcheck } from '../../redux/features/authSlice';
import Loading from '../../components/loaders/Loading';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
    const navigate=useNavigate()
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const dispatch=useDispatch() 
  const handleSubmit = async(e) => {
    e.preventDefault();
      setLoading(true);
    if (validate()) {
      // Simulated login logic
        try {
            const {data}=await axiosInstances.post("/login",formData)
            console.log(data)
            setSuccessMsg('Login successful!');
            console.log('Logged in:', formData);
            setFormData({ email: '', password: '' });
            setErrors({});
            setTimeout(() => setSuccessMsg(''), 3000);
            dispatch(authcheck())
            if(data.role==="admin"){
                navigate("/admin")
            }
            else if (data.role==="user"){
                navigate("/user")
            }
           // clear success msg
            
        } catch (error) {
            console.log(error.message)
        } finally {
      setLoading(false); // stop loading
    }
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 via-teal-400 to-emerald-400 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
     {
      loading?<Loading/>: <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">ExamApp Login</h2>

        {successMsg && (
          <div className="mb-4 text-green-600 font-semibold text-center">{successMsg}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`mt-1 w-full px-4 py-2 rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={`mt-1 w-full px-4 py-2 rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Sign In
          </button>

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
            <Link to="/forgot-password" className="hover:text-blue-600 hover:underline">Forgot Password?</Link>
            <Link to="/register" className="hover:text-blue-600 hover:underline">Create Account</Link>
          </div>
        </form>
      </div>
     }
    </div>
  );
};

export default Login;
