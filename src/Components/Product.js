import React from 'react';
import '../Components/Product.css';
import "bootstrap/dist/css/bootstrap.css"; 
import features1 from '../Images/features1.png';
import features2 from '../Images/features2.png';
import features3 from '../Images/features3.png';
import {AiOutlineArrowRight} from "react-icons/ai";
import features4a from '../Images/features4a.png';
import Pic2 from '../Images/pic1.png';
import { BiDollar } from 'react-icons/bi';
import {TbCircleDashed} from 'react-icons/tb';
import {FaHandshake} from 'react-icons/fa';
import features5 from '../Images/features5.png';
import {RiComputerLine} from "react-icons/ri";
import {ImMobile} from 'react-icons/im';
import {AiOutlineCloud} from 'react-icons/ai';
import {SlWallet} from 'react-icons/sl';
import f9a from '../Images/f9a.png';



const Product = () => {
  return ( <>
   <section className='prodcutBody' style={{marginTop:'100px',display:"inline-flex"}}>
        <div className='f1'>
            <h6>CALENDLY FEATURES</h6>
            <h1 style={{color:"rgb(11, 53, 88)"}}>Take the hassle out of <span style={{color:"rgb(26, 145, 243)"}}>scheduling </span></h1>
            <h5>Calendly helps you book better meetings, faster, by syncing and integrating everything in one intuitive platform.</h5>
            <button type="submit" class="btn btn-lg btn-primary" style={{marginTop:"20px",width:"140px",height:"fit-content"}}> <h6>Start for free</h6> </button>
               
        </div>
        <div class="f2">
            <img src={features1} alt="" />
        </div>
   </section>
   <section className="productBody2">
   <h2 style={{ width:"700px",marginTop:"140px",marginInline: "auto", color:"rgb(29, 52, 75",fontWeight:"bold"}} >Simplified scheduling for more than <span style={{color:"rgb(26, 145, 243)"}}> 10,000,000 </span>users worldwide</h2>
     <br />
     <div className="logosloop"><img src={features2} alt="" /></div>   
   </section>
   <section className='productBody3'style={{marginTop:"60px",paddingBottom:"60px"}}>
     <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"60px"}}>INTRODUCING ANALYTICS</h6>
     <h1 style={{marginTop:"20px",color:"rgb(11, 53, 88)",fontWeight:"bold"}}>Our latest addition</h1>
     <h5 style={{marginTop:"20px",width:"620px",marginLeft:"360px",color:"rgba(26, 26, 61, 0.664)"}}>Our new analytics dashboard surfaces activity and trends so you can optimize scheduling to hit your goals.</h5>

     <div className="f34" style={{display:"inline-flex",textAlign:"initial",marginTop:"50px"}}>
        <div className="f3">
            <h6 style={{color:"rgb(89, 156, 231)"}}>DATA-DRIVEN INSIGHTS</h6>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginTop:"40px"}}>Analytics</h1>
            <h6 style={{color:"rgba(26, 26, 61, 0.664)",marginTop:"30px"}}>Discover activity and trends — such as popular meeting days, top performers, in-demand meeting types, and more.</h6>
            <br />
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
        </div>
        <div className="f4">
            <img src={features3} alt="" />
        </div>
     </div>
   </section>
   <section className='footerBody4' style={{paddingTop:"60px"}}>
   <h6 style={{color:"rgb(89, 156, 231)"}}>HIT GOALS FASTER</h6>
   <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginTop:"40px",fontSize:"48px",width:"700px",marginLeft:"320px"}}>Spend more time connecting, not scheduling</h1>

   <div className="footerInnerNav">
        <ul className="footNav">
            <li className="list-item">
                <a href="" className="list-link">Availability Preferances</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Team Scheduling</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Workflows</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Embeds</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Calendar Connection</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Routing Forms</a>
            </li>
            <li className="list-item">
                <a href="" className="list-link">Meeting Polls</a>
            </li>
        </ul>
   </div>
   <div className="footNavBody" style={{display:"inline-flex"}}>
        <div className="f5">
        <h2 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginTop:"40px"}}>Availability Preferences</h2>
        <h6 style={{color:"rgba(11, 53, 88, 0.664)",width:"300px",marginTop:"20px"}}>Customize exactly how and when you're booked. Granular availability tools, scheduling rules, buffers, and more allow you to effortlessly stay in control of your schedule.</h6>
        <br />
        <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
        </div>
        <div className="f6">
            <img src={features4a} alt="" />
        </div>
   </div>
   </section>
    <section className="footerbody5" >
    <h1 style={{color:"rgb(11, 53, 88)",fontSize:"45px",fontWeight:"bold",marginTop:"40px"}}>Stay in sync from any app, on <br /> any device</h1>
    <h5 style={{color:"rgba(11, 53, 88 0.664)",fontSize:"22px",marginTop:"50px",fontWeight:"lighter"}}>Reclaim your time and your tabs with native integrations with over 70 <br /> different apps, and mobile and browser apps for easier access.</h5>
    <div className="f78" >
    <div className="f7">
        <img style={{paddingTop:"100px"}} src={features5} alt="" />
    </div>
    <div className="f8">
        <div className="f8ab">
            
            <div class="f8a"  style={{textAlign:"initial",paddingLeft:"20px",width:"240px",border:"1px inset silver",borderRadius:"5px",height:"260px"}}> 
                <RiComputerLine style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
                <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Calendly for Browsers</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter"}}>Use Calendly while you're <br />on the web, without <br />switching tabs.</h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
            </div>
            
            <div class="f8b" style={{textAlign:"initial",paddingLeft:"20px",width:"240px",border:"1px inset silver",borderRadius:"5px",height:"260px"}}>
                <ImMobile style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Calendly for Mobile</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter"}} >Book meetings, get <br />notifications, and more on the <br />go.  </h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
            </div>

            <div class="f8c" style={{textAlign:"initial",paddingLeft:"20px",marginTop:"20px",width:"240px",border:"1px inset silver",borderRadius:"5px",height:"260px"}}>
                <AiOutlineCloud style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Calendly for Mobile</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter"}}>Book meetings, get <br />notifications, and more on the <br />go.  </h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px",paddingBottom:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
            </div>

            <div class="f8d"style={{textAlign:"initial",paddingLeft:"20px",marginTop:"20px",width:"240px",border:"1px inset silver",borderRadius:"5px",height:"260px"}}>
                <SlWallet style={{width:"40px",height:"40px",paddingTop:"10px"}}/> <br />
            <h6 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",paddingBottom:"20px",paddingTop:"15px"}}>Calendly for Payments</h6>
            <h6 style={{paddingBottom:"25px",color:"grey",fontWeight:"lighter"}}>Streamline payments for <br />Calendly, events with <br />Paypal or Stripe.</h6>
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"16px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
            </div>
        </div>
    </div>
    </div>
    
    </section>

    <section className="footerbody6">
    <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"60px"}}>SCHEDULING AT SCALE</h6>
    <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginTop:"40px"}}>For teams of all sizes</h1>
    <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px"}}>From small businesses to Fortune 100 enterprises—Calendly supports scheduling <br /> at scale with robust security and administrative controls</h5>

    <div className="f910" >
    
      <div className="f9" >
        {/* <div id="list-example" class="list-group"> */}
          <img src={f9a} alt="" /> <br />
          {/* <img class="list-group-item list-group-item-action" href="#list-item-2" src={f9a} alt="" /> <br />
          <img class="list-group-item list-group-item-action" href="#list-item-3" src={f9a} alt="" /> */}
        {/* </div>  */}
      </div>
      
      <div className="f10" >
      
      <form action=""  style={{textAlign:"initial",paddingLeft:"80px",width:"500px"}}>
      <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>ONE CENTRALIZED LOCATION</h6> <br />
      <h1 style={{fontSize:"38px",color:"rgb(11, 53, 88)",fontWeight:"bold"}}>Admin Management</h1>
      <p style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px"}}>Easily manage your organization’s users and scheduling processes from one centralized place.</p>
      <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form>
      <br />
      <form action=""  style={{textAlign:"initial",paddingLeft:"80px",width:"500px",marginTop:"220px"}}>
      <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>YOU CAN DEPEND ON US</h6> <br />
      <h1 style={{fontSize:"38px",color:"rgb(11, 53, 88)",fontWeight:"bold"}}>Security & Compliance</h1>
      <p style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px"}}>Trust Calendly to safeguard company data and meet your compliance requirements.</p>
      <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form>
      <form action=""  style={{textAlign:"initial",paddingLeft:"80px",width:"500px",marginTop:"220px"}}>
      <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>UP TO 6 CALENDARS PER USER</h6> <br />
      <h1 style={{fontSize:"38px",color:"rgb(11, 53, 88)",fontWeight:"bold"}}>Calendly for Enterprise</h1>
      <p style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px"}}>Connect up to six calendars per user to check real-time availability.</p>
      <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"200px"}} href=""> Learn more <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
      </form>
      
      
      </div>
    </div>
    </section>

   <section style={{display:"grid",justifyContent:"center",paddingBottom:"40px"}}>
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

    <section className="footerBody8">
      <div className="f13">
        <h1 style={{fontSize:"38px",color:"rgb(11, 53, 88)",fontWeight:"bold",paddingTop:"100px",textAlign:"left"}}>Frequently <br /> Asked <br /> Questions</h1>
        <div>
          <h6 style={{marginTop:"20px",color:"rgb(11, 53, 88)",fontWeight:"350",textAlign:"initial",fontSize:"19px"}}>Not seeing what you are looking for? <br /> Go to our <span style={{color:"rgb(89, 156, 231)"}}>help center</span> </h6>
        </div>
      </div>  


      <div className='f14' style={{width:"400px",paddingTop:"100px",paddingBottom:"100px"}}>
      <div class="row" style={{rowGap:"10px"}}>
            <div   >
              <button type="button" style={{backgroundColor:"white"}} class="collapsible1" ><h4 style={{color:"rgb(11, 53, 88)"}}>How do I embed Calendly on my own site?</h4></button>
              <div class="content" id="collapseData1">
              <p>You can easily add Calendly embedding a single line of code to your website. You have the options of an inline embed, pop-up widget, or pop-up text. Full details here.</p>
              </div>
            </div>  
            <div >
              <button type="button" style={{backgroundColor:"white"}} class="collapsible1"><h4 style={{color:"rgb(11, 53, 88)"}}>Is Calendly free?</h4></button>
              <div class="content">
              <p>Calendly offers various plans, including a free plan. You can select the subscription that makes the most sense for you or your team by visiting out plans page</p>
              </div>
            </div>    
            <div >
              <button type="button"style={{backgroundColor:"white"}} class="collapsible1"><h4 style={{color:"rgb(11, 53, 88)"}}>Can I set custom availability?</h4></button>
              <div class="content">
              <p>You have a few ways to share your available times with invitees. The first option is to share your landing page link, which includes all active event types for your invitee to choose from. The second option is to share your event link, if you want your invitee to book a specific event type. You can access it from the Share button on your event types.

              You can also add availability slots directly into an email which lets you select a handful of times to add to the body copy of an email. Or, you can add it embed scheduling links directly into your website.

              More details here.</p>
              </div>
            </div>
            <div >
              <button type="button" style={{backgroundColor:"white"}} class="collapsible1"><h4 style={{color:"rgb(11, 53, 88)"}}>Can I cancel anytime?</h4></button>
              <div class="content">
              <p>Calendly offers both monthly and annual subscriptions. Calendly subscriptions automatically renew at the end of the billing period, which means it renews monthly (if you're on a monthly plan) or each year (for annual plans). To prevent your subscription from automatically being renewed, you can downgrade your account at any time. </p>
              </div>
            </div>  
            <div >
              <button type="button" style={{backgroundColor:"white"}} class="collapsible1"><h4 style={{color:"rgb(11, 53, 88)"}}>How do I share my calendar link?</h4></button>
              <div class="content">
              <p>You can share your calendar link via your email signature, the body of an email, a text message, a link on your website, your social media, or any other way you communicate with invitees.</p>
              </div>
            </div>  
            <div >
              <button type="button" style={{backgroundColor:"white"}} class="collapsible1"><h4 style={{color:"rgb(11, 53, 88)"}}>Can I try it out?</h4></button>
              <div class="content">
              <p>Yes! As a new Calendly user, you will receive a free 14-day trial of the Teams subscription once your new account is created. During the 14-day trial period, you will have access to all Teams features. At the end of the 14-day trial period, the account will automatically roll over to our free Basic subscription. You will not be charged at the end of your trial period. But, you can upgrade your account at any time during or after the trial. To compare available subscription options, visit the Pricing Page.</p>
              </div>
            </div>  
      </div>
      </div>
    </section>

   <section className='footLast'>
    <h1 style={{color:"white",fontWeight:"bold",marginTop:"40px",width:"600px",marginInline:"390px"}}>Book meetings on your own terms, automatically</h1> 
    <br />
    <h6 style={{color:"white",width:"500px",marginTop:"20px",marginLeft:"420px"}}>Get instant access to all of these features and more, so you can schedule meetings without the back-and-forth</h6>
<br />
    
    <button type="submit" class="btn btn-lg btn-primary" style={{height:"50px",marginTop:"10px",marginLeft:"10px",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Start for Free</h6></button> 
        <button type="submit" class="btn btn-lg btn-outline-primary" style={{height:"50px",marginTop:"10px",marginLeft:"10px",border:"2px solid",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Talk to Sales</h6></button>
    
   </section>
   </>
  )
}

export default Product;