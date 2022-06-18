import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import gradeStore from '../../stores/gradeStore'
import * as yup from 'yup'

const GradesForm = () => {
  const schema = yup.object().shape({
    name: yup.string().min(2).max(20).required(),
    start: yup.string().min(2).max(10).required(),
    end: yup.string().min(2).max(10).required(),
  })

  const addGrade = gradeStore((state) => state.addGrade)
  const updateGrade = gradeStore((state) => state.updateGrade)
  const grades = gradeStore((state) => state.grades)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()

  useEffect(() => {
    const gradeId = params.gradeId
    console.log(`this iis id`, gradeId)
    if (!gradeId) return
    const grade = grades.find((grade) => grade._id === params.gradeId)
    if (!grade) return
    setValue('name', grade.name)
    setValue('start', grade.start)
    setValue('end', grade.end)
    setValue('_id', grade._id)
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addGrade(data)
      navigate('/home/grades')
    } else {
      updateGrade(data)
      navigate('/home/grades')
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
              <label className="block text-white  font-bold mb-2" for="grade">
                ENTER GRADE
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                {...register('name')}
                placeholder="Enter grade here ......"
              />
              <p className="text-red-900">{errors.name?.message}</p>
              <label className="block text-white  font-bold mb-2" for="start">
                ENTER START
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="start"
                type="text"
                {...register('start')}
                placeholder="Enter start here ......"
              />
              <p className="text-red-900">{errors.name?.message}</p>
              <label className="block text-white  font-bold mb-2" for="end">
                ENTER END
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="end"
                type="text"
                {...register('end')}
                placeholder="Enter end here ......"
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

export default GradesForm
