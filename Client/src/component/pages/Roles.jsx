import React, { useEffect } from 'react'
import roleStore from '../../stores/roleStore'
import { Link } from 'react-router-dom'

const Role = () => {
  const roles = roleStore((state) => state.roles)
  const retrieveRoles = roleStore((state) => state.retrieveRoles)
  const deleteRole = roleStore((state) => state.deleteRole)

  useEffect(() => {
    retrieveRoles()
  }, [])

  let counter = 1

  return (
    <div className="bg-gray-400  relative flex flex-col justify-top min-h-screen overflow-hidden">
      <div className="  justify items-center overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8  ">
        <div className="align-middle  inline-block w-full py-4 overflow-hidden bg-cyan-900 shadow-lg px-12 ">
          <div className="flex justify-between ">
            <div className="flex flex-wrap items-stretch w-full h-full  relative">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="container mx-auto py-4 text-black">
                    <input
                      type="search"
                      value={''}
                      onChange={''}
                      placeholder="Search..."
                      autofocus="autofocus"
                      className="w-full text-black transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal   rounded-lg"
                    ></input>
                  </div>
                </div>
              </div>
              <Link to="/home/role/form">
                <button
                  type="button"
                  className="absolute right-0 py-2.5 px-5 mr-2 mb-2  mt-2 text-sm font-bold text-white focus:outline-none bg-white rounded-lg border border-white  border-white bg-transparent hover:bg-blue-700 "
                >
                  Add Role
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-600 shadow-dashboard px-8 pt-10 rounded-bl-lg rounded-br-lg bg-gray-600 flex justify-center">
        <table className="w-1/2  ">
          <thead className="font-bold  text-left">
            <tr className="text-lg bg-black">
              <th className="px-6 py-3 border-b-2 border-black leading-4 text-white tracking-wider">
                Sr.No
              </th>
              <th className="px-6 py-3 border-b-2 border-black  leading-4 text-white tracking-wider">
                Role
              </th>

              <th className="px-6 py-3 border-b-2 border-black  leading-4 text-white tracking-wider">
                UPDATE
              </th>
              <th className="px-6 py-3 border-b-2 border-black  leading-4 text-white tracking-wider">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody className=" text-left bg-cyan-900 text-white ">
            {roles.map((role) => (
              <tr className=" border-b-2 border-black  " key={role._id}>
                <td className="px-6 py-2 whitespace-no-wrap ">
                  <div>
                    <div className="font-bold leading-5 text-white">
                      {' '}
                      #{counter++}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-no-wrap ">
                  <div className="font-bold leading-5 "> {role.name}</div>
                </td>

                <td className=" px-6 py-2 hitespace-no-wrap font-bold leading-5">
                  <Link to={`/home/role/form/${role._id}`}>
                    <button className="px-5 py-2 border-white border text-white rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">
                      Update
                    </button>
                  </Link>
                </td>
                <td className=" px-6 py-2 hitespace-no-wrap font-bold leading-5">
                  <button
                    className="px-5 py-2 ml-4 border-white border text-white rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                    onClick={() => {
                      deleteRole(role._id).then(() => retrieveRoles())
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Role
