import React from 'react'
//import loginStore from '../../stores/loginStore'
import { Link, Outlet } from 'react-router-dom'

const Subteacher = () => {
  // the user data will be available within the state
  //const user = loginStore((state) => state.users)

  return (
    <div className="flex bg-gray-300   font-serif">
      <aside class=" w-1/10 bg-pink-900 shadow-lg h-screen">
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
            <Link to="/subteacher/subtdashboard">DASHBOARD</Link>
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
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <Link to="/subteacher/test">
              {' '}
              <span> TEST</span>
            </Link>
          </li>

          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer font-serif">
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
            <Link to="/subteacher/result">
              {' '}
              <span> RESULT</span>
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

export default Subteacher
