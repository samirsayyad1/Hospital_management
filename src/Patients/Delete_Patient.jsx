import axios from 'axios';
import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


export default function Delete() {
  const navigate = useNavigate();
  const params = useParams();

   const deldata =()=>{
 
      axios.delete(`http://localhost:3000/Patient_Hospital/${params.id}`)
     .then(Response=>{
       navigate('/All_Patient'); 
    })
    .catch(err=>{
    })
}

    useEffect(()=>{
      deldata();
    })
}