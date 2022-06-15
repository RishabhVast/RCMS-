import React from 'react'
import useStore from '../../stores/userStore'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const Register = () => {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(50).required(),
    lastName: yup.string().min(3).max(50).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).max(10).required(),
    userName: yup.string().min(3).max(50).required(),
    password: yup.string().min(8).max(1024).required(),
    isSubteacher: yup.boolean().default(false).required(),
    isClassteacher: yup.boolean().default(false).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const addUser = useStore((state) => state.addUser)

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    addUser(data)
    console.log(`in the submit `, data)
  }

  return (
    <>
      <div className=" min-h-screen bg-teal-900  text-black flex flex-col justify-center items-center ">
        <form
          class="w-full max-w-lg mt-3"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                type="text"
                placeholder="Enter name"
                {...register('firstName')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.firstName?.message}
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Enter lastname"
                {...register('lastName')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.lastName?.message}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-email"
              >
                ENTER EMAIL
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your Email"
                {...register('email')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.email?.message}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                placeholder="******************"
                {...register('password')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.password?.message}
              </div>
              <p class="text-white text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="phone"
              >
                Phone
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                {...register('phone')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.phone?.message}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-username"
              >
                USERNAME
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="userName"
                type="text"
                placeholder="Enter UserName"
                {...register('userName')}
              />
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.userName?.message}
              </div>
            </div>
            <div class="w-full md:w-1/2 px-8 mb-6 md:mb-0 text-white  font-bold">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="exampleCheck25"
                for="grid-isSubteacher"
              >
                YOUR ROLE
              </label>
              <div className="form-group form-check mt-2">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-red-600  rounded border  border-black focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 border b-2 border-black"
                  id=""
                  {...register('isSubteacher')}
                />{' '}
                Subject Teacher
                <div
                  class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                  role="alert"
                >
                  {errors.isSubteacher?.message}
                </div>
              </div>
              <input
                type="checkbox"
                value=""
                class=" w-4 h-4 text-red-600  rounded border  border-black focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 border b-2 border-black"
                id=""
                {...register('isClassteacher')}
              />{' '}
              Class Teacher
              <div
                class=" rounded-lg  mb-2 text-base text-red-400 mb-3"
                role="alert"
              >
                {errors.isClassteacher?.message}
              </div>
            </div>
          </div>
          <div className=" flex   justify-center">
            <button
              className="  bg-green-600 hover:bg-green-800 text-black  fon8-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-black rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
          <span className=" flex justify-center mt-4">
            <Link to="/">
              <button
                type="button"
                class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-black font-bold text-sm border border-black"
              >
                Go to Login
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
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
              </button>
            </Link>
          </span>
        </form>
      </div>
    </>
  )
}

export default Register
