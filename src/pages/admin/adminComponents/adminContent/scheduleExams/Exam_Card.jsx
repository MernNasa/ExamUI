import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import axiosInstances from '../../../../../utils/axiosInstances';
import {  Tag } from "lucide-react";
import { Link } from 'react-router-dom';
const Exam_Card = ({exam}) => {
    // const [status,setStatus]=useState(false)
     const convertTime=(exdate)=>{
  const date = new Date(exdate);
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const time12Hour = date.toLocaleTimeString('en-IN', options);
  return time12Hour
 }
 const convertDate=(exdate)=>{
  const date = new Date(exdate);
  const dateOptions = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const formattedDate = date.toLocaleDateString('en-IN', dateOptions);

  return formattedDate
 }

//  const fetchquestions=async (id) => {
//     const {data}=await axiosInstances.get(`/getquestion/${exam._id}`)
//     if(data.data){
//         setStatus(true)
//     }
//     else{
//         setStatus(false)
//     }
//  }
// useEffect(()=>{
//     fetchquestions()
// },[])

   return(
    <div key={exam._id} className={`border w-80 relative rounded-xl p-5 shadow-md bg-white ${
    exam.status === "Ongoing" ? "border-2 animate-blink border-orange-500" : ""
  }`}>
           <Link className='p-2 bg-orange-300 rounded-lg absolute right-1 top-2 flex justify-center items-center gap-2' to="/exam_details" state={exam}>Details</Link>
            
            <h3 className="text-xl font-semibold text-blue-600">{exam.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Batch: {exam.category}</p>
            <p className="text-gray-700 mb-1">{exam.description}</p>
            <div className="text-sm text-gray-800 mt-2">
              <p><strong>Date:{convertDate(exam.scheduleDateTime)}</strong> </p>
              <p><strong>Time:</strong> {convertTime(exam.scheduleDateTime)}</p>
              <p><strong>Duration:</strong> {exam.duration} minutes</p>
              <p><strong>Total Questions:</strong> {exam.totalQuestions}</p>
              <p><strong>Marks:</strong>{exam.maxMarks}</p>
              <div className="flex items-center gap-3">
            <Tag className="text-blue-500" />
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${exam.status === "Scheduled" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {exam.status}
            </span>
          </div>
            </div>
          </div>
   )
}

export default Exam_Card