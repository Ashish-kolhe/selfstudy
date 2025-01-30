import React from 'react'

const NAV2 = () => {
  return (
    <div>
   <div className="navbar bg-white text-gray-900 px-4">
  <div className="flex-1">
  <img className='w-10 lg:w-12 rounded-full m-1' src="./Logo.png" alt="" />
  <a className="text-base lg:text-xl font-extrabold text-gray-800" >SelfStudy</a>
  </div>
  <div className="flex-none">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Ashish"
            src="./Ashish.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>My Courses</a></li>
        <li><a className='p-2 border-2 border-blue-600 '>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NAV2