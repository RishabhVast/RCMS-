import React from 'react'
import { useEffect } from 'react'
import testStore from '../../stores/testStore'
import studentStore from '../../stores/studentStore'
import gradeStore from '../../stores/gradeStore'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import axios from '../../http.common'

const ResultForm = () => {
  const schema = yup.object().shape({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitHandler = () => {
    const arr = []
    for (const key of Object.keys(marksArray)) {
      arr.push(marksArray[key])
    }
    console.log(arr)
    axios.post('studenttestresults', arr)
  }

  //test store to display the data on top details of test
  const test = testStore((state) => state.test)
  const getTest = testStore((state) => state.getTest)

  //student store to map the data in the table for list of students
  const students = studentStore((state) => state.students)
  const retrieveStudents = studentStore((state) => state.retrieveStudents)

  //student store to map the data in the table for list of students
  const grades = gradeStore((state) => state.grades)
  const retrieveGrades = gradeStore((state) => state.retrieveGrades)

  useEffect(() => {
    getTest(testId)
    retrieveStudents()
  }, [])

  useEffect(() => {
    retrieveGrades()
  }, [])

  const params = useParams()
  const testId = params.testId
  // const test = tests.filter((test) => test && test._id === testId)[0]
  console.log(`in the returned test`, test)

  const marksArray = {}

  const getGrade = (obtainedMarks) => {
    let studentResult = ''
    grades.map((grade) => {
      if (obtainedMarks >= grade.start && obtainedMarks <= grade.end) {
        studentResult = grade._id
        return studentResult
      }
    })

    return studentResult
  }

  let counter = 1
  const addMarks = (e, student) => {
    marksArray[student._id] = {
      student: student._id,
      obtainedMarks: Number(e.target.value),
      test: test._id,
      grade: getGrade(e.target.value),
    }
  }

  return (
    <div className="form-container">
      <div className="bg-gray-300  font-serif">
        <div className="align-middle  inline-block w-full  overflow-hidden  bg-gray-900  px-12 ">
          <div className="text-white text-lg  font-bold flex justify-center text-decoration underline">
            {' '}
            <h1>TEST DETAILS </h1>
          </div>

          <div className="flex justify-between  w-screen">
            <div className="flex flex-wrap items-stretch w-full h-full  relative">
              <div className="flex justify-center ">
                <div className="mb-3 xl:w-96">
                  <div className="container mx-auto whitespace-nowrap  text-white text-sm font-bold text-decoration underline flex ">
                    <table className="w-full ">
                      <tbody>
                        <tr className="" key={test?._id}>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            TEST NAME :- {test?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            TOTAL MARKS :- {test?.totalMarks}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            DIVISION :- {test?.division?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            STANDARD :- {test?.standard?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            SUBJECT :- {test?.subject?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-4 py-2"
                          >
                            YEAR :- {test?.year}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white bg-gray-900 text-lg  flex justify-center text-decoration underline font-bold w-full">
          {' '}
          <h1>ADD RESULT </h1>
        </div>
        <form className="font-serif " onSubmit={handleSubmit(onSubmitHandler)}>
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
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-700 dark:border-white text-white font-bold text-sm mt-4"
                      key={student._id}
                    >
                      <td className="text-left            px-6  py-2 ">
                        {counter++}
                      </td>
                      <td className="flex justify-left    px-6   py-2">
                        {student.firstName} {student.middleName}{' '}
                        {student.lastName}
                      </td>

                      <td className="justify-left   px-6  py-2">
                        <div class="flex justify-left">
                          <div class="mb-3 xl:w-96">
                            <input
                              type="number"
                              class="form-control
                                  block
                                  w-1/2
                                  px-3
                                
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-black
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="obtainedMarks"
                              placeholder="Enter Obtained Marks"
                              onBlur={(e) => addMarks(e, student)}
                            />
                          </div>
                        </div>
                      </td>

                      <tr className="bg-white border-black" />
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=" mt-5 ml-96">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResultForm
