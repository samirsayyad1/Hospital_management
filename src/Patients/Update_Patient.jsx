import React, { useState } from "react";
import Styles from '../Component/Styles.css'
import axios from "axios";
import {useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Update_Patient = () => {
  const per = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dateOfBirth: "",
    mobile: "",
    address:"",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect((id) => {
    axios.get(`http://localhost:3000/Patient_Hospital/${per.id}`)
      .then(response => {
        setFormData(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [per.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.put(`http://localhost:3000/Patient_Hospital/${per.id}`, formData)
    .then(response => {
      console.log('Data updated successfully:');
      navigate('/All_Patient')

      
    })

    .catch(error => {
      console.error('Error updating data:', error);
    });
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
        Address
          <input
            type="text"
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

export default Update_Patient;