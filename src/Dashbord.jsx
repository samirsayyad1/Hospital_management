import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar'
// import Styles from '../Component/Styles.css'
import { Link } from 'react-router-dom';

function Dashbord() {

  const [ data, setData ] = useState([]);

  const update = () => {
    axios.get('http://localhost:3000/Doctor')
      .then(Response => {
        console.log(Response.data);
        setData(Response.data)
      })
  }
  useEffect(() => {
    update();

  })
  return (
    <>

      <Carousel fade className='slider'>
        <Carousel.Item>
          <img className='sliders' src="https://images.unsplash.com/photo-1681096899399-521fe093f5ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          <Carousel.Caption>
            <h1>Emergency Hospital... </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='sliders' src="https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <Carousel.Caption>
            <h1>Emergency Hospital... </h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='sliders' src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <Carousel.Caption>
            <h1>Emergency Hospital... </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='container'>
        <div className='row Our_Services'>
          <div className='col-md-12 col-lg-12'>
            <h1>Our Services</h1>
          </div>
        </div>
      </div>
      <body className='Dash_bodys mt-5'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-4'>
              <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-100' />
            </div>

            <div className='col-md-6 col-lg-6 col-sm-4'>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed recusandae culpa ipsa quos nihil, nesciunt facere. Provident deleniti fugiat, hic eius laborum vero, libero repudiandae et, placeat possimus sint.
                Tenetur dolores perferendis error illum, minima incidunt illo aspernatur recusandae nisi odit cupiditate sapiente eius fugiat vero! Laboriosam omnis delectus voluptas nam minus praesentium inventore eveniet magnam porro, aperiam facilis!
                Dolore culpa impedit, accusantium voluptates pariatur reiciendis officia fugiat autem ut soluta, dicta illo quod amet unde harum magni. Ullam est veniam ducimus odit, ea impedit quaerat quia blanditiis ad?
                Velit, aspernatur dolor assumenda distinctio voluptatum quo saepe iusto deserunt qui ipsa ratione, consectetur error sit voluptatibus, consequatur eveniet modi vitae ea voluptate alias cupiditate! Minima est dignissimos vel quaerat.

              </h5>

            </div>
          </div>
        </div>
      </body>


      <section className="section mt-5">
        <div className='section1'>
          <div className='container'>
            <div className='row'>

              <Carousel className="custom-carousel">
                { data.map((item, index) => (
                  <Carousel.Item className='dinamic' key={ index }>
                    <img
                      className="imgs"
                      src={ item.img }
                      alt={ `Slide ${index + 1}` }
                    />
                    <span style={ { fontSize: '40px', marginLeft: '40px' } }>{ item.firstName } { item.surname }</span>
                    <p>{ item.desc }</p>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                )) }
              </Carousel>

            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container-fluide text-center'>
          <div className='row'>
            <div className='col-md-4 form'>
              <span> Pages </span>
              <ul>
                <li>
                  <Link to={'/All_Doctor'} className='link'>Doctor</Link>
                </li>
                <li>
                  <Link to={'/All_Apoinment'} className='link'>Apoinment</Link>
                </li>
                <li>
                  <Link to={'/All_Patient'} className='link'>Pestient</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-4 text-center form'>
              <span> Contact Us</span>
              <div className='row'>
                <div className='col-md-6'>
                  <input className='form-control' placeholder='Name' type="text" />
                  <br />
                  <input className='form-control' placeholder='Email' type="text" />
                </div>
                <div className='col-md-6'>
                  <input className='form-control' placeholder='Surname' type="text" />
                  <br />
                  <input className='form-control' placeholder='Mobile' type="text" />
                </div>
                <button className='btn btn-outline-primary'>Save</button>
              </div>
            </div> 
            <div className='col-md-4 form'>
              <span>Social Media</span>
              <ul>
              <li>
                  <Link className='link'to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                  <i class="fa-solid fa-envelope"></i>
                  <span>Email</span>

                  </Link>
                </li>
                <li>
                  <Link className='link'>
                    <i class="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                  </Link>
                     
                </li>
                <li>
                  <Link className='link' to={'https://www.linkedin.com/in/samir-sayyad-8a1763232/'}>
                  <i class="fa-brands fa-linkedin"></i>
                  <span> Linkedin</span>
                  </Link>
                </li>
                <li>
                  <Link className='link' to={'https://github.com/samirsayyad1'}>
                <i class="fa-brands fa-github"></i>
                <span> GitHub </span>
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

}

export default Dashbord;