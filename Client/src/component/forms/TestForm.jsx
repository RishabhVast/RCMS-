import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import subjectStore from '../../stores/subjectStore'
import standardStore from '../../stores/standardStore'
import divisionStore from '../../stores/divisionStore'
import testStore from '../../stores/testStore'

const TestForm = () => {
  const schema = yup.object().shape({
    standard: yup.string().required(),
    division: yup.string().required(),
    subject: yup.string().required(),
    name: yup.string().min(3).max(20).required(),
    totalMarks: yup.number().required(),
    year: yup.string().required(),
    highestMarks: yup.number(),
    averageMarks: yup.number(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const addTest = testStore((state) => state.addTest)

  // objectId's
  //   retrieving the standard
  const standards = standardStore((state) => state.standards)
  const retrieveStandards = standardStore((state) => state.retrieveStandards)

  // retrieve the division
  const divisions = divisionStore((state) => state.divisions)
  const retrieveDivisions = divisionStore((state) => state.retrieveDivisions)

  // retrieve the subjects
  const subjects = subjectStore((state) => state.subjects)
  const retrieveSubjects = subjectStore((state) => state.retrieveSubjects)

  useEffect(() => {
    retrieveDivisions()
    retrieveSubjects()
    retrieveStandards()
  }, [])

  const navigae = useNavigate()

  const onSubmitHandler = (data) => {
    addTest(data)
    navigae('/subteacher/test')
  }

  return (
    <div className="form-container text-black">
      <div className=" justify-center ">
        <div class="block p-6 rounded-lg shadow-lg bg-gray-400  w-1/2 ml-40">
          <h1 className="font-bold text-2xl font-serif justify-center items-center">
            ENTER TEST DETAIL
          </h1>
          <form
            className="mt-5 font-serif "
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div class="form-group mb-6">
              <label>TEST NAME </label>
              <input
                type="text"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
         text-gray-900
          bg-white bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                id="name"
                aria-describedby="NAME"
                placeholder="Enter test name"
                {...register('name')}
              />
              <p className="text-red-900">{errors.name?.message}</p>
            </div>

            <div class="form-group mb-6">
              <label>TOTAL MARKS</label>
              <input
                type="number"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
         text-gray-900
          bg-white bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="totalMarks"
                aria-describedby="totalMarks"
                placeholder="Enter the total marks"
                {...register('totalMarks')}
              />
              <p className="text-red-900">{errors.totalMarks?.message}</p>
            </div>

            <div class="form-group mb-6 ">
              <label>YEAR</label>
              <input
                type="number"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
         text-gray-900
          bg-white bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="year"
                aria-describedby="year"
                placeholder="year"
                {...register('year')}
              />
              <p className="text-red-900">{errors.year?.message}</p>
            </div>

            <div class="form-group mb-6 ">
              <label
                for="countries"
                className="block text-lg font-medium text-gray-900"
              >
                Select an Division
              </label>
              <select
                id="division"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-600 "
                {...register('division')}
              >
                <p className="text-red-900">{errors.division?.message}</p>
                <option>Choose a Division</option>
                {divisions.map((division) => (
                  <option key={division._id} value={division._id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>

            <div class="form-group mb-6 ">
              <label
                for="standardId"
                className="block text-lg font-medium text-black dark:text-black"
              >
                Select an Standard
              </label>
              <select
                id="standard"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-600"
                {...register('standard')}
              >
                <option>Choose a Standard</option>
                {standards.map((standard) => (
                  <option key={standard._id} value={standard._id}>
                    {standard.name}
                  </option>
                ))}
              </select>
              <p className="text-red-900">{errors.standard?.message}</p>

              <label
                for="countries"
                className="block text-lg font-medium text-black dark:text-black mt-4"
              >
                Select an Subject
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('subject')}
              >
                <option selected>Choose a Subject</option>
                {subjects.map((subject) => (
                  <option key={subject._id} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              class="
      w-full
      px-6
      py-2.5
     bg-black
      text-white   

      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TestForm
