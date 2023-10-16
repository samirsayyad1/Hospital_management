import React from "react";
// import App from "./App.css";
import Menu_List from './Menu_List'
import Dashbord from './Dashbord';
import Apoinment from "./Apoitment/Apoitment_form";
import Doctors from './Doctors';
import index from './index.css'
// import Styles from './Styles.css'
import './Component/Styles.css'
import Add_Doctor from './Doctors/Add_Doctor'
import Doctors_Profile from './Doctors/Doctors_Profile'
import All_Patient from "./Patients/All_Patient";
import Add_Patient from "./Patients/Add_Patient";
import Patient_Profile from "./Patients/Patient_Profile";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All_Doctor from "./Doctors/All_Doctor";
import Login from "./Login";
import Register from "./Register";

import Apoitment_form from "./Apoitment/Apoitment_form";
import All_Apoinment from "./Apoitment/All_Apoinment";

import Update from "./Apoitment/Update";
import Delete from "./Apoitment/Delete";

import Update_Doc from "./Doctors/Update_Doc";
import Delete_Doc from "./Doctors/Delete_Doc";

import Update_Patient from "./Patients/Update_Patient";
import Delete_Patient from "./Patients/Delete_Patient";

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Menu_List/>
        
        <Routes>
          <Route path="/Dashbord" exact element={<Dashbord/> } />
          <Route path="/Apoinment" element={<Apoinment/>} />
          <Route path="/Add_Doctor" element={<Add_Doctor/>} />
          <Route path="/Doctors_Profile" element={<Doctors_Profile/>} />
          <Route path="/All_Doctor" element={<All_Doctor/>} />

          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/All_Patient" element={<All_Patient/> } />
          <Route path="/Add_Patient" element={<Add_Patient/>} />
          <Route path="/Patient_Profile" element={<Patient_Profile/>} />

          <Route path="/Apoitment_form" element={<Apoitment_form/>} />
          <Route path="/All_Apoinment" element={<All_Apoinment/>} />

          <Route path="/Update/:id" element={<Update/>} />
          <Route path="/Delete/:id" element={<Delete/>} />

          <Route path="/Delete_Doc/:id" element={<Delete_Doc/>} />
          <Route path="/Update_Doc/:id" element={<Update_Doc/>} />

          <Route path="/Delete_Patient/:id" element={<Delete_Patient/>} />
          <Route path="/Update_Patient/:id" element={<Update_Patient/>} />

        </Routes>
      </Router>
    </div>
  );
}
