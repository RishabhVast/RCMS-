import React from 'react'
//import loginStore from '../../stores/loginStore'
import { Link, Outlet } from 'react-router-dom'

const Classteacher = () => {
  // the user data will be available within the state
  //const user = loginStore((state) => state.users)

  return (
    <div className="flex ">
      <aside class=" w-1/10 bg-red-900 shadow-lg h-screen">
        <div class="flex items-center justify-center p-4 shadow-lg">
          <div>
            <img
              src="https://i.imgur.com/c6U7KtF.png"
              alt=""
              class="h-8 mb-2"
            />
          </div>
          <h1 class="text-white font-bold mr-2 cursor-pointer">
            Welcome To RCMS!
          </h1>
        </div>
        <ul>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <Link to="/classteacher/dashboard">Dashboard</Link>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <Link to="/classteacher/students">
              {' '}
              <span> Students</span>
            </Link>
          </li>

          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <Link to="/classteacher/reports">
              {' '}
              <span> Reports</span>
            </Link>
          </li>
        </ul>
      </aside>

      <div class="w-10/12 bottom-10">
        <div class="p-4 text-white-500">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Classteacher
