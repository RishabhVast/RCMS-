import React, { useEffect } from 'react'
import useStore from '../../stores/userroleStore'
import { Link } from 'react-router-dom'

const UserRole = () => {
  const users = useStore((state) => state.userroles)
  const retrieveUserRole = useStore((state) => state.retrieveUserRole)
  const deleteUser = useStore((state) => state.deleteUserrole)

  useEffect(() => {
    retrieveUserRole()
  }, [users])

  let counter = 1

  return (
    <div className="userrole-container bg-gray-200 hover:bg-gray-300 relative flex flex-col justify-top min-h-screen overflow-hidden">
      <div className="  justify items-center overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8  ">
        <div className="align-middle  inline-block w-full py-4 overflow-hidden bg-teal-900 shadow-lg px-12 ">
          <div className="flex justify-between ">
            <div className="flex flex-wrap items-stretch w-full h-full  relative">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="container mx-auto py-4 text-black">
                    <input
                      id="searchfield"
                      type="search"
                      placeholder="Search..."
                      autofocus="autofocus"
                      className="w-full text-black transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal   rounded-lg"
                    ></input>
                  </div>
                </div>
              </div>
              <Link to="/home/userroleform">
                <button
                  type="button"
                  className="absolute right-0 py-2.5 px-5 mr-2 mb-2  mt-2 text-sm font-bold text-white focus:outline-none bg-white rounded-lg border border-white  border-white bg-transparent hover:bg-blue-700 "
                >
                  Add UserRole
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-600 shadow-dashboard px-8 pt-10 rounded-bl-lg rounded-br-lg bg-gray-600">
        <table className="min-w-full ">
          <thead className="font-bold ">
            <tr className="text-lg bg-black">
              <th className="px-6 py-3 border-b-2 border-black text-left leading-4 text-white tracking-wider">
                Sr.No
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                STANDARD
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                DIVISION
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                SUBJECT
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                USER
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                ROLE
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                YEAR
              </th>
              <th className="px-6 py-3 border-b-2 border-black text-left  leading-4 text-white tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="  bg-teal-900 text-white ">
            {users.map((user) => (
              <tr className=" border-b-2 border-black" key={user._id}>
                <td className="px-6 py-4 whitespace-no-wrap ">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold leading-5 text-white">
                        {' '}
                        #{counter++}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap ">
                  <div className="font-bold leading-5 ">
                    {user.standard.name}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap  font-bold leading-5">
                  {user.division.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap  font-bold leading-5">
                  {user.subject.name}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {user.user.firstName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {user.role.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap   font-bold leading-5">
                  {user.year}
                </td>

                <td className=" px-6 py-4   whitespace-no-wrap   font-bold leading-5">
                  <button className="px-5 py-2 border-white border text-white rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">
                    Update
                  </button>
                  <button
                    className="px-5 py-2 ml-4 border-white border text-white rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                    onClick={() => {
                      deleteUser(user._id)
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

export default UserRole
