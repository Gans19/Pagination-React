import React from 'react'
import "./App.css"

const EditableRow = ({editFormData,handleEditFormChange}) => {
  return (
    <tr>
        <td>
       
        </td>
        <td>
            <input type="text" placeholder='Enter a Name....' required="required" name='name' onChange={handleEditFormChange} value={editFormData.name}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Email....' required="required" name='email' onChange={handleEditFormChange} value={editFormData.email}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Username....' required="required" name='username' onChange={handleEditFormChange} value={editFormData.username}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Website....' required="required" name='website' onChange={handleEditFormChange} value={editFormData.website}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Phone....' required="required" name='phone' onChange={handleEditFormChange} value={editFormData.phone}/>
        </td>
       <td>
       <button type='submit'  className="btn">
                      Save
                    </button>
       </td>
    </tr>
  )
}

export default EditableRow
