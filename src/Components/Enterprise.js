import React from 'react'
import pic from "../Images/entPic1.jpeg";
import pic2 from "../Images/entPic2.jpeg";
import pic3 from "../Images/entPic3.jpeg";
import "../Components/Enterprise.css";
import pic4 from "../Images/entPic4.jpeg";
import pic5 from "../Images/entPic5.jpeg"; 
import Pic7 from "../Images/entPic7.jpeg";
import pic8 from "../Images/entPic8.jpeg";
import pic9 from "../Images/entPic9.jpeg";
import pic10 from "../Images/entPic10.jpeg";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiDollar} from 'react-icons/bi';
import {TbCircleDashed} from 'react-icons/tb';
import {FaHandshake} from 'react-icons/fa';
import {RiComputerLine} from 'react-icons/ri';
import {CgChevronRight} from 'react-icons/cg';
import{AiOutlineApartment} from "react-icons/ai";
import { BsCalendar3WeekFill } from 'react-icons/bs';


export default function Enterprise() {
    return (
        <>
    <section className='entBody1' >
        <div className='ent1'>
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px",textAlign:"initial"}}>The Only <span style={{color:"rgb(0, 119, 255)"}}>Enterprise <br/>Grade</span> Scheduling <br/> Automation <br/>Platform</h1>
                <p style={{marginTop:"20px",color:"rgb(11, 53, 88)",fontWeight:"350",fontSize:"1.16775rem",textAlign:"initial"}}>Standardize on the #1 scheduling platform and <br/>deliver the power of Calendly across your entire<br/> organization.</p>
        
        <button style={{marginTop:"20px",marginRight:"320px",width:"60mm",height:"12mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer"}}>Talk to an enterprise expert</button>
        </div>
        <div className='ent2'>
        
            <img  src={pic} alt='pic1'/>
            <br/>
           
        </div>
    </section>
    <section className='EntBody2'>
        <h2 style={{color:"rgb(11, 53, 88)",fontSize:"36px",paddingBottom:"20px"}}>Trusted by more than <span style={{color:"rgb(0, 119, 255)"}}>50,000 </span> of the world’s<br/> leading organizations</h2>
        <img  src={pic4} alt='pic'/>

    </section>
    <section className='EntBody3'>
        <div style={{marginTop:"100px"}} className="ent3">
            <img src={pic2} alt='pic3'/>
        </div>

        <div style={{marginTop:"40px",textAlign:"initial"}}   className="ent4">
            <h4 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"60px"}}>A LEADER YOU CAN BET ON</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"40px"}}>The undisputed <br/> leader in scheduling<br/> automation</h1>
            <h7 style={{color:"rgb(11, 53, 88)"}}>With thousands of five-star reviews, millions of<br/> customers, and 100-plus partner integrations, Calendly<br/> is a best bet in enterprise software.</h7>
        </div>
    </section>
    <section className='EntBody4'>
        <div style={{marginTop:"100px",textAlign:"initial"}}   className="ent5">
        <h5 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"60px"}}>TESTIMONIALS</h5>
        <h2 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"2.36875rem"}}>Real people, real <br/>results</h2>
        <h7 style={{color:"rgb(11, 53, 88)"}}>Don’t just take it from us. Here’s what some of our happy<br/> customers are saying.</h7>
        <br />
        <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer",marginRight:"20px",marginTop:"20px"}}>Request a demo</button>
        <button style={{width:"30mm",height:"12mm",backgroundColor:"white",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",color:"rgb(0, 119, 255)",cursor:"pointer"}}>Learn more</button>
        </div>

        <div style={{marginTop:"100px"}} className="ent6">
            <div class="card" style={{backgroundColor:"white",width:"500px",paddingTop:"10px",paddingLeft:"12px",textAlign:"initial",height:"250px"}}>
                <h5 style={{color:"rgb(11, 53, 88)",fontSize:"15px"}}>“As we started to understand and appreciate the scope of how <br/> Calendly can be used, we realized it was something that we needed<br/> to bring into the company at a wider level."</h5>
                <img src={pic5} alt="david"/>
                <br />
                <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px",width:"300px",color:"rgb(0, 119, 255)"}} href="https://calendly.com/customers/agriwebb"> Read the case study<AiOutlineArrowRight style={{marginLeft:"5px",paddingTop:"15px",color:"rgb(0, 119, 255)"}}/></a>

            </div>
        </div>
    </section>
    <section className='EntBody5'>
    <div className='ent7'>
            <img src={pic3} alt='pic4'/>
    </div>

    < div className='ent8' style={{textAlign:"initial"}}>
        <h5 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"20px"}}>BILLING</h5>
        <h2 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"2.36875rem"}}>Centralize billing and user<br/>management</h2>
        <h7 style={{color:"rgb(11, 53, 88)"}}>Manage users, teams, reporting, and Calendly look and<br/> feel, all from one centralized admin dashboard and<br/>payment source. No more unknown personal accounts to<br/>track down.</h7>
        <br />
        <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px",width:"300px",color:"rgb(0, 119, 255)"}} href="https://calendly.com/customers/agriwebb">Learn more<AiOutlineArrowRight style={{marginLeft:"5px",paddingTop:"15px",color:"rgb(0, 119, 255)"}}/></a>
    </div>
    </section>
    <section className='EntBody6'>
        <div className='ent9'>
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px",paddingBottom:"10px"}}>Meeting Automation</h1>
        <h1 style={{color:"white",fontWeight:"750",fontSize:"48px",backgroundColor:"rgb(0, 119, 255)",width:"160mm",height:"20mm",borderRadius:"2mm",alignItems:"center",marginLeft:"380px"}}>Increase Revenue</h1>
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px"}}>across your enterprise</h1>
        </div>
        <div className='ent10' style={{display:"inline-flex",textAlign:"initial"}}>
          <div className='ent10a' style={{width:"400px"}}>
          <h1 style={{color:"rgb(0, 119, 255)",fontWeight:"750",fontSize:"48px"}}>45<span style={{color:"rgb(11, 53, 88)",marginLeft:"10px",fontWeight:"750",fontSize:"48px"}}>%</span></h1>
               <br/> <p style={{fontWeight:"600",fontSize:"24px",color:"rgb(11, 53, 88)"}} >Faster meeting<br/>scheduling</p>
          </div>
          <div className='ent10b' style={{width:"400px",borderLeft:"2px ridge rgb(199, 199, 193)",paddingLeft:"40px"}}>
          <h1 style={{color:"rgb(0, 119, 255)",fontWeight:"750",fontSize:"48px"}}>25<span style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px"}}>%</span></h1>
              <br/>  <p style={{fontWeight:"600",fontSize:"24px",color:"rgb(11, 53, 88)"}} >More revenue per lead</p>
          </div>
          <div className="ent10c" style={{borderLeft:"2px ridge rgb(199, 199, 193)",paddingLeft:"40px"}} >
          <h1 style={{color:"rgb(0, 119, 255)",fontWeight:"750",fontSize:"48px"}}>100<span style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px"}}>%</span></h1>
              <br/><p style={{fontWeight:"600",fontSize:"24px",color:"rgb(11, 53, 88)"}} >More candidate screens</p>
          </div>
        </div>
    </section>

    <section  style={{display:"grid",justifyContent:"center"}}>
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
        <div className="div2">  <img style={{paddingTop:"20px"}} src={Pic7} className="pic7" alt="" /></div>
      </div>
    </section>
    <section className='EntBody8'>
    <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px",paddingBottom:"10px",textAlign:"center"}}>A scheduling automation <br/>platform built for enterprise</h1>
    </section>
    <section className='EntBody9'>
        <div className='ent11' style={{paddingTop:"120px",textAlign:"initial"}}>
        <h2 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"2.36875rem"}}>Ensure security and<br/>compliance</h2>
        <h3 style={{color:"rgb(11, 53, 88)",fontSize:"20px"}}>Empower IT departments with SOC 2 Type II <br/>certification, as well as secure Calendly usage with <br/>SAML SSO, onboard and offboard users with SCIM <br/>provisioning, and ensure GDPR compliance.</h3>
        <br />
        <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer",marginRight:"20px",marginTop:"20px"}}>Request a demo</button>
        <button style={{width:"30mm",height:"12mm",backgroundColor:"white",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",color:"rgb(0, 119, 255)",cursor:"pointer"}}>Learn more</button>
        </div>
        <div style={{marginTop:"50px"}} className="ent12">
            <img src={pic8} alt='pic8'/>
        </div>
    </section>

    <section className='EntBody10'>
        <div  className='ent13'>
            <img src={pic9} alt='pic9'/>
        </div>
        <div className='ent14'  style={{paddingTop:"60px",textAlign:"initial"}}>
            <h2 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"2.36875rem",marginLeft:"20px"}}>Keep your data yours</h2>
            <h3 style={{color:"rgb(11, 53, 88)",fontSize:"20px",fontWeight:"400",marginLeft:"20px"}}>Achieve data privacy with a platform that never stores<br/>passwords, content, or PII associated with your teams’ <br/>accounts. </h3>
            <br />
            <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer",marginRight:"20px",marginTop:"20px",marginLeft:"20px"}}>Request a demo</button>
            <button style={{width:"30mm",height:"12mm",backgroundColor:"white",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",color:"rgb(0, 119, 255)",cursor:"pointer",marginLeft:"20px"}}>Learn more</button>
        </div>
    </section>
    {/* Increase conversions by scheduling as a team */}
    <section className='EntBody11'>  
    <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"750",fontSize:"48px",paddingBottom:"10px",textAlign:"center"}}>Increase conversions by <br/>scheduling as a team</h1>
    <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",border:"none",borderRadius:"2mm",color:"white",marginTop:"20px"}}>Request a demo</button>

    <div className="ent14ab" style={{display:"flex",marginTop:"40px",justifyContent:"center",gap:"30px"}}>
        <div class="cards">
            <RiComputerLine style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Leverage omnichannel scheduling</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter"}}>Embed Calendly in your website to <br/>increase speed-to-lead,and only<br/>send the best leads to your team for<br/>optimal team utilization.</h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
        </div>
        <div class="cards">
            <BsCalendar3WeekFill style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Collaborate across teams</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter",paddingTop:"20px"}}>Gain access to multi-person <br/>scheduling to share leads,join<br/>colleagues to win deals,and reach<br/>customers at scale.</h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
        </div>
        <div class="cards">
            <AiOutlineApartment style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Improve communication with <br/>clients to move deals along to close</h6>
            <h6 style={{paddingBottom:"5px",color:"grey",fontWeight:"lighter"}}>Leverage Workflows to increase<br/>meeting attendance,reduce no-<br/>shows,and nurture clients.<br/>customers at scale.</h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"40px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
        </div>
    </div>
    </section>
    <section className='EntBody12'>
        <div className='ent15'  style={{textAlign:"initial"}}>
        <h2 style={{color:"rgb(11, 53, 88)",fontSize:"30px",marginTop:"40px",marginLeft:"2px"}}>Partner with our Customer Success<br/> team for a white-gloved experience</h2> <br/>
              <h3><CgChevronRight style={{color:"rgb(11, 53, 88)",marginRight:"5px",marginBottom:"5px",fontSize:"20px"}}/>Consultative onboarding</h3>
            <p style={{color:"rgb(11, 53, 88)"}}>From configuration and administration to user-<br/>training and reporting, Enterprise Plan customers <br/>receive a white-gloved, dedicated implementation<br/> experience.</p>
             <br />
            <h3><CgChevronRight style={{color:"rgb(11, 53, 88)",marginRight:"5px",marginBottom:"5px",fontSize:"20px"}}/>Dedicated team and 24/7 support</h3>
            <p style={{color:"rgb(11, 53, 88)"}}>Enterprise Plan customers receive a dedicated<br/> Customer Success Manager and 24/7 expert support <br/>to drive the most value from Calendly.</p>
            <br/>
            <h3><CgChevronRight style={{color:"rgb(11, 53, 88)",marginRight:"5px",marginBottom:"5px",fontSize:"20px"}}/>Integrate seamlessly with the way you work</h3>
            <p style={{color:"rgb(11, 53, 88)"}}>Embed Calendly into your team’s existing tools and <br/>processes. Easily adjust as you grow and scale.</p>
     

        </div>
        <div  style={{marginTop:"50px"}} className='ent16'>
            <img src={pic10} alt='pic10'/>
        </div>
    </section>

    <section className='EntBody13' >
        <h1 style={{color:"white",fontWeight:"750",fontSize:"48px",paddingTop:"50px",textAlign:"center",marginLeft:"30px",marginTop:"20px"}}>Get started with Calendly for<br/> Enterprise </h1>
        
    <button type="submit" class="btn btn-lg btn-primary" style={{height:"50px",marginTop:"10px",marginLeft:"10px",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Start for free</h6></button> 
        <button type="submit" class="btn btn-lg btn-outline-primary" style={{height:"50px",marginTop:"10px",marginLeft:"10px",border:"2px solid",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Talk to sales</h6></button>
    <br/>
    </section>
           
        

        
         
        </>
    )
}