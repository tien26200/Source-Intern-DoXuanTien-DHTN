/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, Alert } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { FaUser, FaLock, FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa'
import SignInImage from '../../../assets/images/signin/SignInImage.svg'
import SignUpImage from '../../../assets/images/signin/SignUpImage.svg'
import { login } from "../../../services/authService";
import { register } from "../../../services/authService";
import { AuthDispatchContext, signIn } from "../../../contexts/auth.js";
import './style.scss' 
import {MdOutlineAppRegistration} from 'react-icons/md';
import {HiOutlineLogin} from 'react-icons/hi';



function SignIn() {

    const authDispatch = useContext(AuthDispatchContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [username1, setUsername1] = useState("");
    const [password1, setPassword1] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
 
    const submitHandler = async (e) => {
        e.preventDefault();
    
        const data = await login(username, password);
        if (data.token) {
          signIn(authDispatch, data);
          if (data.roles[0] === "ROLE_USER") {
            navigate("/");
          }
          if (data.roles[0] === "ROLE_ADMIN") {
            navigate("/admin");
          }
        
        }
        console.log(data);
      };

    //   XỬ LÝ SỰ KIỆN ĐĂNG KÝ KHI NHẤN SUBMIT
      const submitHandlerRegister = async (e) => {
        e.preventDefault();
        setMessage(null);
        try {
          const data = await register(username1, email, password1, ["user"]);
          console.log(data);
          navigate("/signin");
          alert(data.message);
        } catch (e) {
          setMessage("Register failed with error");
        }
      };
    //   ------------------------------------------------------
    // SỰ KIỆN CHUYỂN SANG TRANG SIGN_UP
    const handleClickSignUp = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.add('sign-up-mode')
    }
    // SỰ KIỆN CHUYỂN SANG TRANG SIGN_IN
    const handleClickSignIn = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.remove('sign-up-mode')
    }

    return (
        <div className="signin">
                         
            <div className="forms-container">
            <button
                            className="btn_Swiper-Page"
                            id="sign-up-btn"
                            onClick={handleClickSignUp}
                        >
                            <MdOutlineAppRegistration className='icon_Swiper-Page'/>
            </button>

                {/* -------------------ĐÂY LÀ PHẦN ĐĂNG NHẬP---------------- */}
                <div className="signin-signup">
                    <form action="" className="sign-in-form" onSubmit={submitHandler}>

                        <h2 className="title">Sign in</h2>
                        {/* <h2 className="title-mobile">Page sign in </h2> */}
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-contain"
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit input-contain"
                            value="Sign in"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>

                        <p className="social-text">Sign in with ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-google">
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
{/* --------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------PHẦN ĐĂNG KÝ----------------------- */}
                    <form action="" className="sign-up-form" onSubmit={submitHandlerRegister}>
                    {message && <Alert color="danger">{message}</Alert>}
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                autoComplete="username1"
                                className="input-contain"
                                required
                                onChange={(e) => setUsername1(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="icon" />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-contain"
                                autoComplete="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                                autoComplete="new-password"
                                required
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Repeat password"
                                className="input-contain"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit"
                            value="Sign Up"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>
                        <button
                            className="btn_Swiper-Register"
                            id="sign-in-btn"
                            onClick={handleClickSignIn}
                        >
                            <HiOutlineLogin className='icon-RG'/>
                        </button>

    {/* ---------------------Đây là phần chọn đăng nhập bằng facebook hoặc google---------------------------------------- */}
                        <p className="social-text">Sign Up With ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-google">
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


{/* -----------------------PHẦN CHỌN ĐỂ CHUYỂN SANG TRANG SIGN UP HOẶC SIGN_IN----------------------------------------- */}
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">New Account?</h3>
                        <p className="p-signin-signup">create account for you</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-up-btn"
                            onClick={handleClickSignUp}
                        >
                            Sign up
                        </button>
                    </div>
                    <img src={SignUpImage} className="image" alt="signin" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">Have Account?</h3>
                        <p className="p-signin-signup">login with account
                                   
                        </p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-in-btn"
                            onClick={handleClickSignIn}
                        >
                            Sign in
                        </button>
                    </div>
                    <img src={SignInImage} className="image" alt="signin" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
