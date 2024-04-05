import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Login() {
  const [log, setLog] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);

  const createUser = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/createUser", {
      name: name,
      password: password,
      email: email,
    });
    alert("user created");
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:3001/login", {
      password: password,
      email: email,
    });
    setCookies("access_token", response.data.token);
    window.localStorage.setItem("userID", response.data.userID);
    window.location.replace("/Home");
  };

  return (
    <div className="home">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label
                htmlFor="tab-1"
                className="tab"
                onClick={() => setLog(true)}
              >
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label
                htmlFor="tab-2"
                className="tab"
                onClick={() => setLog(false)}
              >
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  {log ? (
                    <div>
                      <form name="form" action="login.php" method="POST">
                        <div className="group">
                          <label htmlFor="user" className="label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="pass" className="label">
                            Password
                          </label>
                          <input
                            id="pass"
                            name="pass"
                            type="password"
                            className="input"
                            data-type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <input
                            type="submit"
                            className="button"
                            value="Sign In"
                            onClick={login}
                          />
                        </div>

                        <div className="hr"></div>
                        <div className="foot">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <form name="form" action="signup.php" method="POST">
                        <div className="group">
                          <label htmlFor="user" className="label">
                            Username
                          </label>
                          <input
                            id="user"
                            name="user"
                            type="text"
                            className="input"
                            placeholder="Create your Username"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="pass" className="label">
                            Password
                          </label>
                          <input
                            id="pass"
                            name="pass"
                            type="password"
                            className="input"
                            data-type="password"
                            placeholder="Create your password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="pass" className="label">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Enter your email address"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <input
                            type="submit"
                            className="button"
                            value="Sign Up"
                            onClick={createUser}
                          />
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
