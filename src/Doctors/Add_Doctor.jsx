import React, { useState } from "react";
import Styles from '../Component/Styles.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Add_Doctor = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dateOfBirth: "",
    specialty: "",
    mobile: "",
    email: "",
    password: "",
    img:"",
    desc:"",
    address:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:3000/Doctor',formData)
      .then(Response=>{
        // console.log(formData);
        navigate('/All_Doctor');
        
      })
  };

  return (
    <div className="Formss" >
      <form className="form-container forms" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            // required
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
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
          Desciption:
          <input
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>

        <label>
          Specialty:
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
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
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type='url'
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type='text'
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        
<br /><br />
        <button type="submit" className="btn btn-primary btn-lg text-center">Submit</button>
      </form>
    </div>
  );
};

export default Add_Doctor;