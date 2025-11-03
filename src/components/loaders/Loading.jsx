import React from 'react'

const Loading = () => {
   return (
    <div className="flex justify-center items-center space-x-2 min-h-screen">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
    </div>
  );
}

export default Loading