import React, { useState } from 'react'
import { useEffect } from 'react'
import Chart from 'react-apexcharts'
import studentStore from '../../stores/studentStore'
import divisionStore from '../../stores/divisionStore'
import standardStore from '../../stores/standardStore'
import resultStore from '../../stores/resultStore'

const Reports = () => {
  const fstudents = studentStore((state) => state.fstudents)
  const filterStudent = studentStore((state) => state.filterStudent)

  const divisions = divisionStore((state) => state.divisions)
  const retrieveDivisions = divisionStore((state) => state.retrieveDivisions)

  const report = resultStore((state) => state.report)
  const retrieveReport = resultStore((state) => state.retrieveReport)

  //   retrieving the standard
  const standards = standardStore((state) => state.standards)
  const retrieveStandards = standardStore((state) => state.retrieveStandards)

  const retrievefilterResult = resultStore(
    (state) => state.retrievefilterResult,
  )
  const fresults = resultStore((state) => state.fresults)

  const [standard, setStandard] = useState('')
  const [division, setDivision] = useState('')
  const [student, setStudent] = useState('')
  const [test, setTest] = useState('')
  const [testList, setTestList] = useState([])

  console.log(`th req students`, student)
  console.log(`in the clicked `, test)

  useEffect(() => {
    filterStudent({ standard, division })
  }, [standard, division])

  // giving us distinct test name
  useEffect(() => {
    const exams = new Set()
    fresults.map((result) => {
      exams.add(result.test.name)
    })
    setTestList([...exams])
  }, [fresults])

  useEffect(() => {
    retrieveStandards()
    retrieveDivisions()
  }, [])

  useEffect(() => {
    retrievefilterResult({ standard, division, student })
  }, [standard, division, student])

  useEffect(() => {
    retrieveReport({ student, test })
  }, [student, test])

  console.log(`in the report`, JSON.stringify(report))
  const data = [
    {
      name: 'Obtained Marks',
      data: [],
    },
    {
      name: 'Average',
      data: [],
    },
    {
      name: 'Highest Marks',
      data: [],
    },
  ]

  report.map((r) => {
    data[0].data.push(r.obtainedMarks)
    data[1].data.push(r.test.averageMarks)
    data[2].data.push(r.test.highestMarks)
  })

  const options = {
    chart: {
      id: 'simple-bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: [''],
    },

    xaxis: {
      categories: [
        'MATHS',
        'ENGLISH',
        'SCIENCE',
        'HINDI',
        'MARATHI',
        'GEOGRAPHY',
        'HISTORY',
      ],
    },
  }

  return (
    <>
      <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100  hover:text-gray-700 focus:text-gray-700 shadow-lg absolute top-0">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
            <div className="py-4 text-black flex  ml-20">
              <div className="w-full ml-2">
                <label
                  for="countries"
                  class=" mb-2 text-sm font-medium text-black "
                >
                  Select an Standard
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  class="mb-2 text-sm font-medium text-black "
                >
                  Select an Division
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
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
                  for="countries"
                  class="mb-2 text-sm font-medium text-black "
                >
                  Select an Student
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  value={student}
                  onChange={(e) => setStudent(e.target.value)}
                >
                  <option selected>Choose a Student</option>
                  {fstudents.map((student) => (
                    <option key={student._id} value={student._id}>
                      {student.firstName} <br />
                      {student.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full ml-2">
                <label
                  for="countries"
                  class="mb-2 text-sm font-medium text-black "
                >
                  Select an Result
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                >
                  <option selected>Choose a Result</option>
                  {testList.map((f, index) => (
                    <option key={index} value={f}>
                      {f} <br />
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-24">
        <Chart options={options} type="bar" series={data} width="60%" />
      </div>
    </>
  )
}

export default Reports
