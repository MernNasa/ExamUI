import React, { useEffect, useState } from 'react';
import axiosInstances from '../../../../../utils/axiosInstances';

import Exam_Card from './Exam_Card';
const Schedule_Exams = () => {
      const [allExams,setAllExams]=useState([])
const mockExamData = [
    {
      id: 1,
      batchName: 'MERN',
      title: 'React Final',
      description: 'Final exam covering React fundamentals and hooks.',
      scheduleDate: '2025-04-20',
      scheduleTime: '10:00',
      duration: 60,
      maxMarks: 100,
      passMarks: 40,
      totalQuestions: 25
    },
    {
      id: 2,
      batchName: 'Python',
      title: 'Django Midterm',
      description: 'Midterm test for Django basics and models.',
      scheduleDate: '2025-04-24',
      scheduleTime: '14:00',
      duration: 45,
      maxMarks: 80,
      passMarks: 32,
      totalQuestions: 20
    }
  ];

  const fetchadminexams=async()=>{
    const {data}=await axiosInstances.get("/exams")

    setAllExams(data.allExams)
  }


console.log(allExams)
  useEffect(()=>{
    fetchadminexams()
  },[])
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 overflow-scroll">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Scheduled Exams</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
       {allExams.length===0?<h1>No exams created</h1>: allExams.map((exam) => (
         <Exam_Card exam={exam}/>
        ))}
      </div>
    </div>
  );
}

export default Schedule_Exams