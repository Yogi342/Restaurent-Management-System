import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header1 from "./Website/Components/Header1";
import Navbar from "./Website/Components/Navbar";
import About from "./Website/Pages/About";
import Booking from "./Website/Pages/Booking";
import Contact from "./Website/Pages/Contact";
import Home from "./Website/Pages/Home";
import Menu from "./Website/Pages/Menu";
import Service from "./Website/Pages/Service";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import Login from "./Website/Pages/Login";
import Admin_Header from "./Admin/Components/Admin_Header";
import Admin_Login from "./Admin/Pages/Admin_Login";
import Admin_Footer from "./Admin/Components/Admin_Footer";
import Add_categories from "./Admin/Pages/Add_categories";
import Add_Employee from "./Admin/Pages/Add_Employee";
import Dashboard from "./Admin/Pages/Dashboard";
import Manage_Categories from "./Admin/Pages/Manage_Categories";
import Manage_Services from "./Admin/Pages/Manage_Services";
import Add_Waiter from "./Admin/Pages/Add_Waiter";
import Manage_Waiter from "./Admin/Pages/Manage_Waiter";
import Manage_Employee from "./Admin/Pages/Manage_Employee";
import Add_Services from "./Admin/Pages/Add_Services";
import Admin_Contact from "./Admin/Pages/Admin_Contact";
import Manage_Bookings from "./Admin/Pages/Manage_Bookings";
import Feedbacks from "./Admin/Pages/Feedbacks";
import Not_Found from "./Website/Pages/Not_Found";
import Signup from "./Website/Pages/Signup";
import Profile from "./Website/Pages/Profile";
import View_services from "./Website/Pages/View_services";
import Employee_profile from "./Admin/Pages/Employee_profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home /> </>}></Route>
          <Route path="/about" element={<><About /> </>}></Route>
          <Route path="/booking" element={<><Booking /> </>}></Route>
          <Route path="/contact" element={<><Contact /> </>}></Route>
          <Route path="/menu" element={<><Menu /> </>}></Route>
          <Route path="/service" element={<><Service /> </>}></Route>
          <Route path="/team" element={<><Team /> </>}></Route>
          <Route path="/testimonial" element={<><Testimonial /> </>}></Route>
          <Route path="/login" element={<><Login /> </>}></Route>
          <Route path="/signup" element={<><Signup /> </>}></Route>
          <Route path="/profile" element={<><Profile /> </>}></Route>
          <Route path="*" element={<> <Not_Found /></>}></Route>

          {/* admin panel */}
          <Route path="/admin-login" element={<><Admin_Login /> <Admin_Footer /></>}></Route>


          <Route path="/add-employee" element={<><Admin_Header /><Add_Employee /> <Admin_Footer /></>}></Route>
          <Route path="/manage-employee" element={<><Admin_Header /><Manage_Employee /> <Admin_Footer /></>}></Route>

          <Route path="/add-categories" element={<><Admin_Header /><Add_categories /> <Admin_Footer /></>}></Route>
          <Route path="/manage-categories" element={<><Admin_Header /><Manage_Categories /> <Admin_Footer /></>}></Route>

          <Route path="/dashboard" element={<><Dashboard /> <Admin_Footer /></>}></Route>

          <Route path="/add-services" element={<><Admin_Header /><Add_Services /> <Admin_Footer /></>}></Route>
          <Route path="/manage-services" element={<><Admin_Header /><Manage_Services /> <Admin_Footer /></>}></Route>

          {/* <Route path="/add-waiter" element={<><Admin_Header/><Add_Waiter/> <Admin_Footer/></>}></Route>
          <Route path="/manage-waiter" element={<><Admin_Header/><Manage_Waiter/> <Admin_Footer/></>}></Route> */}

          <Route path="/manage-contact" element={<><Admin_Header /><Admin_Contact /> <Admin_Footer /></>}></Route>

          <Route path="/manage-booking" element={<><Admin_Header /><Manage_Bookings /> <Admin_Footer /></>}></Route>

          {/* <Route path="/feedback" element={<><Admin_Header/><Feedbacks/> <Admin_Footer/></>}></Route> */}

          <Route path="/view_services/:cate_id" element={<><View_services /></>}></Route>
          <Route path="/Employee_profie" element={<><Employee_profile/></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
