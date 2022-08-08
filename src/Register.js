import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { MyContext } from './Contexts/Main';




const Register = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();
    const validate = (e) => {
        e.preventDefault();
        var name = document.getElementById('regName').value;
        var phn = document.getElementById('regPhone').value;
        var email = document.getElementById('regEmail').value;
        var password = document.getElementById('regPassword').value;
        var confPassword = document.getElementById('regConfPassword').value;
        if(password !== confPassword)
        {
            alert('Password and Confirm Password must be the same !!');
            document.getElementById('regConfPassword').focus();
            return;
        }
        
        var temp = [...context.user[0], {name: name, phone: phn, email: email, password: password}];
        context.user[1](temp);
        document.getElementById('regName').value = "";
        document.getElementById('regPhone').value = "";
        document.getElementById('regEmail').value = "";
        document.getElementById('regPassword').value = "";
        document.getElementById('regConfPassword').value = "";
        navigate("/");
    

}
  return (
    <div className="Register">
        <form className="registerForm" onSubmit={validate}>
            <h1 className='heading'>ChInstagram</h1>
            <p>Sign up to see photos and videos from your friends</p>
            <div className="inputGroup">
                <input required type="text" placeholder="User Name" id="regName"/>
                <input required type="tel" pattern="[0-9]{10}" placeholder="Phone Number" id="regPhone"/>
                <input required type="email" placeholder="Email Address" id="regEmail"/>
                <input required type="password" placeholder="Password" id="regPassword"/>
                <input required type="password" placeholder="Confirm Password" id="regConfPassword"/>
            </div>
            <p className='small'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</p>
            <button type="submit">Sign up</button>
            <p>Have an account? <Link to="/" className="toLogin">Log In</Link></p>
        </form>
    </div>
  )
}

export default Register