import React from 'react'
import {Link, Navigate, Route, Routes , NavLink} from 'react-router-dom';

import Dashboard from  './Dashboard';
import Userprofile from './Userprofiles';
import PostureDetection from './PostureDetection';
import TrainerChat from './Trainerchat';
import WorkoutScheduling from  './WorkoutScheduling';
import ProgressAnalysis  from './ProgressAnalysis';
import Healthinputs  from './Healthinputs';
import Settings from './Settings';
import AIFitnessAssistant  from './AIFitnessAssistant';
import Subscription from './Subscription';
import ExerciseRecommendation from './ExerciseRecommendation';


// import Logo from '../assets/images/travel-logo.png'
// import IconLogo from '../assets/images/icon-logo.png';

import { RiDashboardLine} from "react-icons/ri";
import { LuUsersRound } from "react-icons/lu";
import { MdCardTravel, MdOutlineGroups , MdAttachMoney } from "react-icons/md";
import { GoShield } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";





function AdminHome() {

  return (
    
    <div className='flex'>
        {/* sidebar */}
        <div className='bg-[#093056] w-[200px] flex flex-col fixed top-0 left-0 h-screen overflow-y-auto'>
          {/* logo */}
          <div className='flex py-[20px] items-center px-[10px]'>
            {/* <img src={IconLogo} className='w-[40px] h-[40px] mr-[8px] bg-white rounded-[20px] p-[5px]' alt='icon logo' /> */}
            {/* <img src={Logo} className='w-[100px]' /> */}
          </div>
          {/* separation line */}
          <div className='w-[100%] h-[1px] bg-[#c9c2c2]'></div>

          {/* menu links */}
          <div className='px-[10px] flex flex-col py-[15px] gap-[5px]'>
            {menuItems.map((item, index) => (
              <NavLink
              to={`/AdminHome/Dashboard`}
              className={({isActive}) => 
                `flex items-center px-1 py-1 rounded-md cursor-pointer text-[#c9c2c2] ${
                  isActive ? "bg-[#c9c2c2]/20 text-white" : "hover:bg-[#c9c2c2]/20 hover:text-white"
                }`
              }
            >
              <RiDashboardLine className='mr-[12px]'/>
              Dashboard
            </NavLink>
            ))}
          </div>
        </div>
        <div className='flex-1 ml-[200px]'>
          <Routes>
            <Route path='/' element={<Navigate to={'Dashboard'}/>} />
            <Route path='Dashboard' element={<Dashboard/>}/>
            <Route path='WorkoutScheduling' element={<WorkoutScheduling/>}/>
            <Route path='userprofile' element={<Userprofile/>} />
            <Route path='Healthinputs' element={<HealthInputs/>} />
            <Route path='PostureDetection' element={<PostureDetection/>} />
            <Route path='ExerciseRecommendation' element={<ExerciseReccomendation/>} />
            <Route path='Trainerchats' element={<TrainerChat/>} />
            <Route path='AIFitnessAssistant' element={<AIFitnessAssistant/>} />
            <Route path='Settings' element={<Settings/>} />
            <Route path='progressAnalysis' element={<progressAnalytical/>}/>
            <Route path='Subscription' element={<Subscription/>}/>
          </Routes>
        </div>
        
    </div>
    
  )
}

export default AdminHome