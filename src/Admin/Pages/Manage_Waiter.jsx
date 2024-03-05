// import axios from 'axios'
// import React from 'react'
// import { useState, useEffect } from 'react'

// function Manage_Waiter() {
//     const [data, setData] = useState([]);//1. declare use state 

//     useEffect(() => {
//         fetch()
//     }, []);


//     // Fetch data from API

//     const fetch = async () => {     //2. declare const fetch 
//         const res = await axios.get('http://localhost:3000/waiter'); //3. declare const res for get data from api
//         console.log(res.data); //4. print data in console
//         setData(res.data);    // 5.set data in table
//     }


//     return (
//         <>
//             <div className="container mt-5">
//                 <h2>Manage Waiter</h2>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Table no</th>
//                             <th>Item name</th>
//                             <th>Total bill</th>



//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             data.map((value) => { //6. declare map function for print data in table
//                                 return (
//                                     <tr>
//                                         <td>
//                                             <tr>{value.id}</tr>
//                                         </td>
//                                         <td>
//                                             <tr>{value.name}</tr>
//                                         </td>
//                                         <td>
//                                             <tr>{value.tableno}</tr>
//                                         </td>
//                                         <td>
//                                             <tr>{value.itemname}</tr>
//                                         </td>
//                                         <td>
//                                             <tr>{value.price}</tr>
//                                         </td>
                                        
//                                     </tr>
//                                 )
//                             })
//                         }




//                         {/* Add more rows for additional doctors as needed */}
//                     </tbody>
//                 </table>
//             </div>
//         </>

//     )
// }

// export default Manage_Waiter