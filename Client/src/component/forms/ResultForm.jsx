import React from 'react'
import { useEffect } from 'react'
import testStore from '../../stores/testStore'
import studentStore from '../../stores/studentStore'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const ResultForm = () => {
  const schema = yup.object().shape({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitHandler = () => {}

  //test store to display the data on top details of test
  const test = testStore((state) => state.test)
  const getTest = testStore((state) => state.getTest)

  //student store to map the data in the table for list of students
  const students = studentStore((state) => state.students)
  const retrieveStudents = studentStore((state) => state.retrieveStudents)

  useEffect(() => {
    getTest(params.testId)
    retrieveStudents()
  }, [])

  const params = useParams()
  const testId = params.testId
  // const test = tests.filter((test) => test && test._id === testId)[0]
  console.log(`in the returned test`, test)

  const marksArray = {}

  let counter = 1
  const addMarks = (e, student) => {
    console.log(`in the stude`, student)
    marksArray[student._id] = {
      student: student._id,
      obtainedMarks: e.target.value,
      test: test._id,
      obtainedGrade: 'A',
    }
    console.log(marksArray)
  }

  return (
    <div className="form-container">
      <div className="bg-gray-300  font-serif">
        <div className="align-middle  inline-block w-full py-4 overflow-hidden  bg-gray-900 shadow-lg px-12 ">
          <div className="text-white text-3xl  font-bold flex justify-center text-decoration underline">
            {' '}
            <h1>TEST DETAILS </h1>
          </div>

          <div className="flex justify-between ">
            <div className="flex flex-wrap items-stretch w-full h-full  relative">
              <div className="flex justify-center ">
                <div className="mb-3 xl:w-96">
                  <div className="container mx-auto whitespace-nowrap  text-white text-2xl font-bold text-decoration underline flex ">
                    <table className="w-full ">
                      <tbody>
                        <tr className="" key={test?._id}>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
                          >
                            TEST NAME :- {test?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
                          >
                            TOTAL MARKS :- {test?.totalMarks}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
                          >
                            DIVISION :- {test?.division?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
                          >
                            STANDARD :- {test?.standard?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
                          >
                            SUBJECT :- {test?.subject?.name}
                          </th>
                          <th
                            scope="col"
                            className=" font-bold text-white px-8 py-8"
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
        <div className="text-white bg-gray-900 text-3xl  flex justify-center text-decoration underline font-bold">
          {' '}
          <h1>ADD RESULT </h1>
        </div>
        <form
          className="mt-10 font-serif "
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="object-center   overflow-x-auto sm:-mx-6 lg:-mx-8 font-bold ">
            <div className=" inline-block w-full sm:px-6 lg:px-8">
              <div className="relative overflow-x-auto shadow-md ">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400  ">
                  <thead className="text-2xl text-white  uppercase bg-gray-700 dark:bg-gray-700  dark:text-white  h-16">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        SR.NO
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        STUDENTS
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        MARKS OBTAINED
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GRADE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-400 dark:border-gray-700 text-black font-bold text-lg"
                        key={student._id}
                      >
                        <td className="px-6 py-4  text-left">{counter++}</td>
                        <td className=" px-6 py-4 flex justify-left">
                          {student.firstName} {student.middleName}{' '}
                          {student.lastName}
                        </td>
                        <td className="px-6 py-4 justify-left">
                          <div class="flex justify-left">
                            <div class="mb-3 xl:w-96">
                              <input
                                type="number"
                                class="form-control
                                  block
                                  w-1/2
                                  px-3
                                  py-1.5
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
                        <td className="px-6 py-4"></td>
                        <tr className="bg-white border-black" />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResultForm
