import React from 'react';
import '../Components/Resources.css';
import Resources1 from '../Images/Resources1.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import videoTutorial from '../Images/videoTutorial.png';
import ebookPic1 from '../Images/ebookPic1.png';
import ebookPic2 from '../Images/ebookPic2.png';
import ebookPic3 from '../Images/ebookPic3.png';
import webinarPic1 from '../Images/webinarPic1.png';
import webinarPic2 from '../Images/webinarPic2.png';
import webinarPic3 from '../Images/webinarPic3.png';
import storyPic1 from '../Images/storyPic1.png';
import storyPic2 from '../Images/storyPic2.png';
import storyPic3 from '../Images/storyPic3.png';
import blogPic1 from '../Images/blogPic1.png';
import blogPic2 from '../Images/blogPic2.png';
import blogPic3 from '../Images/blogPic3.png';

const Resources = () => {
  return (
    <>
    <section className="resBody1">
        <div className="res1">
        <h6 style={{marginTop:"10px",color:"rgb(89, 156, 231)"}}>RESOURCES</h6>
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginTop:"30px",width:"420px",fontSize:"54px"}}>Explore all of <br /> our Resources</h1>
        <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"350",marginTop:"40px",width:"460px"}}>Explore Calendly's library of e-books, webinars, <br /> customer stories, tutorials, and other helpful <br /> content — everything you need to become a <br /> scheduling superstar!</h5>
        </div>
        <div className="res2">
            <div class="card" style={{width: "480px"}}>
            <img src={Resources1} class="card-img" alt="..."/>
                <div class="card-body" >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>FEATURED</h6>
                <p class="card-text">How Airtable Hires Top Talent Faster With Prelude</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Watch now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
        </div>
    </section>
    <section className="jumpSection">
    {/* jump section */}
      <div className="jumpContent">
        <h5 style={{color:"blue",display:"block",marginRight:"65%"}}>Jump to a section:</h5>
        <br />
        <div className="jumpButtons">
          <button> <h6>E-books & Guides</h6></button>
          <button><h6>Webinars</h6></button>
          <button><h6>Blog</h6></button>
          <button><h6>Customer Stories</h6></button>
          <button><h6>Video Tutorials</h6></button>
          <button><h6>Help Center</h6></button>
        </div>
      </div>
    </section>

  <section className="ebookGuides">
    {/* E-books & Guides */}
    <div className="ebookHeading">
      <h3 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginRight:"60%"}}>E-books & Guides</h3>
    </div>
    {/* -------individual cards------ */}
    <div className="ebookCards" style={{columnGap:"50px",paddingTop:"40px"}}> 
            <div class="card" style={{width: "480px"}}>
            <img src={ebookPic1} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>GUIDE</h6>
                <p class="card-text">How to help new CSMs onboard customers successfully</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Get the guide <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px"}}>
            <img src={ebookPic2} class="card-img" alt="..."/>
                <div class="card-body"style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>E-BOOK</h6>
                <p class="card-text">8 email templates for modern customer success teams</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Get the e-book <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px"}}>
            <img src={ebookPic3} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}}>
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>Ebook</h6>
                <p class="card-text">Scheduling automation for sales, marketing, and customer success teams</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Get the e-book <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
    </div>
  </section>
  <section className="webinars">
    {/* Webinars */}
    <div className="webinarsHeading">
      <h3 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginRight:"70%"}}>Webinars</h3>
    </div>
    <div className="webCards" style={{columnGap:"50px",paddingTop:"40px"}}>
            <div class="card" style={{width: "480px"}}>
                 {/* -------individual cards------ */}
            <img src={webinarPic1} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>WEBINAR</h6>
                <p class="card-text">How to Deliver the Ultimate Customer Experience</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Register <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px"}}>
            <img src={webinarPic2} class="card-img" alt="..."/>
                <div class="card-body"style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>WEBINAR</h6>
                <p class="card-text">Getting Started with Calendly</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Register <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px",paddingBottom:"20px"}}>
            <img src={webinarPic3} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}}>
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>WEBINAR</h6>
                <p class="card-text">How Teams Use Calendly</p>
                <a style={{textDecoration:"none",fontWeight:"bold",paddingTop:"20px"}} href=""> Register <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a> 
                </div>
            </div>
    </div>
  </section>

  

  <section className="stories">
    {/* Customer Stories */}
    <div className="storiesHeading">
      <h3 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginRight:"63%"}}>Customer Stories</h3>
    </div>
    <div className="storyCards" style={{columnGap:"50px",paddingTop:"40px"}}>
            <div class="card" style={{width: "480px",paddingBottom:"20px"}}>
                 {/* -------individual cards------ */}
            <img src={storyPic1} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>CUSTOMER STORY</h6>
                <p class="card-text">How Calendly delivered 1,037% ROI for Churchil Mortage</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px",paddingBottom:"20px"}}>
            <img src={storyPic2} class="card-img" alt="..."/>
                <div class="card-body"style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>CUSTOMER STORY</h6>
                <p class="card-text">How CanRail doubled meeting conversions with Calendly</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px",paddingBottom:"20px"}}>
            <img src={storyPic3} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}}>
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>FEATURED</h6>
                <p class="card-text">How CI Assante Wealth Management achieved 323% ROI with Calendly</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"15px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
    </div>
  </section>

  <section className="Blog">
    {/* Blogs */}
    <div className="blogHeading">
      <h3 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",marginRight:"75%"}}>Blog</h3>
    </div>
    <div className="blogCards" style={{columnGap:"50px",paddingTop:"40px"}}>
            <div class="card" style={{width: "480px"}}>
                 {/* -------individual cards------ */}
            <img src={blogPic1} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>BLOG</h6>
                <p class="card-text">How to set up and improve your Microsoft  Office 365 Calendar</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px"}}>
            <img src={blogPic2} class="card-img" alt="..."/>
                <div class="card-body"style={{textAlign:"initial"}} >
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>BLOG</h6>
                <p class="card-text">5 ways candidate self-scheduling makes the interview process more <br />efficient </p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
            <div class="card" style={{width: "480px"}}>
            <img src={blogPic3} class="card-img" alt="..."/>
                <div class="card-body" style={{textAlign:"initial"}}>
                <h6 style={{marginTop:"20px",color:"rgb(89, 156, 231)"}}>BLOG</h6>
                <p class="card-text">Act on your Calendly data with Google Analytics and Meta Pixel</p>
                <a style={{textDecoration:"none",fontWeight:"bold",marginTop:"20px",paddingBottom:"20px"}} href=""> Read now <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
                </div>
            </div>
    </div>
  </section>
  <section className="VideoTutorials">
        <div className="tutorial">
        <h6 style={{marginTop:"10px",color:"rgb(89, 156, 231)"}}>EXPLORE OUR TUTORIALS</h6>
        <h1 style={{color:"rgb(11, 53, 88)",marginTop:"30px",width:"420px"}}>Video Tutorials</h1>
        <h5 style={{color:"rgb(11, 53, 88)",fontWeight:"300",marginTop:"40px",width:"460px"}}>Looking for some video tutorials on how to use Calendly? We’ve got you covered.</h5>
        <br />
        <button style={{width:"40mm",height:"13mm",backgroundColor:"rgb(0, 119, 255)",fontWeight:"500",fontSize:"1.04578rem",border:"none",borderRadius:"2mm",color:"white",marginTop:"20px"}}>Watch tutorials</button>

        </div>
        <div className="tutorialVideo">
            
            <img style={{width:"440px"}} src={videoTutorial}  alt="Tutorial Video"/>
        
        </div>
    </section>
    <section className='ResHelp'>
      {/* looking for help */}
        <h1 style={{color:"rgb(11, 53, 88)",fontWeight:"bold",textAlign:"center",fontSize:"42px"}}>Looking for help? </h1>
        <h5 style={{paddingTop:"40px",color:"rgb(11, 53, 88)",fontWeight:"280"}}>Get instant access to all of these features and more, so you can have more <br /> productive meetings without the back-and-forth</h5>
        
    <button type="submit" class="btn btn-lg btn-primary" style={{height:"50px",marginTop:"40px",marginLeft:"10px",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Help Center</h6></button> 
        <button type="submit" class="btn btn-lg btn-outline-primary" style={{height:"50px",marginTop:"40px",marginLeft:"10px",border:"2px solid",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Contact Us</h6></button>
    <br/>
    </section>
    <section className="resTestimonials">
        <div className="testimonials" style={{textAlign:"initial",paddingLeft:"140px"}}>
        <h6 style={{marginTop:"10px",color:"rgb(89, 156, 231)"}}>TESTIMONIALS</h6>
        <h1 style={{color:"white",fontWeight:"bold",marginTop:"30px",width:"420px",fontSize:"42px"}}>Things customers <br /> say</h1>
        <h5 style={{color:"white",fontWeight:"280",marginTop:"40px",width:"460px"}}>Take it from the millions of people who use Calendly to <br /> save time and drive revenue every day.</h5>
        <button type="submit" class="btn btn-lg btn-primary" style={{height:"50px",marginTop:"40px",marginLeft:"10px",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Start for free</h6></button> 
        <button type="submit" class="btn btn-lg btn-outline-primary" style={{height:"50px",marginTop:"40px",marginLeft:"10px",border:"2px solid",width:"130px"}}> <h6 style={{paddingTop:"4px"}}>Talk to sales</h6></button>
        </div>
        <div className="testimonialCard">
            <div class="testcard" style={{width: "540px",backgroundColor:"white",textAlign:"initial",borderRadius:"4px",paddingTop:"30px",paddingBottom:"30px",paddingLeft:"30px",paddingRight:"30px"}}>
                <h6 style={{padding:"4px"}}>I wanted something that was elegant so that when people click on it, they’re not immediately turned off. With Calendly, there's a sense of aesthetics and pared-back cleanliness that I really like.</h6>
                <h6 style={{paddingTop:"40px"}}>Ancestry</h6>
                <a style={{paddingTop:"40px",textDecoration:"none"}} href="">Read all customer stories<AiOutlineArrowRight style={{color:"blue",marginLeft:"5px"}}/></a>
            </div>
        </div>
    </section>
       </>
  )
}

export default Resources;