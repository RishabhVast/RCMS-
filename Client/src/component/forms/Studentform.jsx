import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import studentStore from '../../stores/studentStore'
import standardStore from '../../stores/standardStore'
import divisionStore from '../../stores/divisionStore'

const Studentform = () => {
  const schema = yup.object().shape({
    standard: yup.string().required(),
    division: yup.string().required(),
    firstName: yup.string().min(3).max(50).required(),
    lastName: yup.string().min(3).max(50).required(),
    middleName: yup.string().min(3).max(50).required(),
    isActive: yup.boolean().required(),
    year: yup.string().required(),
    dob: yup.date().required(),

    parents: yup
      .object()
      .shape({
        firstName: yup.string().min(3).max(50).required(),
        lastName: yup.string().min(3).max(50).required(),
        phone: yup.string().min(10).max(10).required(),
        email: yup.string().required(),
        address1: yup.string().required(),
        address2: yup.string().required(),
        area: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zipcode: yup.string().required(),
        relationship: yup.string().required(),
      })
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const students = studentStore((state) => state.students)
  const addStudents = studentStore((state) => state.addStudents)
  const updateStudents = studentStore((state) => state.updateStudents)

  // objectId's
  //   retrieving the standard
  const standards = standardStore((state) => state.standards)
  const retrieveStandards = standardStore((state) => state.retrieveStandards)

  // retrieve the division
  const divisions = divisionStore((state) => state.divisions)
  const retrieveDivisions = divisionStore((state) => state.retrieveDivisions)

  useEffect(() => {
    retrieveStandards()
    retrieveDivisions()
  }, [])

  const params = useParams()

  useEffect(() => {
    const studentId = params.studentId
    console.log(`this is stud Id`, studentId)

    if (!studentId) return

    const student = students.find((student) => student._id === studentId)
    if (!student) return

    setValue('_id', student._id)
    setValue('firstName', student.firstName)
    setValue('middleName', student.lastName)
    setValue('lastName', student.lastName)
    setValue('standard', student.standard._id)
    setValue('division', student.division._id)
    setValue('isActive', student.isActive)
    setValue('dob', student.dob)
    setValue('year', student.year)
    setValue('parents.firstName', student.parents[0].firstName)
    setValue('parents.lastName', student.parents[0].lastName)
    setValue('parents.phone', student.parents[0].phone)
    setValue('parents.email', student.parents[0].email)
    setValue('parents.address1', student.parents[0].address1)
    setValue('parents.address2', student.parents[0].address2)
    setValue('parents.area', student.parents[0].area)
    setValue('parents.city', student.parents[0].city)
    setValue('parents.state', student.parents[0].state)
    setValue('parents.zipcode', student.parents[0].zipcode)
    setValue('parents.relationship', student.parents[0].relationship)
  })

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addStudents(data)
      console.log(` in the add`, data)
      navigate('/classteacher/students')
    } else {
      updateStudents(data)
      console.log(`in the update`, data)
      navigate('/classteacher/students')
    }
  }

  return (
    <div className="   h-screen justify-center ">
      <div class="block p-6 rounded-lg shadow-lg bg-gray-400  w-3/4 ml-40">
        <h1 className="font-bold text-2xl font-serif">STUDENTS DETAIL</h1>
        <form
          className="mt-10 font-serif "
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div class=" grid-cols-2 gap-4 flex">
            <div class="form-group mb-6">
              <label>First name</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="firstName"
                aria-describedby="emailHelp123"
                placeholder="First name"
                {...register('firstName')}
              />
              <p className="text-red-900">{errors.firstName?.message}</p>
            </div>

            <div class="form-group mb-6">
              <label>Middle name</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="middleName"
                aria-describedby="middleName"
                placeholder="Middle name"
                {...register('middleName')}
              />
              <p className="text-red-900">{errors.middleName?.message}</p>
            </div>

            <div class="form-group mb-6">
              <label>Last name</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="lastName"
                aria-describedby="lastName"
                placeholder="Last name"
                {...register('lastName')}
              />
              <p className="text-red-900">{errors.lastName?.message}</p>
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

            <div class="form-group mb-6 ml-2">
              <label>ACTIVE</label>
              <div className="form-group form-check mt-2 ml-2 ">
                <input
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-red-600  rounded border  border-black focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 border b-4 border-black"
                  id="isActive"
                  {...register('isActive')}
                />
                <p className="text-red-900">{errors.isActive?.message}</p>
                <span className="ml-2 mb-4">isActive</span>
              </div>
            </div>
          </div>

          <div class=" items-left ">
            <label for="floatingInput" class="text-gray-900">
              Enter DOB:-
            </label>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline  border border-solid border-gray-700"
                id="dob"
                type="date"
                {...register('dob')}
              />
              <p className="text-red-900">{errors.dob?.message}</p>
            </div>
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
          </div>
          <h1 className="font-bold text-2xl font-serif mb-4">PARENTS DETAIL</h1>
          <div class=" grid-cols-2 gap-4 flex">
            <div class="form-group mb-6">
              <label>First name</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.firstName"
                aria-describedby="emailHelp123"
                placeholder="First name"
                {...register('parents.firstName')}
              />
              <p className="text-red-900">
                {errors.parents?.firstName?.message}
              </p>
            </div>

            <div class="form-group mb-6">
              <label>Last name</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.lastName"
                aria-describedby="parents.lastName"
                placeholder="Last name"
                {...register('parents.lastName')}
              />
              <p className="text-red-900">
                {errors.parents?.lastName?.message}
              </p>
            </div>

            <div class="form-group mb-6 ">
              <label>Phone</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.phone"
                aria-describedby="parents.phone"
                placeholder="phone"
                {...register('parents.phone')}
              />
              <p className="text-red-900">{errors.parents?.phone?.message}</p>
            </div>
            <div class="form-group mb-6">
              <label>RELATIONSHIP</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.relationship"
                aria-describedby="parents.relationship"
                placeholder="Enter the Relation"
                {...register('parents.relationship')}
              />
              <p className="text-red-900">
                {errors.parents?.relationship?.message}
              </p>
            </div>
          </div>
          <div class="form-group mb-6 ">
            <label>Email</label>
            <div>
              <input
                type="email"
                class="form-control block
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
                id="parents.email"
                placeholder="Email address"
                {...register('parents.email')}
              />
              <p className="text-red-900">{errors.parents?.email?.message}</p>
            </div>
          </div>
          <div class="form-group mb-6 ">
            <label>ADDRESS LINE 1</label>
            <div>
              <input
                type="text"
                class="form-control block
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
                id="parents.address1"
                placeholder="Enter address "
                {...register('parents.address1')}
              />
              <p className="text-red-900">
                {errors.parents?.address1?.message}
              </p>
            </div>
          </div>
          <div class="form-group mb-6 ">
            <label>ADDRESS LINE 2</label>
            <div>
              <input
                type="text"
                class="form-control block
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
                id="parents.address2"
                placeholder="Enter address "
                {...register('parents.address2')}
              />
              <p className="text-red-900">
                {errors.parents?.address2?.message}
              </p>
            </div>
          </div>
          <div class=" grid-cols-2 gap-4 flex">
            <div class="form-group mb-6">
              <label>AREA</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.area"
                aria-describedby="AREA"
                placeholder="Enter Area"
                {...register('parents.area')}
              />
              <p className="text-red-900">{errors.parents?.area?.message}</p>
            </div>

            <div class="form-group mb-6">
              <label>CITY</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.city"
                aria-describedby="parents.city"
                placeholder="Enter City"
                {...register('parents.city')}
              />
              <p className="text-red-900">{errors.parents?.city?.message}</p>
            </div>
            <div class="form-group mb-6 ">
              <label>State</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="parents.state"
                aria-describedby="parents.state"
                placeholder="Enter State"
                {...register('parents.state')}
              />
              <p className="text-red-900">{errors.parents?.state?.message}</p>
            </div>
            <div class=" grid-cols-2 gap-4 flex">
              <div class="form-group mb-6">
                <label>ZIP CODE</label>
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="parents.zipcode"
                  aria-describedby="parents.zipcode"
                  placeholder="Enter zipcode"
                  {...register('parents.zipcode')}
                />
                <p className="text-red-900">
                  {errors.parents?.zipcode?.message}
                </p>
              </div>
            </div>
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
  )
}

export default Studentform
