import React, { useState } from "react";
import Styles from '../Component/Styles.css'
import axios from "axios";


const Add_Doctor = () => {
    const [ formData, setFormData ] = useState({
        firstName: "",
        surname: "",
        gender: "",
        address: "",
        mobile: "",
        email: "",
        // password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [ name ]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/Patient_Hospital', formData)
            .then(Response => {
                // console.log(formData);

            })
    };

    return (
        <div className="Formss" >
            <form className="form-container forms mt-5" onSubmit={ handleSubmit }>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={ formData.firstName }
                        onChange={ handleChange }
                    // required
                    />
                </label>

                <label>
                    Surname:
                    <input
                        type="text"
                        name="surname"
                        value={ formData.surname }
                        onChange={ handleChange }
                    // required

                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                </label>

                <label>
                    Gender:
                    <select name="gender" value={ formData.gender } onChange={ handleChange }>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <label>
                    Address
                    <input
                        type="Adress"
                        name="address"
                        value={ formData.address }
                        onChange={ handleChange }
                    />
                </label>

                <label>
                    Mobile:
                    <input
                        type="tel"
                        name="mobile"
                        pattern="[0-9]{10}"
                        value={ formData.mobile }
                        onChange={ handleChange }
                    />
                </label>

                <br /><br />
                <button type="submit" className="btn btn-primary btn-lg text-center">Submit</button>
            </form>
        </div>
    );
};

export default Add_Doctor;