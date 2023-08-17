import React, { useState } from "react";
import "../Login_SignUp/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const handleSubmit=  (e)=>{
    e.preventDefault()
     axios.post('http://localhost:3001/register', {name,email,password})
     .then(result => {console.log(result)
      navigate('/login')
    })
     .catch(err=> console.log(err))
  }

  return (
    <>
      <div className="signup-page">
        <h1 className="signup-page__heading ">Signup page</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="username">
              <label className="form__label" htmlFor="firstName">
                Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Register
            </button>

            <Link to="/login" type="submit" className="btn">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
