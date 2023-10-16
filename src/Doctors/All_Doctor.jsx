import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Styles from '../Component/Styles.css'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import Update from './Update_Doc';
import Delete from './Delete_Doc';

function Doctors_Profile() {

  const [ data, setData ] = useState([]);
  // const [inp,setInp] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ isAvailable, setIsAvailable ] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Doctor?firstName=${inputValue}`);
      setIsAvailable(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/Doctor')
      .then(Response => {
        setData(Response.data);
      })


  }, [ inputValue ])
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    fetchData();
  }
  return (
<>
<div className='text-center' >
        <div className='datas'>
          <label className='mt-5'>
            Search Doctor:
            <input type="text" value={ inputValue } onChange={ handleChange } />
          </label>
          <button onClick={ handleButtonClick }>Search</button>
          <div>
            { isAvailable ? (
              <h4>Doctor is available :  { inputValue }</h4>
            ) : (
              <h4>No doctor found :  { inputValue }</h4>
            ) }
          </div>
        </div>

      </div>

      <Table responsive className='All_Apoinments table-hover'>
        <thead>

          <tr className='text-center table-striped table-dark'>

            {/* <th>Img</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr>
                  {/* <td>
                    <img src={ item.img } alt="" />
                  </td> */}
                  <td>{ item.firstName }</td>
                  <td>{ item.email }</td>
                  <td>{ item.specialty }</td>
                  <td>{ item.mobile }</td>
                  <td>{ item.gender }</td>
                  <td>{ item.address }</td>
                  <td>
                    <NavLink className=" m-2" to={ `/Update_Doc/${item.id}` }>
                      <button className='btn btn-primary'>
                      <i class="fa-solid fa-pencil fa-beat"></i>
                      </button>
                    </NavLink>
                    <NavLink className="" to={ `/Delete_Doc/${item.id}` }>
                      <button className='btn btn-danger'>
                      <i class="fa-solid fa-trash fa-beat-fade"></i>
                      </button>
                    </NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
  </>
  )
}

export default Doctors_Profile
