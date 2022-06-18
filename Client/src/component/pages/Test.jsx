import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import testStore from '../../stores/testStore'

const Test = () => {
  const tests = testStore((state) => state.tests)
  const retrieveTest = testStore((state) => state.retrieveTest)
  const deleteTest = testStore((state) => state.deleteTest)

  useEffect(() => {
    retrieveTest()
  }, [])

  let counter = 1

  return (
    <div className="bg-gray-300  font-serif">
      <div className="align-middle  inline-block w-full py-4 overflow-hidden  bg-gray-900 shadow-lg px-12 ">
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
            <div className="flex justify items-center  absolute right-0">
              {' '}
              <Link to="/subteacher/testform">
                <button
                  type="button"
                  className=" py-2.5 px-5 mr-2 mb-2  mt-2 font-bold text-white focus:outline-none bg-white rounded-lg border border-white  border-white bg-transparent hover:bg-blue-700 "
                >
                  Add Tests
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="object-center   overflow-x-auto sm:-mx-6 lg:-mx-8 font-bold ">
        <div className=" inline-block w-full sm:px-6 lg:px-8">
          <div class="relative overflow-x-auto shadow-md ">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400  ">
              <thead class="text-2xl text-white  uppercase bg-gray-700 dark:bg-gray-700  dark:text-white  h-16">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    SR.NO
                  </th>
                  <th scope="col" class="px-6 py-3">
                    TEST LIST
                  </th>
                  <th scope="col" class="px-6 py-3">
                    CREATE RESULT
                  </th>

                  <th scope="col" class="px-6 py-3">
                    DELETE
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-400 dark:border-gray-700 text-black font-bold text-lg"
                    key={test._id}
                  >
                    <td className="px-6 py-4 ">{counter++}</td>
                    <td className="">{test.name}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="text-white  font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600"
                      >
                        <Link to={`/subteacher/resultform/${test._id}`}>
                          Create Result
                        </Link>
                      </button>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="text-white  font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 bg-red-600"
                        onClick={() => {
                          deleteTest(test._id).then(() => retrieveTest())
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <tr className="bg-white border-black" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
