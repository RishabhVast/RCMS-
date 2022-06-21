import React, { useEffect } from 'react'
import subjectStore from '../../stores/subjectStore'
import { Link } from 'react-router-dom'

const Subjects = () => {
  const subjects = subjectStore((state) => state.subjects)
  const retrieveSubjects = subjectStore((state) => state.retrieveSubjects)
  const deleteSubject = subjectStore((state) => state.deleteSubject)

  useEffect(() => {
    retrieveSubjects()
  }, [])

  let counter = 1

  return (
    <div className="subject-container">
      <div className=" bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 hover:bg-gradient-to-br relative flex flex-col justify-top min-h-screen overflow-hidden">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="">
            <div className="flex justify-center overflow-hidden">
              <table className="absolute mt-10  text-center w-1/2">
                <thead className="font-bold font-serif border border-black bg-gray-800">
                  <tr>
                    <th scope="col" className=" font-bold text-white px-6 py-4">
                      #
                    </th>
                    <th scope="col" className=" font-bold text-white px-6 py-4">
                      Subjects
                    </th>
                    <th scope="col" className=" font-bold text-white px-6 py-4">
                      Update
                    </th>
                    <th scope="col" className=" text-white px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr
                      className=" bg-gray-300  border border-black"
                      key={subject._id}
                    >
                      <td className="px-6 py-2 whitespace-nowrap text-sm  text-gray-900 font-bold">
                        {counter++}
                      </td>
                      <td className="font-bold text-black font-dark px-6 py-2 whitespace-nowrap">
                        {subject.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          <Link to={`/home/subject/form/${subject._id}`}>
                            Update
                          </Link>
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          onClick={() => {
                            deleteSubject(subject._id).then(() =>
                              retrieveSubjects(),
                            )
                          }}
                        >
                          Delete
                        </button>
                      </td>
                      <tr className="bg-white border-black" />
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="absolute mt-10 left-8 grid justify-items-start p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Adding a new Subject!
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Click on the Button below to add!
                </p>
                <Link
                  to="/home/subject/form"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Subjects
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subjects
