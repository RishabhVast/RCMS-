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
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const addUser = useStore((state) => state.addUser)

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    addUser(data).then(navigate('/'))
  }

  return (
    <>
      <div className=" min-h-screen bg-cyan-900  text-black flex flex-col justify-center items-center ">
        <form
          class="w-full max-w-lg mt-3"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div class=" -mx-3 mb-6 border border-white rounded-lg shadow-lg   ">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2  mt-8 font-serif flex justify-center text-2xl"
              for=""
            >
              REGISTER
            </label>
            <div class="w-full px-3 mb-6 md:mb-0 mt-4">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border  border-black"
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
            <div class="w-full  px-3 mt-4">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div class="flex flex-wrap -mx-3 mb-6 border border-white rounded-lg shadow-lg  mt-4">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-4"
                for="grid-email"
              >
                ENTER EMAIL
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div class="flex flex-wrap -mx-3 mb-6  border  border-white rounded-lg shadow-lg ">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-4 mt-4"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <p class="text-white text-xs italic mb-2  ">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6  border  border-white rounded-lg shadow-lg hover: dark:shadow-lg">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-4"
                for="phone"
              >
                Phone
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div class="flex flex-wrap -mx-3 mb-2  border  border-white rounded-lg shadow-lg">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-4"
                for="grid-username"
              >
                USERNAME
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black font-bold border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          </div>
          <div className=" flex mt-10  justify-center">
            <button
              className="  bg-green-600 hover:bg-green-800 text-black  fon8-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-white rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
