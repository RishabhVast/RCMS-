import React from 'react'
import { Link } from 'react-router-dom'

const Students = () => {
  return (
    <div>
      hey there this is the students page
      <Link
        to="/home/standards"
        className="inline-block p-4 rounded-t-lg text-black border-b-2 border-transparent hover:text-black hover:border-red-900 dark:hover:text-black"
      >
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Standards
        </button>
      </Link>
    </div>
  )
}

export default Students
