import React, { useEffect } from 'react'
import standardStore from '../../stores/standardStore'
import divisionStore from '../../stores/divisionStore'
import subjectStore from '../../stores/subjectStore'
import userStore from '../../stores/userStore'
import roleStore from '../../stores/roleStore'
import userroleStore from '../../stores/userroleStore'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const UserroleForm = () => {
  const schema = yup.object().shape({
    year: yup.number().required('year is requuired'),
    standard: yup.string().required(),
    division: yup.string().required(),
    subject: yup.string().required(),
    user: yup.string().required(),
    role: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  //   retrieving the standard
  const standards = standardStore((state) => state.standards)
  const retrieveStandards = standardStore((state) => state.retrieveStandards)

  // retrieve the division
  const divisions = divisionStore((state) => state.divisions)
  const retrieveDivisions = divisionStore((state) => state.retrieveDivisions)

  //retrieve the subject
  const subjects = subjectStore((state) => state.subjects)
  const retrieveSubjects = subjectStore((state) => state.retrieveSubjects)

  //retrieve the user
  const retrieveUser = userStore((state) => state.retrieveUser)
  const usersData = userStore((state) => state.users)

  const users = usersData.filter((user) => user.isAdmin !== true)
  console.log(users)

  //retrieve the role
  const roles = roleStore((state) => state.roles)
  const retrieveRoles = roleStore((state) => state.retrieveRoles)

  // retrieve userrole

  const addUser = userroleStore((state) => state.addUser)

  useEffect(() => {
    retrieveStandards()
    retrieveDivisions()
    retrieveSubjects()
    retrieveUser()
    retrieveRoles()
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    addUser(data)
    navigate('/home/userrole')
  }

  return (
    <div className="bg-teal-900 relative flex flex-col justify-top min-h-screen overflow-hidden">
      <div className=" w-1/2 ml-96  mt-10 bg-teal-900 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-900 dark:border-gray-900 space-x-12">
        <form className="space-y-8  " onSubmit={handleSubmit(onSubmitHandler)}>
          <span className=" text-xl font-medium text-gray-900 dark:text-white ml-44">
            USER_ROLE_FORM
          </span>
          <div>
            <label
              for="email"
              className="block mb-2 text-lg font-bold text-white dark:text-white"
            >
              ENTER YEAR
            </label>
            <input
              type="number"
              name="year"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Year : eg-2022"
              {...register('year')}
            ></input>
            <p className="text-red-900">{errors.year?.message}</p>
          </div>

          <label
            for="standardId"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Select an Standard
          </label>
          <select
            required
            id="standardId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('standard')}
          >
            <option selected>Choose a Standard</option>
            {standards.map((standard) => (
              <option key={standard._id} value={standard._id}>
                {standard.name}
              </option>
            ))}
          </select>

          <label
            for="countries"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Select an Division
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('division')}
          >
            <option selected>Choose a Division</option>
            {divisions.map((division) => (
              <option key={division._id} value={division._id}>
                {division.name}
              </option>
            ))}
          </select>
          <label
            for="countries"
            className="block text-sm font-medium text-white dark:text-white"
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

          <label
            for="countries"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Select an User
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('user')}
          >
            <option selected>Choose a User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.firstName}
              </option>
            ))}
          </select>

          <label
            for="countries"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Select an Role
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('role')}
          >
            <option selected>Choose a Role</option>
            {roles.map((role) => (
              <option key={role._id} value={role._id}>
                {role.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserroleForm
