import React, { useState } from 'react'
import axios from 'axios';


function Add_Employee() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/employee`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: "" });
      alert('Employee Added success');
      return false;
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h2>Add Employee</h2>
        <form method="post" onSubmit={submithandel}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" name='Name' value={formvalue.Name} onChange={getform} required />
          </div>
          <div className="form-group">
            <label htmlFor="specialty">Email</label>
            <input
              type="text"
              className="form-control"
              id="specialty"
              placeholder="Enter Email"
              name='email'
              value={formvalue.email}
              onChange={getform}
              required
            />
            <div className="form-group">
              <label htmlFor="contact">mobile</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                placeholder="Enter Mobile number"
                name='mobile'
                value={formvalue.mobile}
                onChange={getform}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="hospital">Password</label>
            <input
              type="text"
              className="form-control"
              id="hospital"
              placeholder="Enter password"
              name='password'
              onChange={getform}
              required
            />
          </div>


          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>


  )
}

export default Add_Employee