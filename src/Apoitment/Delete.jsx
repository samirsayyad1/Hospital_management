import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  const param = useParams();

  const deldata = async () => {
    try {
      await axios.delete(`http://localhost:3000/Apoitment/${param.id}`);
      navigate('/All_Apoinment');
    //   alert('say hii')
      
    } catch (error) {
      console.error('Error deleting data:', error);
    //   alert('Error deleting data');
    }
  };
  useEffect(() => {
    deldata();
  }, []); // Add an empty dependency array to run once on mount

  return (
    <div>
      
    </div>
  );
};

export default Delete;
