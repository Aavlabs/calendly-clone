import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Pic1 from '../Images/Easyscheduling.PNG'
import LogoBanner from '../Images/Capture.PNG'
import Pic2 from '../Images/pic1.png';
import '../Css/Home.css';
import { BiDollar } from 'react-icons/bi';
import {TbCircleDashed} from 'react-icons/tb';
import {FaHandshake} from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Pic3  from '../Images/pic3.png';
import Banner2  from '../Images/Calendly-testimonial_.png';
import signature from '../Images/signature.png';
import integrations from '../Images/Integrations-Calendly.webp';
import secureit from '../Images/Calendly-Secure-IT.webp';
import {TiTick} from 'react-icons/ti';


const schema=yup.object().shape({
  email:yup.string().email().required(),
})


const Home = () => {

  const [signup, setSignup] = useState("");

  const {register,handleSubmit,formState: { errors }}=useForm({
      resolver:yupResolver(schema),
  });



  const submitForm=(data)=> {
      console.log(data);
      window.location.href= "/signup";
  }

  const userHandler = (e) => {

      let signup = e.target.value;
      setSignup(signup);
      };

  return (
    <>
    <div className="main1"  style={{paddingTop:"130px",overflow:"visible"}} >
        <div >
          <div className="heading2" style={{textAlign:"left"}}>
          <h1 style={{color:"rgb(11, 53, 88)",fontSize:"64px",textAlign:"left"}}>Easy</h1>
            <h1 style={{color:"rgb(11, 53, 88)",fontSize:"64px",paddingRight:" 135px"}}>Scheduling</h1>
            <h1 style={{color:"rgb(26, 145, 243)",fontSize:"64px",paddingRight:" 285px"}}>ahead</h1>
            <p className='subheading'>Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.</p>
          </div>
          <form class="myform" onSubmit={handleSubmit(submitForm)} style={{display:"inline-block",maxWidth:"fit-content"}}>
               <div class="mb-6"> <input onChange={userHandler} type="email" class="form-control-lg" id="exampleInputEmail1" name="email" placeholder='Enter your email' aria-describedby="emailHelp" {...register('email')} style={{width:"300px",height:"55px",border:"1px inset silver",borderRadius:"5px"}}/>
               
               
               <button type="submit" class="btn btn-lg btn-primary" style={{height:"55px",marginTop:"-9px",marginLeft:"10px"}}>Sign up{signup}</button> <br />
               {errors.email && <p style={{textAlign:"initial",color:"red",fontSize:"10px"}}>Please enter a valid email address.</p>  }

           <div id="emailHelp" class="form-text" style={{textAlign: "initial",
                 fontSize: "large"}}>Create your free account. No credit card required.</div>
                </div>
           
          </form>
            
        </div>
        <div> <img style={{paddingRight:"60px"}} src={Pic1} alt="" /></div>
    </div> <br />
    <section display="flex" style={{justifyContent:"center"}}>
        <h1 style={{ width:"700px",marginTop:"90px",marginInline: "auto", color:"rgb(29, 52, 75"}} >Simplified scheduling for more than 10,000,000 users worldwide</h1>
        <div className="logobanner">
          <img style={{width:'100%',minWidth:"fit-content"}} src={LogoBanner} alt="" />
        </div>
    </section>

    
    <section style={{display:"grid",justifyContent:"center"}}>
      <div className="headline" style={{marginTop:"80px",width:"800px",marginLeft: "20%"}}>
        <h1 style={{color:" rgb(29, 52, 75",fontSize:"53px"}}>Designed for teams who conduct meetings at scale</h1>
      </div>
      <div className="insidenav">
        
        <li><a href="">Sales</a></li>
        <li><a href="">Marketing</a></li>
        <li><a href="">Customer Success</a></li>
        <li><a href="">Recruiting</a></li>
        <li><a href="">Information Technology</a></li>
        <li><a href="">Education</a></li>
        
      </div>
      <div className="temp1">
        <div className="div1">
          <p className='para'>
            <li>
              <h5><BiDollar style={{color:"blue",marginRight:"5px",marginBottom:"5px"}}/>Drive more revenue</h5>
            <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
            </li> <br />
            <li >
              <h5><TbCircleDashed style={{color:"blue",marginRight:"5px",marginBottom:"5px"}}/>Speed up your sales cycle</h5>
            <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle</p>
            </li> <br />
            <li>
              <h5><FaHandshake style={{color:"blue",marginRight:"5px",marginBottom:"5px"}}/>Close more deals</h5>
            <p>Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.</p>
            </li> <br />
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
          </p>
        </div>
        <div className="div2"> <img src={Pic2} className="pic2" alt="" /></div>
      </div>
    </section>


    <section className='weMakeScheduling' >
      <h1 style={{color:" rgb(29, 52, 75",fontSize:"53px",width:"700px",marginInline: "auto",marginTop:"170px"}}>We make scheduling for you easier than ever</h1>
      <div className="container2">
    <div className="div3" >
      <form action="" style={{textAlign:"initial",paddingLeft:"80px",width:"500px"}}>
      <h3 style={{fontSize:"38px", color:"rgb(29, 52, 75",marginTop:"40px",marginBottom:"30px"}}>Share your Calendly availability with others</h3> <br />
      <p style={{marginBottom:"40px",fontSize:"18px",width:"450px",color:"grey"}}>Grow your business with scheduling automation. Simply email, text, or add your Calendly availability to your website – and watch prospects and recruits book high-value meetings with you.</p>
      <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form>
      <br />

      <form action="" style={{textAlign:"initial",paddingLeft:"80px",width:"500px",marginTop:"60px"}}>
      <h3 style={{fontSize:"38px", color:"rgb(29, 52, 75",marginTop:"40px",marginBottom:"30px"}}>Schedule as a team</h3> <br />
      <p style={{marginBottom:"40px",fontSize:"18px",width:"450px",color:"grey"}}>Calendly adapts to both you and your team's scheduling preferences. Co-host a client call with a colleague, email reminders and follow-ups, and integrate everything with your preferred software tools</p>
      <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form> 
      <br />
      <form action="" style={{textAlign:"initial",paddingLeft:"80px",width:"500px",marginTop:"80px"}}>
      <h3 style={{fontSize:"38px", color:"rgb(29, 52, 75",marginTop:"40px",marginBottom:"30px"}}>Hit your number</h3> <br />
      <p style={{marginBottom:"40px",fontSize:"18px",width:"450px",color:"grey"}}>High-value meetings are the lifeblood of your business. Increase revenue, retain customers, and land recruits with the #1 scheduling automation platform</p>
      <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form>
    </div>
    <div className="div4"> <img style={{width:"500px"}} src={Pic3} alt="" /> </div>
    </div>
    </section>
    
    <section className='banner2'style={{marginTop:"150px"}}>
      <div> 
        <img style={{width:"650px"}} src={Banner2} alt="" />
      </div>
      <div style={{marginTop:"100px",textAlign:"initial",color:"rgb(11, 53, 88)"}}>
        <h2>“Calendly has increased meetings with customers by 216% for our Vonage team.”</h2> <br />
        <img  src={signature} alt="" />  <br />
        <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px",marginTop:"30px"}} href="#"> Read more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </div>
      
    </section>
    <section>
      <div className="heading5" style={{marginTop:"140px"}}> <h1 style={{fontSize:"39px",fontWeight:"bold"}}>Scheduling automation happens before <br /> and after meetings</h1></div>
      <div className="parent5" >
        <div className="childdiv1">
          <h1 style={{marginTop:"100px",fontSize:"56px",textAlign:"initial",paddingLeft:"60px",fontWeight:"bold",color:"rgb(11, 53, 88)"}}>Integrations and <br/> Extensions</h1>
          <p style={{marginTop:"30px",fontSize:"22px",textAlign:"initial",paddingLeft:"60px"}}>Boost productivity with integrations that fold right into your workflow.</p>
          <button type="submit" class="btn btn-lg btn-primary" style={{height:"60px",marginTop:"40px",marginRight:"280px"}}>Explore Integrations</button>
        </div>
        <div className="childdiv1"> <img style={{width:"600px",marginTop:"50px",marginBottom:"30px"}} src={integrations} alt="" /></div>
      </div>
    </section>
    <section className='secureit'>
      
      <div className="childdiv3">
        <img style={{width:"600px",marginBottom:"40px"}} src={secureit} alt="" />
      </div>
      <div className="childdiv4" style={{display:"block",marginTop:"20px",textAlign:"initial"}}>
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold"}}>Make your IT team feel secure and safe</h1>
        <br />
        <h5>  <TiTick/>Centralize billing</h5>

<p> Hundreds of coworkers use Calendly – bring them all together in one secure, managed account.</p>

<h5> <TiTick/>Secure your Calendly usage</h5>

<p> Single-sign-on, SCIM, and more make it easy to onboard/offboard users, mandate passwords, and more.</p>

<h5><TiTick/>Standardize how your teams use Calendly</h5>

<p> Manage how your coworkers create meeting types, send consistent reminders, and adhere to brand standards.</p>
      </div>
    </section>

    <section style={{height:"360px",background:"rgba(156, 196, 223, 0.316)"}}>
      <div className="banner5">
        <h1 style={{paddingTop:"100px",fontSize:"54px", color:"rgb(29, 52, 75"}}>Get started in seconds</h1> <br />
        <button type="submit" class="btn btn-lg btn-primary" style={{height:"60px",marginTop:"-9px",marginLeft:"10px"}}>Start for Free</button>
        <button type="submit" class="btn btn-lg btn-outline-primary" style={{height:"60px",marginTop:"-9px",marginLeft:"10px",border:"2px solid"}}>Talk to Sales</button>
      </div>
      
    </section>
    </>
  )
}

export default Home;