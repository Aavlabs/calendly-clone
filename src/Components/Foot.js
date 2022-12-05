import React from 'react';
import '../Components/Foot.css';
import{TiSocialTwitter} from "react-icons/ti";
import { TiSocialFacebook } from 'react-icons/ti';
import {RiInstagramLine} from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';
import{FiYoutube}from'react-icons/fi';
import logo from "../Images/googleios.jpeg";



export default function Foot() {
  return (
    <section className='footerdiv'> 

    <div className="data1" >
    <h3  style={{color:"rgb(11, 53, 88)",fontWeight:"900",fontSize:"2.36875rem"}}>Easy <br/> <span style={{color:"blue"}}>ahead</span></h3>
    <p style={{paddingBottom:"30px"}}>
      We take the work out of connecting with <br/>others so you can accomplish more.
   </p>

            
       <select style= {{borderColor:"grey",borderRadius:"2mm",width:"90mm",height:"10mm",color:""}} id='language'>
         <option disabled selected value="--">English</option>
         <option value="Français">Français</option>
         <option value="Español">Español</option>
         <option value="Deutsch">Deutsch</option>
         <option value="Português">Português</option>
        </select>
        <br />
        <img style={{paddingRight:"40px"}} src={logo} alt='app'/>
        <br />
        <div className="socialaccount">
        <TiSocialTwitter style={{width:"30px",height:"fit-content",marginRight:"15px"}}/><TiSocialFacebook style={{width:"30px",height:"fit-content",marginRight:"15px"}}/><RiInstagramLine style={{width:"30px",height:"fit-content",marginRight:"15px"}}/><TiSocialLinkedin style={{width:"30px",height:"fit-content",marginRight:"15px"}}/><FiYoutube style={{width:"30px",height:"fit-content"}}/>
        </div>
        <br />
        <h6 style={{paddingLeft:"10px",marginTop:"50px",fontSize:"12px"}}> Copyright Calendly 2022 </h6>
    </div>


    <div className="data2">
      <div className="footdiv1">
      <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial"}} >About </h5>
      <li><a  href='https://calendly.com/en/about' >About Calendly </a>
      </li>
      <li>
        <a  href='https://calendly.com/en/contact-us' >Contact Us</a>
      </li>
      <li>
        <a  href='https://calendly.com/en/newsroom' >Newsroom</a>
        </li>
        <li>
          <a href='https://careers.calendly.com/?_ga=2.91861401.2017218661.1669364007-131554714.1669363947'>Carrers</a>
          </li>
          <li>
            <a  href='https://calendly.com/en/security'>Security</a>
          </li>
      </div>
      <div className="footdiv2">
      <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial"}} >Solutions</h5>
      <li>
        <a href='https://calendly.com/en/solutions/customer-success' >Customer Success</a>
      </li>
     <li>
        <a  href='https://calendly.com/en/solutions/sales' > Sales</a>
      </li>
      <li>
        <a  href='https://calendly.com/en/solutions/recruiting' >Recruiting </a>
      </li>
      <li>
        <a  href='https://calendly.com/en/solutions/it' >Information Technology </a>
      </li>
      <li>
        <a href='https://calendly.com/en/solutions/marketing' >
          Marketing
        </a>
      </li>

      </div>
      <div className="footdiv3">
        <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial"}} >Popular Features</h5>
        <li>
          <a href='https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview?_ga=2.263297423.2017218661.1669364007-131554714.1669363947' >
            Embed Calendly
          </a>
        </li>
        <li>
          <a  href='https://calendly.com/en/features/availability' >
            Availability
          </a>
        </li>
        <li>
          <a  href='https://help.calendly.com/hc/en-us/articles/1500003580702-Workflows-replace-reminders-and-email-follow-ups-for-event-types?_ga=2.263297423.2017218661.1669364007-131554714.1669363947' >
            Sending Notifications
          </a>
          </li>
          <li>
            <a  href='https://help.calendly.com/hc/en-us/articles/360018877993-Calendly-Mobile-app-for-iOS-and-Android?_ga=2.153777211.2017218661.1669364007-131554714.1669363947' >
                Using Calendly Mobile
            </a>
          </li>
      </div> 
      <div className="footdiv4">
      <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial",paddingTop:"15px"}} >Support</h5>
      <li>
        <a  href='https://help.calendly.com/hc/en-us?_ga=2.95509919.2017218661.1669364007-131554714.1669363947'>
          Help Center
        </a>
        </li>
        <li>
          <a  href='https://help.calendly.com/hc/en-us/p/video-tutorials?_ga=2.267490317.2017218661.1669364007-131554714.1669363947'>
            Video Tutorials
          </a>
        </li>
        <li>
          <a  href='https://calendly.com/en/security' >
            Cookie Settings
          </a>
        </li>
      </div>
      
      <div className="footdiv5">
      <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial",paddingTop:"15px"}} >Add-Ons</h5>
      <li>
        <a href='https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?utm_source=calendly&utm_medium=marketing_site&utm_campaign=footer&utm_content=chrome&utm_term=chrome' >
          Download for Chrome
        </a>
      </li>
      <li>
        <a href='https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/?utm_source=calendly&utm_medium=marketing_site&utm_campaign=footer&utm_content=firefox&utm_term=firefox' >
          Download for Firefox
        </a>
      </li>
      </div>
      
      <div className="footdiv6">
      <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"18px",textAlign:"initial",paddingTop:"15px"}} >Developers</h5>
      <li>
        <a  href='https://developer.calendly.com/?_ga=2.32018621.2017218661.1669364007-131554714.1669363947'>
          Developer Tools
        </a>
      </li>
      </div>
      <div className="privacyconditions" style={{display:"block"}}>
      <h6 style={{marginLeft:"460px",width:"300px",marginTop:"80px",fontSize:"12px"}}>Privacy / Terms and Conditions</h6>
      </div>
      
</div>


    </section>
  );
};
