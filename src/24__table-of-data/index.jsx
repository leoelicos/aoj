import data from './data/app'
import './style/styles.css'

import { ReactComponent as Previous } from './images/chevron--left.svg'
import { ReactComponent as Next } from './images/chevron--right.svg'
import { ReactComponent as Edit } from './images/edit.svg'
import { ReactComponent as Sort } from './images/sort.svg'
import { ReactComponent as Update } from './images/update.svg'
import { useRef, useState } from 'react'

function TableHeader({ handleSort, sortField, sortType }) {
  const headings = ['ID', 'Name', 'Email Address', 'Job Title', '']
  return (
    <thead>
      <tr>
        {headings.map((heading, i) => (
          <th
            key={heading}
            className={i === 0 ? 'header__id' : ''}>
            {heading}
            {i < 4 && (
              <button
                className={`sort ${sortField === i ? (sortType ? 'ascending' : 'descending') : ''}`}
                onClick={() => {
                  handleSort(i)
                }}>
                <Sort />
              </button>
            )}
          </th>
        ))}
      </tr>
    </thead>
  )
}

function Tuple({ employee, setEmployees }) {
  const [edit, setEdit] = useState(false)

  const [employeeName, setEmployeeName] = useState(employee.name)
  const [employeeEmail, setEmployeeEmail] = useState(employee.email)
  const [employeeTitle, setEmployeeTitle] = useState(employee.title)

  return (
    <tr className={edit ? 'edit' : ''}>
      <td>{employee.id}</td>
      <td className='name'>
        <input
          type='text'
          disabled={!edit}
          value={employeeName}
          onChange={(e) => {
            setEmployeeName(e.target.value)
          }}
        />
      </td>
      <td>
        <input
          type='text'
          disabled={!edit}
          value={employeeEmail}
          onChange={(e) => {
            setEmployeeEmail(e.target.value)
          }}
        />
      </td>
      <td>
        <input
          type='text'
          disabled={!edit}
          value={employeeTitle}
          onChange={(e) => {
            setEmployeeTitle(e.target.value)
          }}
        />
      </td>
      <td>
        <button
          className='update'
          onClick={() => {
            setEmployees((prev) =>
              prev.map((v, i) =>
                i === employee.id //
                  ? { ...v, name: employeeName, email: employeeEmail, title: employeeTitle }
                  : v
              )
            )
            setEdit(false)
          }}>
          <Update className='update' />
        </button>
        <button
          className='edit'
          onClick={() => setEdit(true)}>
          <Edit className='edit' />
        </button>
      </td>
    </tr>
  )
}

export default function TableOfData() {
  const [employees, setEmployees] = useState(data)
  const [sort, setSort] = useState({ field: 0, ascending: true })
  const [currentPage, setCurrentPage] = useState(0)

  const tuplesPerPage = 10
  const maxPages = useRef(employees.length / tuplesPerPage - 1)

  const handleClickNextPage = () => {
    setCurrentPage((prev) => {
      const nextValue = Math.min(prev + 1, maxPages.current)
      console.log({ nextValue })
      return nextValue
    })
  }

  const handleClickPreviousPage = () => {
    setCurrentPage((prev) => {
      const nextValue = Math.max(prev - 1, 0)
      // console.log({ nextValue })
      return nextValue
    })
  }

  const handleSort = (i) => {
    let ascending = i === sort.field ? !sort.ascending : true
    setSort({ field: i, ascending })
    setEmployees(() => {
      let n = JSON.parse(JSON.stringify(employees))
      let sorted =
        i === 0 //
          ? n.sort((a, b) => a.id - b.id)
          : i === 1
          ? n.sort((a, b) => a.name.localeCompare(b.name))
          : i === 2
          ? n.sort((a, b) => a.email.localeCompare(b.email))
          : i === 3
          ? n.sort((a, b) => a.title.localeCompare(b.title))
          : []
      if (!ascending) sorted.reverse()
      // console.log('Sorting', { by: i, ascending, sorted })
      return sorted
    })
  }

  return (
    <div className='aoj-24'>
      <div className='body'>
        <div className='wrapper'>
          <table
            cellPadding='0'
            cellSpacing='0'
            width='100%'>
            <TableHeader
              sortField={sort.field}
              sortType={sort.ascending}
              handleSort={handleSort}
            />

            <tbody>
              {employees
                .filter((_, i) => i >= currentPage * tuplesPerPage && i <= tuplesPerPage * (currentPage + 1) - 1)
                .map((employee) => (
                  <Tuple
                    employee={employee}
                    setEmployees={setEmployees}
                    key={employee.id}
                  />
                ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan='2'>30 Results</td>
                <td colSpan='3'>
                  <div className='pagination edit'>
                    <button
                      className='previous'
                      id='previous'
                      onClick={handleClickPreviousPage}
                      disabled={currentPage === 0}>
                      <Previous />
                    </button>
                    {currentPage + 1}
                    <span>&nbsp;of&nbsp;</span>
                    <span id='totalPages'>3</span>

                    <button
                      className='next'
                      id='next'
                      onClick={handleClickNextPage}
                      disabled={currentPage === maxPages.current}>
                      <Next />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
