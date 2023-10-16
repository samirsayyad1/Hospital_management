import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Styles from '../Component/Styles.css'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import Update_Patient from './Update_Patient';
import Delete_Patient from './Delete_Patient';

function All_Patient() {

  const [ data, setData ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ isAvailable, setIsAvailable ] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Patient_Hospital?firstName=${inputValue}`);
      setIsAvailable(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/Patient_Hospital')
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
              <h4>Available :  { inputValue }</h4>
            ) : (
              <h4>Not found :  { inputValue }</h4>
            ) }
          </div>
        </div>

      </div>

      <div className='tables'>
      <Table responsive className='All_Apoinments table-hover' >
        <thead className='text-center' >

            <tr className='table-striped table-dark ' >

              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Email</th>
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
                  {/* <td>{ item.id }</td> */}
                  <td>{ item.firstName }</td>
                  <td>{ item.email }</td>
                  <td>{ item.mobile }</td>
                  <td>{ item.gender }</td>
                  <td>{ item.address }</td>
                  <td>
                    <NavLink className=" m-2" to={ `/Update_Patient/${item.id}` }>
                      <button className='btn btn-primary'>
                       <i class="fa-solid fa-pencil fa-beat"></i>
                      </button>
                    </NavLink>
                    <NavLink className="" to={ `/Delete_Patient/${item.id}` }>
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
      </div>
    </>
  )
}

export default All_Patient