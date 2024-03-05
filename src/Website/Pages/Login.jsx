import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Header1 from '../Components/Header1';


function Login() {
    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {
            redirect('/');
        }
      },[]);
    const redirect = useNavigate(); // redirect any routes

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const getform = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {

        var result = true;

        if (formvalue.email == "") {
            toast.error('Email Field is required');
            result = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('Password Field is required');
            result = false;
            return false;
        }
        return result;

    }
    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload
        if (validation()) {
          const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
          console.log(res);
          if (res.data.length > 0) {
            if (res.data[0].password == formvalue.password) {
                 // create session
          localStorage.setItem('userid',res.data[0].id);
          localStorage.setItem('uname',res.data[0].name);

              toast.success('Login Success');
              redirect('/');
            }
            else {
              toast.error('Password incorrect');
              return false;
            }
          }
          else {
            toast.error('Email does not Exist');
            return false;
          }
        }
      }
    
    
    
    return (
        <div>
            <Header1 title={"Login"}/>
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Login     here</h5>
                        <h1 className="mb-5">Login</h1>
                    </div>
                    <div className="row g-4">
                        <div classname="container-mt-12">
                            <div classname="wow fadeInUp" data-wow-delay="0.2s">
                                <form method='post' onSubmit={submithandel}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={formvalue.email} onChange={getform} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" value={formvalue.password} onChange={getform}/>
                                    </div>
                                        <Link to="/signup">If you not Registered then Register Here</Link>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login