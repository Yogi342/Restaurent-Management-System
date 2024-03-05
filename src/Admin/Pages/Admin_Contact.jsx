import React from 'react'

function Admin_Contact() {
    return (
        <>
            <>
                <div className="container mt-5">
                    <h2>Manage Contact</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Phone</th>
                                <th>Feedback</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Yogi</td>
                                <td>abc@gmail.com</td>
                                <td>932868753</td>
                                <td>Good</td>
                            </tr>

                            <tr>
                                <th>2   </th>
                                <td>Yogi</td>
                                <td>abc@gmail.com</td>
                                <td>932868753</td>
                                <td>Good</td>
                            </tr>


                            {/* Add more rows for additional doctors as needed */}
                        </tbody>
                    </table>
                </div>
            </>

        </>
    )
}

export default Admin_Contact