import data from './data/app'
import './style/styles.css'

import { ReactComponent as Previous } from './images/chevron--left.svg'
import { ReactComponent as Next } from './images/chevron--right.svg'
import { ReactComponent as Edit } from './images/edit.svg'
import { ReactComponent as Sort } from './images/sort.svg'
import { ReactComponent as Update } from './images/update.svg'
import { useEffect, useState } from 'react'

function TableHeader({ sort, setSort }) {
  const { field, type } = sort
  const headings = ['ID', 'Name', 'Email Address', 'Job Title', '']
  const sortTypes = ['ascending', 'descending', '']
  return (
    <thead>
      <tr>
        {headings.map((heading, i) => (
          <th
            key={heading}
            className={i === 0 ? 'header__id' : ''}>
            {heading}
            <button
              className={`sort ${field === i ? type : ''}`}
              onClick={() => {
                setSort((prev) => {
                  if (prev.field === i) {
                    let idx = sortTypes.indexOf(prev.type)
                    let newIdx = (idx + 1) % 3
                    return { field: i, type: sortTypes[newIdx] }
                  } else {
                    return { field: i, type: 'ascending' }
                  }
                })
              }}>
              <Sort />
            </button>
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
  const [sort, setSort] = useState({ field: 0, type: 'ascending' })

  useEffect(() => {
    setEmployees(() => {
      const newEmployees = JSON.parse(JSON.stringify(employees))
      if (sort.type === '') return newEmployees
      if (sort.field === 0) return sort.type === 'ascending' ? newEmployees.sort((a, b) => a.id - b.id) : newEmployees.sort((a, b) => b.id - a.id)
      if (sort.field === 1) return sort.type === 'ascending' ? newEmployees.sort((a, b) => a.name - b.name) : newEmployees.sort((a, b) => b.name - a.name)
      if (sort.field === 2) return sort.type === 'ascending' ? newEmployees.sort((a, b) => a.email - b.email) : newEmployees.sort((a, b) => b.email - a.email)
      if (sort.field === 3) return sort.type === 'ascending' ? newEmployees.sort((a, b) => a.title - b.title) : newEmployees.sort((a, b) => b.title - a.title)
    })
  }, [sort])

  return (
    <div className='aoj-24'>
      <div className='body'>
        <div className='wrapper'>
          <table
            cellPadding='0'
            cellSpacing='0'
            width='100%'>
            <TableHeader
              sort={sort}
              setSort={setSort}
            />

            <tbody>
              {employees.map((employee) => (
                <Tuple
                  employee={employee}
                  setEmployees={setEmployees}
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
                      id='previous'>
                      <Previous />
                    </button>

                    <input
                      type='text'
                      name='currentPage'
                      value='1'
                      id='currentPage'
                    />

                    <span>&nbsp;of&nbsp;</span>
                    <span id='totalPages'>3</span>

                    <button
                      className='next'
                      id='next'>
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
