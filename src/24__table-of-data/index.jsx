import data from './data/app'
import './style/styles.css'

export default function TableOfData() {
  return (
    <div className='aoj-24'>
      <div className='body'>
        <div className='wrapper'>
          <table
            cellpadding='0'
            cellspacing='0'
            width='100%'>
            <thead>
              <tr>
                <th className='header__id'>
                  ID
                  <button className='sort ascending'>
                    &nbsp;
                    {/* ADD A CLASS OF ascending OR DESCENDING */}
                    <svg
                      width='17'
                      height='21'
                      viewBox='0 0 17 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='ascending'
                        d='M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z'
                      />
                      <path
                        className='descending'
                        d='M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z'
                      />
                    </svg>
                  </button>
                </th>
                <th>
                  Name
                  <button className='sort'>
                    <svg
                      width='17'
                      height='21'
                      viewBox='0 0 17 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='ascending'
                        d='M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z'
                      />
                      <path
                        className='descending'
                        d='M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z'
                      />
                    </svg>
                  </button>
                </th>
                <th>
                  Email Address
                  <button className='sort'>
                    <svg
                      width='17'
                      height='21'
                      viewBox='0 0 17 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='ascending'
                        d='M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z'
                      />
                      <path
                        className='descending'
                        d='M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z'
                      />
                    </svg>
                  </button>
                </th>
                <th>
                  Job Title
                  <button className='sort'>
                    <svg
                      width='17'
                      height='21'
                      viewBox='0 0 17 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='ascending'
                        d='M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z'
                      />
                      <path
                        className='descending'
                        d='M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z'
                      />
                    </svg>
                  </button>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {/* ADD A CLASS OF EDIT, IF YOU TO DISPLAY THE FORM FIELDS */}
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>

              <tr className='edit'>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <img
                      src='./images/update.svg'
                      alt='Update'
                      className='update'
                    />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <img
                      src='./images/edit.svg'
                      alt='Edit'
                      className='edit'
                    />
                  </button>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colspan='2'>30 Results</td>
                <td colspan='3'>
                  <div className='pagination edit'>
                    <button
                      className='previous'
                      id='previous'>
                      <img
                        src='./images/chevron--left.svg'
                        alt='Previous'
                      />
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
                      <img
                        src='./images/chevron--right.svg'
                        alt='Next'
                      />
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
