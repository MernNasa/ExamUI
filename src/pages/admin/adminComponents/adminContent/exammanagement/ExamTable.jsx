import React from 'react'

const ExamTable = ({ title, data, highlightLive }) => {
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
   console.log(data)
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">
        {title} {highlightLive && <span className="text-red-500">●</span>}
      </h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
            <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
            <th className="p-3 border dark:border-gray-600 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length===0?
          <tr>
            <td colSpan='3' className='text-center pt-3'>No Exam Found</td>
          </tr>
          :data.map((exam, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-3 border dark:border-gray-600">{exam.category}</td>
              <td className="p-3 border dark:border-gray-600">{exam.title}</td>
              <td className="p-3 border dark:border-gray-600">{convertDate(exam.scheduleDateTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamTable