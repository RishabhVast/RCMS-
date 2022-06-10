import React from 'react'
import loginStore from '../../stores/loginStore'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  // the user data will be available within the state
  const user = loginStore((state) => state.users)

  return (
    <div>
      <div>
        <div className="tabs-container">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-900 dark:text-gray-400 dark:border-gray-900 bg-gradient-to-r from-gray-700 to-gray-400">
            <ul className="flex flex-wrap -mb-px ">
              <li className="mr-2">
                <Link
                  to="/home/userrole"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    UserRoles
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/standards"
                  className="inline-block p-4 rounded-t-lg text-black border-b-2 border-transparent hover:text-black hover:border-red-900 dark:hover:text-black"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-green-300 via-green-600 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Standards
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/divisions"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-purple-400 via-purple-700 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Divisions
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/subjects"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Subjects
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/role"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    &nbsp;Roles&nbsp;
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/grades"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Grades
                  </button>
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/home/register"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-red-900 dark:hover:text-gray-300"
                >
                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Register
                  </button>
                </Link>
              </li>

              <span className=" text-2xl  font-serif  italic absolute text-black  mt-4  right-4  ">
                Welcome Back !
                <button
                  type="button"
                  className="ml-2 text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border border-black"
                >
                  {/* the current logged in user */}
                  {user.lastName}
                </button>
              </span>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
