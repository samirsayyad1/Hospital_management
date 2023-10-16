import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Update_Doc() {
    
const navigate = useNavigate()
    const per = useParams();
    const [formData, setFormData] = useState({
        firstName: "",
        date: "",
        specialty: "",
        mobile: "",
        email: "",
        address: "",
        gender:"",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
    
      useEffect((id) => {
        axios.get(`http://localhost:3000/Doctor/${per.id}`)
          .then(response => {
            setFormData(response.data);
            
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [per.id]);

      const handleSubmit = (id) => {
        // e.preventDefault();
        navigate('/All_Doctor')
        axios.put(`http://localhost:3000/Doctor/${per.id}`, formData)
          .then(response => {
            console.log('Data updated successfully:', response.data);
            
          })

          .catch(error => {
            console.error('Error updating data:', error);
          });
      };
  return (
    <div className="Formss" >
      <form className="form-container forms">
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
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>


        <label>
        Specialty
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
        Address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
<br /><br />
        <button className='btn btn-outline-primary mt-4' onClick={ (e) => handleSubmit(per.id) }>Save</button>

      </form>
    </div>

  )
}

export default Update_Doc
