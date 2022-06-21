import React, { useEffect } from 'react'
import roleStore from '../../stores/roleStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const RoleForm = () => {
  const addRole = roleStore((state) => state.addRole)
  const updateRole = roleStore((state) => state.updateRole)
  const roles = roleStore((state) => state.roles)

  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
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
    const roleId = params.roleId
    console.log(`this iis id`, roleId)
    if (!roleId) return
    const role = roles.find((role) => role._id === params.roleId)
    if (!role) return
    setValue('name', role.name)
    setValue('_id', role._id)
  }, [])

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addRole(data)
      console.log(`hey this is add in handler`, data)
      navigate('/home/role')
    } else {
      updateRole(data)
      console.log(`hey this is update`, data)
      navigate('/home/role')
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
                  ENTER ROLE
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lowercase "
                  id="name"
                  type="name"
                  {...register('name')}
                  placeholder="Enter role here ......"
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
              &copy;2022 RCMS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoleForm
