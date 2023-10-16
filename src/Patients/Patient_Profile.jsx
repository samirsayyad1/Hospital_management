import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Styles from '../Component/Styles.css'
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function Patient_Profile() {

  // const navigate = useNavigate();

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Patient_Hospital')
      .then(Response => {
        setData(Response.data);
    // navigate('/All_Patient')

      })

  }, [])

  return (
    <div className=''>
      <div className='container '>
        <div className='row'>
          {
            data.map((item) => {
              return (
                <>
                  <div className="col-md-4 col-lg-3  mt-5 text-center">
                    <div className="card All_Doctors">
                      <div className="card-body ">
                        <img className='Profile_img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAY1BMVEX////MzMxNTU3JycnQ0NBJSUnp6elDQ0PT09P7+/v29vY9PT1AQEDv7+/c3NzY2NiQkJCmpqbj4+O8vLxUVFRhYWFvb284ODiBgYGKioqsrKy0tLRcXFzDw8N3d3doaGiZmZn92lOFAAAE9ElEQVR4nO2bW5uaMBCGCyQQjhoicnBR//+vbEDbtbuZISfci+brxfZpV32Zmcwhib9+BQUFBQUFBQUFBQUF/SfK86JO27ZpmrZN6yLPfw6lbhsWJQ89fkasaesfIClStn78Vy3/yNLirSyptMk3kBekiKXvQilahU2+26h9h4GKBjXLq4GavXnyRsMun/Zpdl1jqaZdPu2zX/zkBzOWleewk3lSc5aVZxfztHYwEqf1zrLhJSL/wDi+vVUwEIawREjNCYOBiNe1XhAIhrDL0J1iGp+64QLyJD5xCpAlucclpfEqWsb3BOTxhlMAH0HI3FXxq7JuJtAve8LJATcxMWQ0/lc0GwQDnOUnlNWriUTHbyxPHsBdBx8w6jzDLp2KZXXXx0VpHh95R52BGS8hmCWcuRrHOSvnajdNMMvKc1c6K3ENnYMyBJIMhYnj/qLEcQwdwE/jFg29qo3j5KtcaZloPm3AxPFpVr/UxVeN2jTDlmnkwhrUgdzYwwAV4YCH8NNXQMTZp2S1achcatD0szpyrI1TKJ8uInzbUdJVHChYtsYBuj121PFUdgTqlW1GBvoIMmjFzQDYJrGDgbpyctWiUWcc65yjtrTUWYvmDL2c2cAAMexOYxXH8PjkSGPlKtBRjnFj5yrQNGzUohnBx7FYVTU8QN21sp+6xVlpzDfj4EGXTNU2TFxNMI15AlTXqJVG6NSpUsCjp3HTlYNel1Wz16ABqubjHUy7HKDPWt/L1VPmPRc47EbsqmMaaZwrvKhM8x+8pGYtlkVAM2qxqMBMTLhOtllEoQ7HPBuDC5wcdbLNouwI0pgucZhGq7tZbQN1OOY0YLrxQmPaHMM0Pjzlj2ZjBH+xDZxxTGmQMrU9aD508leoYJrtIfzpKKSlMKWBOz8idAqDLA1w2TTON3Au1tkTWB0FpmLzXAzXKbmqtDoKcEVZ1CmkhsvIAff8/oh2cNRE5jU8R/qBiCVbzjolGIz5Zq16w+PP220MMfSMPYzFPgV6ALRVHuCisNKY98XIotouD3BRWGksDvBRmo0mB25tVhpzGHjWXGgEChPHyMBgN2uix5jshhmH3rBHsZrD4T2KxTgcKw8V6ii7vTbs+aIESYC0Q89ArfZvcFdhwzgygkf2++kozYTQYIOd7b4fmgDJBQ6cTH3k8YSx3RPF4hijqTAa6/1iZJ8C3RookQ0Bh4MGpMmJIpimR17lchKNGQeh2cU0YM9FCDsgRx/lfGBQsnI6S1TlHEJmfhw6EEZmv+HIlcf0rues35suJoayyihaxGlWlapjetcj8S9nvoSIAQf5JKKD+GIf5zPff3xF2HSmumO4zIL0PL1eO/FxS+lvRiYRPyFn8kr7lCf+956QnztKh6eP+E15cWKDJ7vxh78SL/coljsmhCX3rjdnWXn67r7cW2KerksVRIwnzdhV8tB4FP5uJxW9zqyLqew9XpVKO/2VpFLWeb30l3644GQfnm8gFpo76Cr1V++XaXNuGzsl3+OqqKhslhWtxA4sUvVgbp5y2O/WvDCoUouyeCfDPFTcK4OqWd33vgtej7Hmnmg8vuOrDS3vN0sW7Xvu/1qxWrm4UgRI/t9VvPU7KI04y35UcU9U9qBn4TIZWCqPpvEmXdKX1aJS/o3exsltLHBSUadMTJzfOZ8ES+v3fgEmKCgoKCgoKCgoKCjoB/UbdV9NAsRsMF0AAAAASUVORK5CYII=" alt="" />
                        <br />
                        <span><b>Name: { item.firstName } { item.surname }</b></span>
                        <br />
                        <span>Address: { item.address }</span>
                        <br />
                        <span>Gender:{ item.gender }</span>
                        <br />
                        <span>Mo: { item.mobile }</span>
                        <br />
                        <br />
                        <NavLink className=" m-2" to={ `/Update_Patient/${item.id}` }>
                          <button className='btn btn-primary'>
                            Update
                          </button>
                        </NavLink>
                        <NavLink className="" to={ `/Delete_Patient/${item.id}` }>
                          <button className='btn btn-danger'>
                            Delete
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
    </div>
  )
}
export default Patient_Profile
