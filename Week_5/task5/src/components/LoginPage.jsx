import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="lpWrapper">
      <div className="lpCard">
        <h1 className="Brand">DFW Operating Authority Online Portal(DEV)</h1>
        <form className="lpFormBody" >
           <h1 className="lpHeading">Create New Account</h1> 
            <div className="lpInputGroup">
              <label htmlFor="firstname" className="lpLabel">First Name<span className="lpRequired">*</span></label>
              <input type="text" id="firstname" className="lpInputField" placeholder="Enter First Name"/>
            </div>

            <div className="lpInputGroup">
              <label htmlFor="lastname" className="lpLabel">Last Name<span className="lpRequired">*</span></label>
              <input type="text" id="lastname" className="lpInputField" placeholder="Enter Last Name"/>
            </div>

            <div className="lpInputGroup">
              <label htmlFor="title" className="lpLabel"> Title<span className="lpRequired">*</span></label>
              <input type="text" id="title" className="lpInputField" placeholder="Enter Title"/>
            </div>

            <div className="lpInputGroup">
              <label htmlFor="email" className="lpLabel">Email<span className="lpRequired">*</span></label>
              <input type="email" id="email" className="lpInputField" placeholder="Enter Email"/>
            </div>
            
          <div className="lpButtonCon"> 
            <button type="button" className="lpBtnOutline">Cancel</button>
            <button type="submit" className="lpSubmitBtn"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
