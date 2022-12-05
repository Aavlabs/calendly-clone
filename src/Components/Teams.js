import React from 'react';
import '../Components/Teams.css';
import teams1 from "../Images/teams1.png";
import teams2 from "../Images/teams2.png";
import teams3 from "../Images/teams3.png";
import teams4 from "../Images/teams4.png";
import teams5 from "../Images/teams5.png";
import {AiOutlineArrowRight} from 'react-icons/ai';





const Teams = () => {
  return (
    <>
    {/* Calendly for teams */}
    <section className="teamsBody1">
        <div className="teams1">
        <h4 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"80px",fontWeight:"18px"}}>CALENDLY FOR TEAMS</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"43px",marginTop:"40px",width:"400px"}}>Smarter scheduling <br /> for teams</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"330",marginTop:"40px",width:"400px",fontSize:"18px"}}>Whether your team’s performance is measured by<br/> sales revenue, recruiting pipeline, or customer<br/> retention, scheduling automation enables your<br/> team to hit goals faster.</h4>
            <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer",marginRight:"20px",marginTop:"20px"}}>Start for free</button>
            <button style={{width:"40mm",height:"12mm",backgroundColor:"white",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",color:"rgb(0, 119, 255)",cursor:"pointer"}}>Contact sales</button>
        </div>

        <div className="teams2">
            <img style={{justifyContent:"initial",marginTop:"80px"}} src={teams1} alt="" />
        </div>
    </section>

    {/* Speed of connection */}
    <section className="teamsBody2">
        <div className="teams3">
            <h4 style={{color:"rgb(89, 156, 231)",paddingTop:"40px",fontWeight:"18px"}}>SPEED OF CONNECTION</h4>
         <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"35px",marginTop:"40px",width:"400px"}}>Outperform the <br/>competition with faster<br/>connections</h1>
         <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"16.5px"}}>You can’t waste time when prospects, clients, and<br/>candidates express interest. Avoid missed opportunities<br/>by automatically qualifying and routing website visitors<br/>to specific team members. You can also pool scheduling<br/>availability together to offer more options to connect.</h4>   
        </div>
        <div className="teams4">
            <img style={{justifyContent:"initial",paddingTop:"10px"}} src={teams2} alt="" />
        </div>
    </section>
    {/* Time management */}
    <section className='teamsBody3'>
        <div className="teams5">
            <img style={{justifyContent:"initial",marginTop:"30px"}} src={teams3} alt="" />
        </div>
        <div className="teams6">
            <h4 style={{marginTop:"10px",color:"rgb(89, 156, 231)",paddingTop:"60px",fontWeight:"18px"}}>TIME MANAGEMENT</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"38px",marginTop:"40px",width:"400px"}}>Automate scheduling, <br/>improve team performance</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"16.5px"}}>Scheduling automation eliminates time-consuming<br/>admin tasks so your team can focus on higher priorities.<br/>With actionable insights into your team’s scheduling<br/>activities and integrations with your team’s favorite<br/>tools, you can identify potential process improvements<br/>and empower your team to work more efficiently.</h4>   
        </div>
    </section>

    {/* Team standardiztion */}
    <section className='teamsBody4'>
         <div className="teams7">
            <h4 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"60px",fontWeight:"18px"}}>TEAM STANDARDIZATION</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"31.5px",marginTop:"40px",width:"400px"}}>Improve the customer<br/>experience with consistent<br/>scheduling</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"17px"}}>Managed Events let you assign and lock Event Type<br/>details — such as meeting descriptions, invitee<br/>questions, and notifications — so your team delivers a<br/>reliable and professional experience every time.</h4>   
        </div>
        <div className="teams8">
            <img style={{justifyContent:"initial",marginTop:"110px"}} src={teams4} alt="" />
        </div>

    </section>

    {/* Consistency in execution */}
    <section className='teamsBody5'>
        <div className="teams9">
            <img style={{justifyContent:"initial",marginTop:"40px",paddingLeft:"100px"}} src={teams5} alt="" />
        </div>
        <div className="teams10" style={{textAlign:"initial",paddingLeft:"140px"}}>
            <h4 style={{marginTop:"20px",color:"rgb(89, 156, 231)",paddingTop:"40px",fontWeight:"18px"}}>CONSISTENCY IN EXECUTION</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"30px",marginTop:"40px",width:"400px"}}>Streamline communications<br/>across the meeting lifecycle</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"16px"}}>From pre-call email questionnaires and confirmation<br/>texts to post-call follow-up links, meeting best practices<br/>can be automatically applied across your team. These<br/>templates and workflows increase engagement and<br/>ensure consistent, professional communications with<br/>your customers and candidates.</h4>   
        </div>
    </section>

    {/* Features , Headline , Navbar */}
    <section className='teamsBody6'>
        <div className='teams11'>
            <h4 style={{marginTop:"10px",color:"rgb(89, 156, 231)",paddingTop:"60px",fontWeight:"18px",textAlign:"center"}}>FEATURES</h4>
        </div>
        <div className="teamsHeadline" style={{marginTop:"20px",paddingLeft:"3%"}}>
            <h1 style={{color:"rgb(11, 53, 88)",fontSize:"53px"}}>Favorite Team Features</h1>
        </div>
        <div className="teamsNav">
            <li style={{fontSize:"17px",color:"rgb(11, 53, 88)"}}><a href="https://calendly.com/for-teams">Teams Scheduling Pages</a></li>
            <li style={{fontSize:"17px",color:"rgb(11, 53, 88)"}}><a href="https://calendly.com/for-teams">Automated Workflows</a></li>
            <li style={{fontSize:"17px",color:"rgb(11, 53, 88)"}}><a href="https://calendly.com/for-teams">Round Robin Events</a></li>
            <li style={{fontSize:"17px",color:"rgb(11, 53, 88)"}}><a href="https://calendly.com/for-teams">Salesforce Integration </a></li>
            <li style={{fontSize:"17px",color:"rgb(11, 53, 88)"}}><a href="https://calendly.com/for-teams">Reporting and Analytics</a></li>
        </div>
    </section>

    {/* Team scheduling pages */}
    <section className='teamsBody7'>
        <div className="teams12" style={{textAlign:"initial",paddingLeft:"100px"}}>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"30px",marginTop:"110px",width:"400px"}}>Team Scheduling Pages</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"16px"}}>Create a personalized scheduling page for a team instead<br/>of individual booking pages. Invitees with the link can<br/>access and choose from meeting types based on their<br/>needs.</h4>  
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px",width:"300px",color:"rgb(0, 119, 255)"}} href="https://calendly.com/features/scheduling">Learn more<AiOutlineArrowRight style={{marginLeft:"5px",paddingTop:"15px",color:"rgb(0, 119, 255)"}}/></a> 
        </div>
        <div className="teams13">
            <img style={{justifyContent:"initial",marginTop:"30px"}} src={teams2} alt="" />
            <br />
        </div>
    </section>

    {/* Recommended for teams , cards */}
    <section className='teamsBody8' style={{display:"inline-flex" }}>
    <div className="teams14" style={{textAlign:"initial"}}>
            <h4 style={{color:"rgb(89, 156, 231)",paddingTop:"10px",fontWeight:"18px"}}>RECOMMENDED FOR TEAMS</h4>
            <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"31.5px",marginTop:"30px",width:"400px"}}>Pricing Plans</h1>
            <h4 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"400px",fontSize:"17px"}}>With scheduling hassles and interruptions gone<br/>your day is cleared for accomplishment.</h4> 
            <a style={{textDecoration:"none",fontWeight:"bold",fontSize:"18px",width:"300px",color:"rgb(0, 119, 255)"}} href="https://calendly.com/pricing">View all plans<AiOutlineArrowRight style={{marginLeft:"5px",paddingTop:"15px",color:"rgb(0, 119, 255)"}}/></a>   
        </div>
        <div className='teams15' style={{display:"inline-flex",columnGap:"5px"}}>

      <div class="card">
        <h1 class="card-title" style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"20px",marginTop:"10px",marginLeft:"10px"}}>TEAMS PLAN</h1>
        <h5 class="card-subtitle" className="mb-2 text-muted" style={{color:"rgb(11, 53, 88)",fontWeight:"bold",fontSize:"30px",paddingRight:"20px"}}>$16<span style={{color:"rgb(11, 53, 88)",fontSize:"20px"}}>/seat/mo</span></h5>
        <p class="card-text" style={{color:"rgb(11, 53, 88)",marginLeft:"10px"}}>
        When your team needs to align<br/>on a scheduling process and<br/>collaborate efficiently.
        </p>
        <br/><br/>
        <button style={{width:"70mm",height:"12mm",backgroundColor:"white",fontWeight:"bold",fontSize:"15px",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",color:"rgb(0, 119, 255)",cursor:"pointer",marginLeft:"10px",marginTop:"60px"}}>Try for free</button>
      </div>
      <div class="card" style={{backgroundColor:"rgb(11, 53, 88)",color:"white"}}>
        <h1 class="card-title" style={{fontWeight:"bold",fontSize:"20px",marginTop:"10px",marginLeft:"10px",color:"white"}}>ENTERPRISE PLAN</h1>
        <h5 class="card-subtitle" className="mb-2 text-muted" style={{fontWeight:"bold",fontSize:"30px",paddingRight:"20px",color:"white"}}>Contact Us</h5>
        <p class="card-text" style={{marginLeft:"10px",color:"white"}}>
        When your 30+ member team<br/>needs advanced security, control,and support.
        </p>
        <br/><br/>
        <button style={{width:"70mm",height:"12mm",backgroundColor:"white",fontWeight:"bold",fontSize:"15px",textAlign:"center",borderColor:"rgb(0, 119, 255)",borderRadius:"2mm",cursor:"pointer",marginLeft:"10px",marginTop:"60px"}}> <h6 style={{color:"rgb(0, 119, 255)"}}> Contact Us</h6></button>
      </div>
    </div>
        
    </section>

    {/* 2ndLastFooter */}
    <section className='teamsBody9'>
        <h1 style={{color:"white",fontWeight:"750",fontSize:"48px",paddingBottom:"10px",textAlign:"center",marginLeft:"30px",marginTop:"20px",paddingTop:"32px"}}>Smarter scheduling for teams </h1>
        <h4 style={{color:"white",fontWeight:"500",fontSize:"20px",paddingBottom:"10px",textAlign:"center",marginLeft:"30px",marginTop:"20px"}}> Get started on the scheduling automation platform that enables teams to hit goals<br/>faster.</h4>
        <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",border:"none",borderRadius:"2mm",color:"white",cursor:"pointer",}}>Start for free</button>
        <button style={{width:"40mm",height:"13mm",fontWeight:"500",fontSize:"1.04578rem",textAlign:"center",borderWidth:"1mm",borderColor:"white",borderRadius:"2mm",cursor:"pointer",margin:"5px"}}>Talk with sales</button>
        <br/>
    </section>
    


    </>
  )
}

export default Teams