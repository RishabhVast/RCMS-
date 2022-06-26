import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import testStore from '../../stores/testStore'
import divisionStore from '../../stores/divisionStore'
import standardStore from '../../stores/standardStore'
import resultStore from '../../stores/resultStore'

const Test = () => {
  const tresults = testStore((state) => state.tresults)
  const retrieveTestData = testStore((state) => state.retrieveTestData)

  const results = resultStore((state) => state.results)
  const retrieveResult = resultStore((state) => state.retrieveResult)
  const deleteResult = resultStore((state) => state.deleteResult)

  // retrieve the division
  const divisions = divisionStore((state) => state.divisions)
  const retrieveDivisions = divisionStore((state) => state.retrieveDivisions)

  //   retrieving the standard
  const standards = standardStore((state) => state.standards)
  const retrieveStandards = standardStore((state) => state.retrieveStandards)

  useEffect(() => {
    retrieveStandards()
    retrieveDivisions()
  }, [])

  const [standard, setStandard] = useState('')
  const [division, setDivision] = useState('')
  const [test, setTest] = useState('')

  useEffect(() => {
    retrieveResult({ test })
  }, [test])

  useEffect(() => {
    retrieveTestData({ standard, division, test })
  }, [standard, division, test])

  let counter = 1

  return (
    <div className="bg-gray-300  font-serif">
      <div className="align-middle  inline-block w-full py-4 overflow-hidden  bg-gray-900 shadow-lg px-12 border-4 border-white rounded-lg">
        <div className="flex justify-between ">
          <div className="flex flex-wrap items-stretch w-full h-full">
            <div className="flex justify-center">
              <div className="mb-3 ">
                <div className="flex justify-center">
                  <div className=" xl:w-96 ">
                    <div className="container mx-auto py-4 text-black mt-6">
                      <input
                        id="searchfield"
                        type="search"
                        placeholder="Search For Students"
                        autofocus="autofocus"
                        className="w-full text-black transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal   rounded-lg"
                      ></input>
                    </div>
                  </div>

                  <div className="py-4 text-black flex  ml-20">
                    <div className="w-full ml-2">
                      <label
                        for="countries"
                        class=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Select an Standard
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                      >
                        <option selected>Choose a Standard</option>
                        {standards.map((standard) => (
                          <option key={standard._id} value={standard._id}>
                            {standard.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full ml-2">
                      <label
                        for="countries"
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Select an Division
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                      >
                        <option selected>Choose a Division</option>
                        {divisions.map((division) => (
                          <option key={division._id} value={division._id}>
                            {division.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full ml-2">
                      <label
                        for=""
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Select an Test
                      </label>
                      <select
                        id=""
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={test}
                        onChange={(e) => setTest(e.target.value)}
                      >
                        <option selected>Choose a Test</option>
                        {tresults.map((test) => (
                          <option key={test._id} value={test._id}>
                            {test.name} {test.subject?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="object-center   overflow-x-auto sm:-mx-6 lg:-mx-8 font-bold ">
        <div className=" inline-block w-full sm:px-6 lg:px-8">
          <div class="relative overflow-x-auto shadow-md ">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400  ">
              <thead class="text-lg text-white  uppercase bg-gray-800 dark:bg-gray-900  dark:text-white  h-16 text-left">
                <tr>
                  <th scope="col" class="px-6 py-2">
                    SR.NO
                  </th>
                  <th scope="col" class="px-6 py-2">
                    STUDENTS
                  </th>

                  <th scope="col" class="px-6 py-2">
                    SUBJECT
                  </th>
                  <th scope="col" class="px-6 py-2">
                    TESTS
                  </th>
                  <th scope="col" class="px-6 py-2">
                    PARENTS
                  </th>
                  <th scope="col" class="px-6 py-2">
                    OBTAINED MARKS
                  </th>
                  <th scope="col" class="px-6 py-2">
                    GRADE
                  </th>
                  <th scope="col" class="px-6 py-2">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr
                    class="border-b dark:bg-gray-700 dark:border-white text-white font-bold text-sm font-serif text-left"
                    key={result._id}
                  >
                    <td className="px-6 py-2 ">{counter++}</td>
                    <td className="px-6 py-2 ">
                      {result.student?.firstName} {result.student?.middleName}{' '}
                      {result.student?.lastName}
                    </td>

                    <td className="px-6 py-2 ">{result.test?.subject?.name}</td>
                    <td className="px-6 py-2 ">{result.test?.name}</td>
                    <td className="px-6 py-2  text-center  uppercase">
                      {result.student?.parents[0].firstName}
                      <br />
                      {result.student?.parents[0].lastName}
                    </td>
                    <td className="px-6 py-2 text-center">
                      {result.obtainedMarks}
                    </td>
                    <td className="px-6 py-2 text-center">
                      {result.grade?.name}
                    </td>
                    <td className="px-6 py-2 flex  gap-2">
                      <button className="px-4 py-1 text-sm text-white bg-green-600 rounded">
                        <Link
                          to={`/subteacher/resultform/${result._id}`}
                          class="font-medium text-white dark:text-white hover:underline"
                        >
                          Edit
                        </Link>
                      </button>
                      <button
                        className="px-4 py-1 text-sm text-white bg-red-600 rounded"
                        onClick={() => {
                          deleteResult(result._id).then(() =>
                            retrieveResult(test),
                          )
                        }}
                      >
                        Delete
                      </button>
                    </td>

                    <tr className="bg-white border-white" />
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
