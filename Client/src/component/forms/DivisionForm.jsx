import React, { useEffect } from 'react'
import divisionStore from '../../stores/divisionStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const DivisionForm = () => {
  const addDivision = divisionStore((state) => state.addDivision)
  const divisions = divisionStore((state) => state.divisions)
  const updateDivision = divisionStore((state) => state.updateDivision)

  const schema = yup.object().shape({
    name: yup.string().min(3).max(10).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()

  useEffect(() => {
    const divisionId = params.divisionId
    console.log(` this is divisionId`, divisionId)
    if (!divisionId) return
    const division = divisions.find(
      (division) => division._id === params.divisionId,
    )
    if (!division) {
      return
    }
    setValue('name', division.name)
    setValue('_id', division._id)
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addDivision(data)
      console.log(`this is add `, data)
      navigate('/home/divisions')
    } else {
      updateDivision(data)
      console.log(` in the update`, data)
      navigate('/home/divisions')
    }
  }

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-cyan-400 h-screen">
      <div className="py-10 flex justify-center overflow-hidden ">
        <div className=" w-full max-w-xs">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            method="post"
            className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-white  font-bold mb-2" for="name">
                ENTER DIVISION
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                {...register('name')}
                placeholder="Enter division here ......"
              />
              <p className="text-red-900">{errors.name?.message}</p>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 RCGS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DivisionForm
