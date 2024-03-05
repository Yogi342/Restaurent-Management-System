// import axios from 'axios';
// import React, { useState } from 'react'


// function Add_Waiter() {
//   const [formvalue, setFormvalue] = useState({
//     id: "",
//     name: "",
//     tableno: "",
//     itemname: "",
//     price: "",
//     status: ""
//   });

//   const getform = (e) => {
//     setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
//     console.log(formvalue);
//   }

//   const submithandel = async (e) => {
//     e.preventDefault(); // stop page reload 
//     const res = await axios.post(`http://localhost:3000/waiter`, formvalue);
//     //console.log(res);
//     if (res.status == 201) {
//       setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: "" });
//       alert('Employee Added success');
//       return false;
//     }
//   }

//   return (
//     <>
//       <div className="container mt-5">
//         <h2>Add Waiter</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Enter name"
//               name='name'
//               value={formvalue.name}
//               onChange={getform}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="specialty">Email</label>
//             <input
//               type="text"
//               className="form-control"
//               id="specialty"
//               placeholder="Enter Email"
//               name='email'
//               value={formvalue.email}
//               onChange={getform}
//               required
//             />
//             <div className="form-group">
//               <label htmlFor="contact">Mobile</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="contact"
//                 placeholder="Enter Mobile number"
//                 name='mobile'
//                 value={formvalue.mobile}
//                 onChange={getform}
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="hospital">Password</label>
//             <input
//               type="text"
//               className="form-control"
//               id="hospital"
//               placeholder="Enter password"
//               name='password'
//               value={formvalue.password}
//               onChange={getform}
//               required
//             />
//           </div>


//           <br />
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>

//   )
// }

// export default Add_Waiter