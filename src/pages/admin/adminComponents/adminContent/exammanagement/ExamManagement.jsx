import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExamTable from './ExamTable';
import axiosInstances from '../../../../../utils/axiosInstances';

const ExamManagement = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [totalExams,setTotalExams]=useState({
    totalExam:0,
    upcomingExam:0,
    ongoingExam:0,
    completedExam:0,
    cancelledExams:0
  })
  const {totalExam,upcomingExam,ongoingExam,completedExam,cancelledExams}=totalExams
  const [examDetail,setExamDetail]=useState({
    allExams:[],
    upcomingExam:[],
    ongoingExam:[],
    completedExam:[],
    cancelledExam:[]
  })
  const examStats = [
    { label: 'Total Exams', value: totalExam },
    { label: 'Upcoming Exams', value: upcomingExam },
    { label: 'Ongoing Exams', value: ongoingExam},
    { label: 'Completed Exams', value: completedExam },
    { label: 'Cancelled Exams', value: cancelledExams }
  ];


 
  const allexamDetails=async () => {
    const {data}=await axiosInstances.get("/exams")
    console.log(data)
    const {allExams}=data
    const upcoming = [];
    const ongoing = [];
    const completed = [];
    const cancelled = [];
    allExams.forEach((exam) => {
      switch (exam.status) {
        case "Scheduled":
          upcoming.push(exam);
          break;
        case "Ongoing":
          ongoing.push(exam);
          break;
        case "Completed":
          completed.push(exam);
          break;
        case "Cancelled":
          cancelled.push(exam);
          break;
        default:
          break;
      }
    });
    setExamDetail({
      allExams,
      upcomingExam: upcoming,
      ongoingExam: ongoing,
      completedExam: completed,
      cancelledExam: cancelled
    });

    setTotalExams({
      totalExam: allExams.length,
      upcomingExam: upcoming.length,
      ongoingExam: ongoing.length,
      completedExam: completed.length,
      cancelledExams: cancelled.length
    });
  }
useEffect(()=>{
  allexamDetails()
},[])
  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      {/* Create Exam Card */}
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 w-full flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Create a New Exam</h2>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          <NavLink to='/examcreation'>Create Now</NavLink>
        </button>
      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {examStats.map((stat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(stat.label)}
            className={`bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              selectedCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h3 className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Conditional Table Rendering */}
      {selectedCard === 'Total Exams' && (
        <ExamTable title="All Exam Details" data={examDetail.allExams} />
      )}

      {selectedCard === 'Upcoming Exams' && (
        <ExamTable title="Upcoming Exams" data={examDetail.upcomingExam} />
      )}

      {selectedCard === 'Ongoing Exams' && (
        <ExamTable title="Ongoing Exams ● Live" data={examDetail.ongoingExam} highlightLive />
      )}

      {selectedCard === 'Completed Exams' && (
        <ExamTable title="Completed Exams" data={examDetail.completedExam} />
      )}

      {selectedCard === 'Cancelled Exams' && (
        <ExamTable title="Cancelled Exams" data={examDetail.cancelledExam} />
      )}
    </div>
  );
}

export default ExamManagement