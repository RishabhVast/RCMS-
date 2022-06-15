import React from 'react'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="container">
        <main class="flex-col bg-indigo-100 w-full ml-4 pr-6">
          <div class="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg">
            <h1 class="text-xl font-bold text-gray-700">Welcome to RCMS</h1>
            <div class="flex justify-between w-2/5">
              <div class="flex items-center border-2 p-2 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  class="ml-2 outline-none w-full"
                />
              </div>
              <div class="flex items-center space-x-6 pr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 cursor-pointer text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <img
                  src="https://i.imgur.com/iH7hkQb.png"
                  alt=""
                  class="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4 space-x-4 s">
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">534</h1>
                <span class="text-gray-500">Coaches</span>
              </div>
            </div>
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">9.7k</h1>
                <span class="text-gray-500">Kids</span>
              </div>
            </div>
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">50 M</h1>
                <span class="text-gray-500">Revenue</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
              <h1 class="text-xl font-bold text-gray-800 mt-4">
                Todays Status
              </h1>
              <div class="flex justify-between space-x-4 text-center mt-6">
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>8.7K</h3>
                  <spnan>Total Present</spnan>
                </div>
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>99</h3>
                  <spnan>Registrations</spnan>
                </div>
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>30</h3>
                  <spnan>Totals Session</spnan>
                </div>
              </div>
            </div>
            <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
              <h1 class="text-xl font-bold text-gray-800 mt-4">
                Todays Status
              </h1>
              <div class="flex justify-between space-x-4 text-center mt-6">
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>8.7K</h3>
                  <spnan>Total Present</spnan>
                </div>
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>99</h3>
                  <spnan>Registrations</spnan>
                </div>
                <div class="bg-indigo-50 rounded-xl p-10">
                  <h3>30</h3>
                  <spnan>Totals Session</spnan>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
