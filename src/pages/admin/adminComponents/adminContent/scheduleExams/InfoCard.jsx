import React from 'react'

const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 p-4 border rounded-xl hover:shadow-md transition">
      <div className="p-2 bg-blue-100 text-blue-500 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default InfoCard