
import React, { useState } from "react";
import axiosInstances from "../../utils/axiosInstances";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    course: "",
    password: "",
    role:"user"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    try {
      const {data}=await axiosInstances.post("/register",formData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className=" min-h-screen flex justify-end relative">
      
     <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Register Visual"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        />
      {/* Right Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center ">
        <form
          className="w-full max-w-md bg-[#ffffff37] p-8 rounded-xl shadow-lg space-y-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-yellow-400 underline mb-4">Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="tel"
            name="mobilenumber"
            placeholder="Mobile Number"
            value={formData.mobilenumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

         

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
         <p>
          allready created account click 
           <Link to="/login" className="text-blue-300 ps-3 hover:text-blue-600 hover:underline ">Login</Link>
         </p>
        </form>
         
      </div>
      
    </div>
  );
};

export default RegisterPage;
