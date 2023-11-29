import React from 'react';
import './Login.css';
import login_pic from '../Assets/login-pic.jpg';

const Login = (props) => {
  return (
    <form action="#" className="signin-form">
            <div className="left-side">
                <figure>
                    <img src={login_pic} alt="login-pic"/>
                </figure>
            </div>
            <div className="right-side">
                <div className="form-field-part">
                    <div className="header">
                        <h2>Signin Here...</h2>
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
                <button className="btn">Sign in</button>
                <button className="btn" onClick={()=>props.onFormSwitch('register')}>Sign up</button>    
                </div>
                <div className="social-media-part">
                    <p>Or Sign in with social platforms</p>
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

export default Login