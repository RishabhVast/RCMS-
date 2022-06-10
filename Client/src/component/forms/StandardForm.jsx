import React, { useEffect } from 'react'
import standardStore from '../../stores/standardStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const StandardForm = () => {
  const addStandard = standardStore((state) => state.addStandard)
  const updateStandard = standardStore((state) => state.updateStandard)
  const standards = standardStore((state) => state.standards)

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
    const standardId = params.standardId
    console.log(`this iis id`, standardId)
    if (!standardId) return
    const standard = standards.find(
      (standard) => standard._id === params.standardId,
    )
    if (!standard) return
    setValue('name', standard.name)
    setValue('_id', standard._id)
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addStandard(data)
      console.log(`hey this is add in handler`, data)
      navigate('/home/standards')
    } else {
      updateStandard(data)
      console.log(`hey this is update`, data)
      navigate('/home/standards')
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
                  ENTER STANDARD
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  {...register('name')}
                  placeholder="Enter standard here ......"
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

export default StandardForm
