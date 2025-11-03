import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstances from '../../../../../utils/axiosInstances';
const Add_Questions = () => {
 const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    marks:0
  });

  const navigate = useNavigate();
  const {state:{exam}}=useLocation()
  // console.log(exam)
//  const fetchExamDetails = async () => {
//   try {
//     const { data: { result: { totalQuestions } } } = await axiosInstances.get(`/exams/${exam._id}`);
//     console.log(totalQuestions);

//     // Create empty placeholders for each question
//     const emptyQuestions = Array.from({ length: totalQuestions }, () => ({
//       question: '',
//       options: ['', '', '', ''],
//       correctAnswer: '',
//       marks: 0
//     }));

//     setQuestions(emptyQuestions);
//   } catch (error) {
//     console.error('Failed to fetch exam details:', error);
//   }
// };

const fetchExamDetails = async () => {
  try {
    const { data: { result: { totalQuestions } } } = await axiosInstances.get(`/exams/${exam._id}`);

    const saved = localStorage.getItem(`exam_${exam._id}_questions`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuestions(parsed);
      setFormData(parsed[0]); // Load first question
      return;
    }

    const emptyQuestions = Array.from({ length: totalQuestions }, () => ({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      marks: 0
    }));

    setQuestions(emptyQuestions);
  } catch (error) {
    console.error('Failed to fetch exam details:', error);
  }
};


useEffect(()=>{
  fetchExamDetails()
},[])


  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    console.log(value)
    if (name === 'question' || name === 'correctAnswer' || name==='marks') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'option' && index !== null) {
      const updatedOptions = [...formData.options];
      updatedOptions[index] = value;
      setFormData(prev => ({ ...prev, options: updatedOptions }));
    }
  };



const handleSubmit = (e) => {
  e.preventDefault();

  const updatedQuestions = [...questions];
  updatedQuestions[currentQuestionIndex] = formData;
  setQuestions(updatedQuestions);

  // Save to localStorage
  localStorage.setItem(`exam_${exam._id}_questions`, JSON.stringify(updatedQuestions));

  if (currentQuestionIndex < updatedQuestions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setFormData(updatedQuestions[currentQuestionIndex + 1]);
  } else {
    setFormData({ question: '', options: ['', '', '', ''], correctAnswer: '', marks: 0 });
  }
};



  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
    setFormData(questions[index]);
  };

  const handleDone = () => {
    console.log('Final Questions:', questions);
     localStorage.removeItem(`exam_${exam._id}_questions`);
    // navigate('/aDashboard'); // Adjust route if needed
  };

  return (
    <div className="p-6 mt-5 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex gap-6">
      
      {/* Left Form Section */}
  
      <div className="w-3/4">
  <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
    Create {exam.title} Question
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Question Input */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Question
      </label>
      <input
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
        placeholder="Enter your question"
        required
      />
    </div>

    {/* Options in 2x2 Grid */}
    <div className="grid grid-cols-2 gap-4">
      {formData.options.map((option, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Option {index + 1}
          </label>
          <input
            type="text"
            name="option"
            value={option}
            onChange={(e) => handleChange(e, index)}
            className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
            placeholder={`Enter option ${index + 1}`}
            required
          />
        </div>
      ))}
    </div>

    {/* Correct Answer */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Correct Answer
      </label>
      <input
        type="text"
        name="correctAnswer"
        value={formData.correctAnswer}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
        placeholder="Enter correct answer"
        required
      />
    </div>

    {/* Marks */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Marks
      </label>
      <input
        type="number"
        name="marks"
        value={formData.marks}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
        placeholder="Enter marks"
        required
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-between">
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Save Question
      </button>
      <button
        type="button"
        onClick={handleDone}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
      >
        Done
      </button>
    </div>
  </form>
</div>


      {/* Right Question Number List */}
    
      <div className="w-1/4">
  <h3 className="text-lg font-semibold mb-2 text-center text-gray-700 dark:text-white">Questions</h3>
  
  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg max-h-96 overflow-y-auto">
    <div className="flex flex-wrap gap-4 justify-center">
     {questions.map((question, index) => {
  const isCurrent = index === currentQuestionIndex;
  const isFilled = question.question.trim() !== '';

  let buttonStyle = 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white'; // Default
  if (isCurrent) {
    buttonStyle = 'bg-blue-500 text-white';
  } else if (isFilled) {
    buttonStyle = 'bg-green-500 text-white';
  }

  return (
    <button
      key={index}
      onClick={() => handleQuestionSelect(index)}
      className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold ${buttonStyle} hover:opacity-90`}
    >
      {index + 1}
    </button>
  );
})}

    </div>
  </div>
</div>

    </div>
  );
}

export default Add_Questions