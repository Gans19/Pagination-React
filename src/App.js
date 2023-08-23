import React, { useState, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data.json";
import ReadOnlyData from "./ReadOnlyData";
import EditableRow from "./EditableRow";
import Table from "react-bootstrap/Table";

const App = () => {
  const [contacts, setContacts] = useState(Data);
  const [page, setPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);

  const NumOfPages = Math.ceil(Data.length / userPerPage);
  const Pages = [...Array(NumOfPages + 1).keys()].slice(1);
  console.log(Pages);

  const selectPageHandler = (selectedPage) => {
    if(selectedPage >=1 && selectedPage <=Pages.length && selectedPage !== page)
    setPage(selectedPage);
  };

  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone,
      username: addFormData.username,
      website: addFormData.website,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.id,
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone,
      username: editFormData.username,
      website: editFormData.website,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      username: contact.username,
      website: contact.website,
    };

    setEditFormData(formValues);
  };

  return (
    <div className="app-container">
      <h1>Pagination</h1>
      <form onSubmit={handleEditFormSubmit}>
        <Table className="w-full text-center table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Website</th>
              <th>Phone</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(page * 3 - 3, page * 3).map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnlyData
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>
      <div></div>
      <div className="d-none">
        <h1 className="hidden">Add a User</h1>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="username"
            required="required"
            placeholder="Enter a Username..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="website"
            required="required"
            placeholder="Enter an website..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phone"
            required="required"
            placeholder="Enter an phone..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
          <button className="btn btn-secondary" type="submit">
            Add
          </button>
        </form>
      </div>

      <div>
        {Data.length > 0 && (
          <div className="pagination">
            <span onClick={() => selectPageHandler(page-1)}
            className={page>1? "" : "disabled"}
            >⬅️</span>
            <span>
              {Pages.map((_, i) => (
                <span 
                className={page === i + 1? "active" : ""}
                onClick={() => selectPageHandler(i + 1)} key={i}>
                  {i + 1}
                </span>
              ))}
            </span>
            <span onClick={() => selectPageHandler(page+1)}
            className={page<Data.length/3? "" : "disabled"}>➡️</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
