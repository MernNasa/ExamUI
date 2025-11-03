import React from 'react'
import {
  BarChart3,
  UsersIcon,
  ClipboardList,
  FileText,
  Sliders,
  HelpCircle,
} from 'lucide-react';
import { MdDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const menuItems = [
  { key: '', label: 'Dashboard Overview', icon: <BarChart3 size={20} />,isDefault:true },
  { key: 'usermanagement', label: 'User Management', icon: <UsersIcon size={20} /> },
  { key: 'exammanagement', label: 'Exam Management', icon: <ClipboardList size={20} /> },
  { key: 'resultmanagement', label: 'Results & Reports', icon: <FileText size={20} /> },
  { key: 'scheduledexams', label: 'Scheduled Exams', icon: <MdDateRange size={20} /> },
  { key: 'adminsettings', label: 'Settings', icon: <Sliders size={20} /> },
  { key: 'adminsupport', label: 'Support & Help', icon: <HelpCircle size={20} /> },
];
const Sidebar = () => {
   return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 space-y-7 border-r border-gray-200 dark:border-gray-700 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
    
      {menuItems.map(item => (
        <NavLink
          key={item.key}
          to={item.key}
          end={item.isDefault}
          className={({ isActive }) =>
    `flex items-center space-x-4 w-full text-left px-3 py-2 rounded-lg transition-all 
     ${isActive 
       ? 'bg-gray-600 text-white' 
       : 'hover:bg-gray-100 dark:hover:bg-gray-700'
     }`
  }
        >
          {item.icon}
          <span className="text-sm font-medium">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar