
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Styles from '../Component/Styles.css'
import axios from 'axios';
import Delete from './Delete_Doc';
import Update_Doc from './Update_Doc';
import { NavLink } from 'react-router-dom';

export default function All_Doctor() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/Doctor')
      .then(res => {
        setData(res.data)

      })
  }, [])

  return (
    // <div className='container  All_Doctor mt-5'>
    <div className='container text-center' >
      <div class="row">
        {
          data.map((item) => {
            return (
              <>
                {/* <div class="col-md-3 col-lg-3 mt-5 text-center All_data"> */}
                <div class="col-md-3 col-lg-3 mt-5 text-center">
                  <div class="card All_Doctors">
                    <div class="card-body">
                      <img className='Profile_img' src={item.img} alt="" />
                      <br />
                      <br />
                      <p><b>Name: { item.firstName } { item.surname }</b></p>
                      
                      <p><b>Specialty: { item.specialty }</b></p>        
                      <p>Mo: { item.mobile }</p>

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
                 
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
}