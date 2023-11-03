import React, { useState } from "react";
import axios from "axios";
import "./signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", {
        email,
        password,
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <section className="signin">
      <form className="signinForm" onSubmit={onSubmit}>
        <div className="formField">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formField">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Signin;
