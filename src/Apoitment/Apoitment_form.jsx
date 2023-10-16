import React, { useState } from "react";
import Styles from '../Component/Styles.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Apoitment_form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
   
    date: "",
    Consulting: "",
    mobile: "",
    email: "",
    Injury: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:3000/Apoitment',formData)
      .then(Response=>{
        console.log(Response.data);
        navigate('/All_Apoinment');
      })
  };

  return (
    <div className="Formss" >
      <form className="form-container forms" onSubmit={handleSubmit}>
        <label>
           Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            // required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>

        <label>
        Consulting
          <input
            type="text"
            name="Consulting"
            value={formData.Consulting}
            onChange={handleChange}
          />
        </label>

        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>

        <label>
        Injury/Condition
          <input
            type="text"
            name="Injury"
            value={formData.Injury}
            onChange={handleChange}
          />
        </label>
<br /><br />
        <button type="submit" className="btn btn-primary btn-lg text-center">Submit</button>
      </form>
    </div>
  );
};

export default Apoitment_form;