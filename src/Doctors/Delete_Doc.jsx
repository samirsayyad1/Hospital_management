import axios from 'axios';
import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


export default function Delete() {
  const navigate = useNavigate();
  const params = useParams();

   const deldata =()=>{
 
      axios.delete(`http://localhost:3000/Doctor/${params.id}`)
     .then(Response=>{
       navigate('/All_Doctor'); 
    })
    .catch(err=>{
    })
}

    useEffect(()=>{
      deldata();
    })
}