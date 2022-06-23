import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginStore from '../../stores/loginStore'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useEffect } from 'react'

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(1024).required(),
  })

  // handling the data in the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()

  let login = loginStore((state) => state.login)
  const user = loginStore((state) => state.users)

  useEffect(() => {
    if (user.isAdmin) {
      navigate('/home')
    }
  })

  const onSubmitHandler = (data) => {
    login(data)
  }

  return (
    <>
      <div className=" bg-gray-800 relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            RCMS_LOGIN
          </h1>
          <form
            className="mt-6 "
            onSubmit={handleSubmit(onSubmitHandler)}
            method="post"
          >
            <div>
              <label for="email" className="block text-bold text-black">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 border border-black"
                {...register('email')}
                placeholder="Enter the Email"
              ></input>
              <div
                class=" rounded-lg  mb-2 text-base text-red-700 mb-3"
                role="alert"
              >
                {errors.email?.message}
              </div>
            </div>
            <div className="">
              <div>
                <label for="password" className="block text-bold text-black">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 border border-black"
                  {...register('password')}
                  placeholder="Enter the  Password"
                ></input>
                <div
                  class=" rounded-lg  mb-4 text-base text-red-700 mb-3"
                  role="alert"
                >
                  {errors.password?.message}
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 border border-black"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="mt-8 text-xs font-bold text-center text-black">
            {' '}
            Don't have an account?{' '}
            <Link to="/register" className="ml-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                SignUp{' '}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
