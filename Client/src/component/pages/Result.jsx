import React, { useEffect } from 'react'
import studentStore from '../../stores/studentStore'

const Result = () => {
  //student store to map the data in the table for list of students
  const students = studentStore((state) => state.students)
  const retrieveStudents = studentStore((state) => state.retrieveStudents)

  useEffect(() => {
    retrieveStudents()
  }, [])

  let counter = 1

  return (
    <div className="bg-gray-300  font-serif">
      <form className="font-serif ">
        <div className=" ">
          <div className="">
            <table className=" mt-1   text-sm text-center text-gray-500 dark:text-gray-400 w-full  ">
              <thead className="text-lg text-white  uppercase bg-gray-900 dark:bg-gray-900  dark:text-white  ">
                <tr>
                  <th scope="col" className=" px-6 py-2 text-left">
                    SR.NO
                  </th>
                  <th scope="col" className=" px-6 py-2 text-left">
                    STUDENTS
                  </th>
                  <th scope="col" className=" px-6 py-2 text-left">
                    MARKS OBTAINED
                  </th>
                  <th scope="col" className=" px-6 py-2 text-left">
                    GRADE
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 text-white font-bold text-sm mt-4"
                    key={student._id}
                  >
                    <td className="text-left  px-6  py-2 ">{counter++}</td>
                    <td className="flex justify-left   px-6   py-2">
                      {' '}
                      {student.firstName} {student.middleName}{' '}
                      {student.lastName}
                    </td>

                    <td className="justify-left   px-6  py-2"></td>

                    <td className="  px-6   py-2"></td>
                    <tr className="bg-white border-black" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Result
