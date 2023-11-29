import React from 'react';
import './Register.css';
import register_pic from '../Assets/register-pic.jpg';

const Register = (props) => {
  return (
    <form action="#" className="signup-form">
            <div className="left-side">
                <figure>
                    <img src={register_pic} alt="register-pic" className="register-pic"/>
                </figure>
            </div>
            <div className="right-side">
                <div className="form-field-part">
                    <div className="header">
                        <h2>Signup Here...</h2>
                    </div>
                    <div className="field-box">
                        <div className="field-part">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="firstName" id="first-name" placeholder="Enter your first name" required/>
                        </div>
                        <div className="field-part">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="lastName" id="last-name" placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    <div className="field-box">
                        <div className="field-part">
                            <label htmlFor="phone-number">Phone</label>
                            <input type="text" name="phoneNumber" id="phone-number" placeholder="Enter your phone number" required/>
                        </div>
                        <div className="field-part">
                            <label htmlFor="user-gender">Gender</label>
                            <select name="userGender" id="user-gender">
                                <option value="0">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="field-part">
                        <label htmlFor="email-id">Email Id</label>
                        <input type="email" name="emailId" id="email-id" placeholder="Enter your email id" required/>
                    </div>
                    <div className="field-part">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required/>
                    </div>
                </div>
                <div className="btns">
                <button className="btn">Sign up</button>    
                <button className="btn" onClick={()=>props.onFormSwitch('login')}>Sign in</button>    
                </div>
                
                <div className="social-media-part">
                    <p>Or Sign up with social platforms</p>
                    <div className="social-media-logos">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-google"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>
            </div>
            
        </form>
  )
}

export default Register