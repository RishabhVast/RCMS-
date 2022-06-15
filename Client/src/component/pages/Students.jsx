import React from 'react'
import { useEffect } from 'react'
import studentStore from '../../stores/studentStore'
import { Link } from 'react-router-dom'

const Students = () => {
  const students = studentStore((state) => state.students)
  const deleteStudents = studentStore((state) => state.deleteStudents)
  const retrieveStudents = studentStore((state) => state.retrieveStudents)

  useEffect(() => {
    retrieveStudents()
  }, [students])

  return (
    <div className="students-container">
      <div className="w-full  ">
        <div className="align-middle  inline-block w-full py-4 overflow-hidden  bg-pink-900 shadow-lg px-12 ">
          <div className="flex justify-between ">
            <div className="flex flex-wrap items-stretch w-full h-full  relative">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="container mx-auto py-4 text-black">
                    <input
                      id="searchfield"
                      type="search"
                      placeholder="Search..."
                      autofocus="autofocus"
                      className="w-full text-black transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal   rounded-lg"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex justify items-center  absolute right-0">
                {' '}
                <Link to="/classteacher/studentsform">
                  <button
                    type="button"
                    className=" py-2.5 px-5 mr-2 mb-2  mt-2 text-sm font-bold text-white focus:outline-none bg-white rounded-lg border border-white  border-white bg-transparent hover:bg-blue-700 "
                  >
                    Add Students
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-600 shadow-dashboard px-8 pt-10 rounded-bl-lg rounded-br-lg bg-gray-600">
        <table className="min-w-full ">
          <thead className="font-bold ">
            <tr className="text-lg bg-black">
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                FIRST NAME
              </th>

              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                LAST NAME
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                STANDARD
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                DIVISION
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                YEAR
              </th>

              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                PARENTS
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                ISACTIVE
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="  bg-pink-900 text-white ">
            {students.map((student) => (
              <tr className=" border-b-2 border-black" key={student._id}>
                <td className="px-6 py-4 whitespace-no-wrap  font-bold leading-5">
                  {student.firstName}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.lastName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.standard.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.division.name}
                </td>
                <td className=" text-left px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.year}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.parents[0].firstName}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {student.isActive.toString()}
                </td>
                <td className=" px-6 py-4   whitespace-no-wrap   font-bold leading-5 flex mr-20">
                  <button className="px-5 py-2 border-white border text-white rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">
                    Update
                  </button>
                  <button
                    className="px-5 py-2 ml-4 border-white border text-white rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                    onClick={() => {
                      deleteStudents(student._id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
