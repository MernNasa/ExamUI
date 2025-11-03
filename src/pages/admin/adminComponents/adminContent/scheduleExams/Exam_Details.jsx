import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CalendarDays, Clock, Trophy, ClipboardList, User, Tag } from "lucide-react";
import InfoCard from './InfoCard';
import { PlusCircle } from 'lucide-react';
import axiosInstances from '../../../../../utils/axiosInstances';

const Exam_Details = () => {
  const [Q_states,setQ_status]=useState(false)
  const { state } = useLocation();
  const exam = state;
  const navigate = useNavigate(); // hook to navigate to the previous page

const fetch_All_Question=async () => {
  const {data}=await axiosInstances.get(`/getquestion/${exam._id}`)
  if(data.q_status){
    setQ_status(false)
  }
  else{
    setQ_status(true)
  }
}

useEffect(()=>{
  fetch_All_Question()
},[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white relative">
          <button 
            onClick={() => navigate(-1)} // navigate to the previous page
            className="text-white mb-4 px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back
          </button>
          <h1 className="text-3xl font-bold">{exam.title}</h1>
          <p className="text-sm opacity-90 mt-1">Category: {exam.category}</p>
         {
          Q_states?<button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 absolute top-[50%] right-4" onClick={()=>navigate("/addquestions",{state:{exam}})}>
              <PlusCircle className="mr-2" /> {/* Icon from lucide-react */}
              Add Question
         </button>:""
         }
        </div>

        {/* Content */}
        <div className="p-4 space-y-5">
          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600">{exam.description}</p>
          </div>

          {/* Exam Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={<CalendarDays />} label="Schedule Date" value={new Date(exam.scheduleDateTime).toLocaleString()} />
            <InfoCard icon={<Clock />} label="Duration" value={`${exam.duration} mins`} />
            <InfoCard icon={<Trophy />} label="Max Marks" value={exam.maxMarks} />
            <InfoCard icon={<Trophy />} label="Passing Marks" value={exam.passingMarks} />
            <InfoCard icon={<ClipboardList />} label="Total Questions" value={exam.totalQuestions} />
            <InfoCard icon={<User />} label="Created By" value={exam.adminName} />
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <Tag className="text-blue-500" />
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${exam.status === "Scheduled" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {exam.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam_Details;
