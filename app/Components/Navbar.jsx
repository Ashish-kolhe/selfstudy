import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-white px-5 ">
  <div className="navbar-start">
   <img className='w-10 lg:w-12 rounded-full m-1' src="./Logo.png" alt="" />
    <a className="text-base lg:text-xl font-extrabold text-gray-800" href='/browse' >SelfStudy</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-gray-800">
      <li><a href='/'>Home</a></li>
      <li>
        <details>
          <summary>Browse</summary>
          <ul className="p-2">
            <li><a href='/browse'>Courses</a></li>
           
          </ul>
        </details>
      </li>
      <li><a href='/browse'>Resources</a></li>
      
    </ul>
   
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-gray-800">
   <li><a href='/'>Home</a></li>
        <li>
          <a>Browse</a>
          <ul className="p-2">
          <li><a href='/browse'>Courses</a></li>
            
          </ul>
        </li>
        <li><a href='/browse'>Resources</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar