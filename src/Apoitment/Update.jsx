import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update(id) {
    
const navigate = useNavigate()
    const per = useParams();
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
      
    
      useEffect((id) => {
        axios.get(`http://localhost:3000/Apoitment/${per.id}`)
          .then(response => {
            setFormData(response.data);
            
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [per.id]);

      const handleSubmit = (id) => {
        // e.preventDefault();
        navigate('/All_Apoinment')
        axios.put(`http://localhost:3000/Apoitment/${per.id}`, formData)
          .then(response => {
            console.log('Data updated successfully:', response.data);
            
          })

          .catch(error => {
            console.error('Error updating data:', error);
          });
      };
    return (
        <>
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
        {/* <button type="submit" className="btn btn-primary btn-lg text-center">Submit</button> */}
        <button className='btn btn-outline-primary mt-4' onClick={ (e) => handleSubmit(per.id) }>Save</button>

      </form>
    </div>
        </>
    )
}

export default Update;
