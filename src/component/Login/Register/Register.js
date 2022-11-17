import React, { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const {user, authError, registerUser, isLoading} = useAuth();
    

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        //console.log(filed, value);
        const newLoginData = {...loginData};
        newLoginData[filed] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
        console.log(loginData.email,loginData.password);
         registerUser(loginData.email, loginData.password, loginData.name, navigate);
         e.preventDefault();
       
        //e.preventDefault();
    }
    return (
        <div className="banner-main banner-overlay">
             <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
          { !isLoading && <form onSubmit={handleLoginSubmit}>
              <div class="form-floating mb-3">
                <input type="email" onChange={handleOnChange} class="form-control" id="floatingInput" name="email" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" name="password" onChange={handleOnChange} class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" name="password2" onChange={handleOnChange} class="form-control" id="floatingPassword2" placeholder="Password"/>
                <label for="floatingPassword">ReType Password</label>
              </div>

            
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold signIn" type="submit">Registerd</button>
              </div>
              {/* <hr class="my-4"/> */}
              <hr/>
              <div class="d-grid mb-2">
                <button class="btn btn-google btn-login text-uppercase fw-bold google-btn" type="submit">
                  <i class="fab fa-google "></i> Sign in with Google
                </button>
              </div>
              <div class="d-grid">
                <Link  class="reg-one" to="/login">
                <button class="btn btn-facebook btn-login text-uppercase fw-bold txt1 google-btn" type="submit">
                  Already Registerd? Please Login
                </button>
                </Link>
              </div>
            </form>}
            {isLoading && <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>}
        {user?.email && <div class="alert alert-success success-alert" role="alert">
        User created successfully.!
        </div>}
      
          </div>
        </div>
      </div>
    </div>
  </div>   
        </div>
    );
};

export default Register;