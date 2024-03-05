import axios from 'axios';
import React, { useState,useEffect } from 'react'


function Manage_Categories() {

    const[data,setData]=useState([]);
    useEffect(()=>{fetch()},[])

    const fetch = async()=>{
        const res = await axios.get("http://localhost:3000/categories");
        console.log(res.data);
        setData(res.data);
    }
    
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        fetch();
    
    }   

    return (
        <>
            <div className="container mt-5">
                <h2>Manage Categories</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                            <th>Status</th> 


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,index,arr)=>{
                                return(
                                    <tr>
                                    <td>
                                        <tr>{value.id}</tr>
                                    </td>
                                    <td>
                                        <tr>{value.Name}</tr>
                                    </td>
                                    <td>
                                        <tr><img src={value.cate_Image} alt="" width="80px"  /></tr>
                                    </td>
                                
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={()=>deleteHandel(value.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <tr>{value.status}</tr>
                                    </td>
                                </tr>
                            )
                        })
                    }

                            
                               
                            

                        {/* Add more rows for additional doctors as needed */}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Manage_Categories