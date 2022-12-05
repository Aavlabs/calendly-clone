import React from 'react'

const Signup = () => {
  return (
    <>
    <section class="signupBody" style={{height:"100vh",paddingTop:"120px",textAlign:"center"}}>
    <h1><img style={{width:"180px"}} src="https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png" alt="" /></h1>
     <div class="cardbody" style={{marginTop:"10px",marginLeft:"36%",width:"400px",height:"250px",border:"1px ridge silver",borderRadius:"10px"}}> 
        
        <div class="cardContent" >
            <p style={{textAlign:"initial",paddingLeft:"25px",fontSize:"15px",paddingTop:"25px"}}>The easiest way for you to sign up is with Google. This will automatically connect your calendar so you can start using Calendly right away!</p>
            
            <button class="btn btn-primary" style={{borderRadius:"20px"}}><h6>Sign up with Google</h6> </button>
            <p style={{textAlign:"initial",paddingLeft:"20px",fontSize:"12px",paddingTop:"10px"}}>Prefer to create an account with a password?</p>
            <a href="#" style={{textDecoration:"none",fontWeight:"600",marginRight:"290px",paddingBottom:"20px"}}>Click here</a>

        </div>
      </div> 
      <p style={{textAlign:"center",fontSize:"10px",paddingTop:"10px"}}>By creating a Calendly account, you agree to <a style={{textDecoration:"none"}} href="">Calendly's Terms</a>  and <a style={{textDecoration:"none"}} href="">Privacy Policy</a>  </p>
    </section>
    </>
  )
}

export default Signup;