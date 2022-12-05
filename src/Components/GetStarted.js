import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import line from '../Images/or.png';
import './GetStarted.css';



const schema=yup.object().shape({
  email:yup.string().email().required(),

})
const GetStarted = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const submitForm=(data)=>{
    console.log(data);
  }
  return (
    <> 
    <section style={{marginTop:"110px"}}>
     <div className=" Form-Validation" style={{marginBottom:"100px"}}>
     <h3 className='blue' ><a href='/'> <img className='logo' style={{height:"45px", width:"fit-content",marginRight:"50px"}} src='
https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png' alt=""  /> </a></h3>

     <br/>
<p className='Free'>Sign up with Calendly for free</p> <br/>
<div className="inputs">
<div className="between">
<form className="Animation"onSubmit={handleSubmit(submitForm)} >
<h5 className='EmailStarted'>Enter your email to get started.</h5>
<input className='EmailAddress'  type="text" name="email" placeholder="email address" {...register ('email')}/>
 {errors.email && <p className='EmailFirst'>Email must be present.</p>}
 <br/>  <br/> 
<input className='GetStarted' type="submit" id="Get Started"/>

{/* <button className='GetStarted' style={{padding:"15px",width:"500px",borderRadius:"50px",backgroundColor:"rgb(0,105,255",color:"white",fontWeight:"700"}} type="button" class="btn btn-primary btn-lg">Get Started</button> */}

  <br/><br/>        

             <div className="myline"> <img src={line} alt="/" style={{width:"500px"}} /></div><br/> 
             
  <div className="Google">
<button className='GoogleButton' onClick={GetStarted}> <h6 style={{paddingTop:"4px"}}> <img  style={{height:"22px", width:"fit-content",marginRight:"6px"}} src='
https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=""  />Sign up with Google</h6></button> <br/><br></br>

  </div>

  <div className="Microsoft">
<button className='MicrosoftButton' onClick={GetStarted}>  <h6 style={{paddingTop:"4px",marginRight:"45px"}}> <img className='logo' style={{marginRight:"6px",height:"22px", width:"fit-content"}} src='
https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' alt=""  />  Sign up with Microsoft</h6></button>

</div> 
<br></br>
<div className='Already'>Already have an account? <div className='Login'>Log in </div></div>


</form>
</div>

</div>  
          <br/>
        <div id="6">
          <label className='blue'>English </label><br/>
          <select className='opi' id='language'>
                        <option disabled selected value="--">English</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                        <option value="español">español</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Português">Português(Brasile)</option>
                      
            </select>
                  
        </div>

</div>
</section>
    </>
  )
}

export default GetStarted