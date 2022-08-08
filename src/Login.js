import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { MyContext } from './Contexts/Main';


function Login() {
    var counter = 0;
    const navigate = useNavigate();

    const context = useContext(MyContext);

    const tryFun = (data) => {
        counter = 1;
        context.signedUser[1](data);
    }
    
    const validateLogin = (e) => {
        e.preventDefault();
        var currentCredential = document.getElementById('loginCriteria').value;
        var currentPassword = document.getElementById('loginPassword').value;
        currentCredential = currentCredential.toLowerCase();

        context.user[0].map((item) => ((item.email.toLowerCase() === currentCredential || item.phone === currentCredential) && item.password === currentPassword) ? tryFun(item.name) : null)
        if(counter === 1)
        {
            navigate('/home');
        }
        else
        {
            alert("Invalid Credentials !!!");
            return;
        }
    }

  return (
    <div className='Login'>
        <div className='phoneArea'>
            <img src="https://media.voguebusiness.com/photos/60ae33319e6b5e325e60067c/1:1/w_2000,h_2000,c_limit/instagram-likes-voguebus-instagram-may-21-story.gif" alt="Login" />
        </div>
        <form className='loginFormArea' onSubmit={validateLogin}>
            <h1 className='heading'>ChInstagram</h1>
            <div className='groupInput'>
                <input required type="text" id="loginCriteria" placeholder="Phone Number or Email" />
                <input required id="loginPassword" type="password" placeholder="Password" />
            </div>
            <button className='loginButton' type="submit">Log In</button>
            <p>Don't have an account? <Link className="toRegister" to="/register">Sign up</Link></p>
            <p>Get the App</p>
            <div className='rowGroup'>
                <button><i className="fa-solid fa-play"></i> Get on Play Store</button>
                <button><i className="fa-brands fa-apple"></i> Get on App Store</button>
            </div>
        </form>
    </div>
  )
}

export default Login