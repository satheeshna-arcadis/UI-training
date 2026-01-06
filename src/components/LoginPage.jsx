import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="loginPageWrapper">
      <div className="loginPageCard">
        <h1 className="companyTitle">DFW Operating Authority Online Portal(DEV)</h1>
        <form className="loginPageFormBody" >
           <h1 className="loginPageHeading">Create New Account</h1> 
            <div className="loginPageInputGroup">
              <label htmlFor="firstname" className="loginPageLabel">First Name<span className="loginPageRequired">*</span></label>
              <input type="text" id="firstname" className="loginPageInputField" placeholder="Enter First Name"/>
            </div>

            <div className="loginPageInputGroup">
              <label htmlFor="lastname" className="loginPageLabel">Last Name<span className="loginPageRequired">*</span></label>
              <input type="text" id="lastname" className="loginPageInputField" placeholder="Enter Last Name"/>
            </div>

            <div className="loginPageInputGroup">
              <label htmlFor="title" className="loginPageLabel"> Title<span className="loginPageRequired">*</span></label>
              <input type="text" id="title" className="loginPageInputField" placeholder="Enter Title"/>
            </div>

            <div className="loginPageInputGroup">
              <label htmlFor="email" className="loginPageLabel">Email<span className="loginPageRequired">*</span></label>
              <input type="email" id="email" className="loginPageInputField" placeholder="Enter Email"/>
            </div>
            
          <div className="loginPageButtonCon"> 
            <button type="button" className="loginPageBtnOutline">Cancel</button>
            <button type="submit" className="loginPageSubmitBtn"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
