import React from 'react'
import "./App.css"

const ReadOnlyData = ({contact,handleEditClick}) => {
  return (
    <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>
                    {contact.name}
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.username}</td>
                  <td>{contact.website}</td>
                  <td>{contact.phone}</td>
                  <td>
 {/* Table Butoon Section */}

                    {/* Edit Button */}
                    <button  className="btn" onClick={(e)=>handleEditClick(e,contact)}>
                      Edit
                    </button>

                  </td>
                </tr>
  )
}

export default ReadOnlyData
