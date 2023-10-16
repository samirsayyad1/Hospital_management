import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

import Update from './Update';
import Delete from './Delete';


function ResponsiveExample() {

  const [ data, setData ] = useState([]);

  const [ inputValue, setInputValue ] = useState('');
  const [ isAvailable, setIsAvailable ] = useState(false);


  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Apoitment?firstName=${inputValue}`);
      setIsAvailable(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error if needed
    }
  };

  useEffect(() => {

    axios.get('http://localhost:3000/Apoitment')
      .then(responce => {
        setData(responce.data)
      })

  },[inputValue])

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

    <div className=''>
      <Table responsive className='All_Apoinments w-100 table-hover'>
      <thead>

        <tr className='text-center table-striped table-dark' >
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Date</th>
          <th>Consulting</th>
          <th>Injury</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return (
              <tr>
                <td>{ item.firstName }</td>
                <td>{ item.email }</td>
                <td>{item.mobile}</td>
                <td>{ item.date }</td>
                <td>{ item.Consulting }</td>
                <td>{ item.Injury }</td>
               
                <td>
                  <NavLink className=" m-2" to={ `/Update/${item.id}` }>
                    <button className='btn btn-primary'>Edit</button>
                  </NavLink>
                  <NavLink className="" to={ `/Delete/${item.id}` }>
                      <button className='btn btn-danger'>Remove</button>
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
  );
}

export default ResponsiveExample;