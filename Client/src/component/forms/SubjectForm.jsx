import React, { useEffect } from 'react'
import subjectStore from '../../stores/subjectStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const SubjectForm = () => {
  const addSubject = subjectStore((state) => state.addSubject)
  const updateSubject = subjectStore((state) => state.updateSubject)
  const subjects = subjectStore((state) => state.subjects)

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

  // the update part
  useEffect(() => {
    const subjectId = params.subjectId
    console.log(`this iis id`, subjectId)
    if (!subjectId) return
    const subject = subjects.find((subject) => subject._id === params.subjectId)
    if (!subject) return
    setValue('name', subject.name)
    setValue('_id', subject._id)
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addSubject(data)
      console.log(`hey this is add in handler`, data)
      navigate('/home/subjects')
    } else {
      updateSubject(data)
      console.log(`hey this is update`, data)
      navigate('/home/subjects')
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-300 to-cyan-400 h-screen">
        <div className="py-10 flex justify-center overflow-hidden ">
          <div className=" w-full max-w-xs">
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              method="post"
              className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-white  font-bold mb-2" for="name">
                  ENTER SUBJECT
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  {...register('name')}
                  placeholder="Enter Subject here ......"
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
    </>
  )
}

export default SubjectForm
