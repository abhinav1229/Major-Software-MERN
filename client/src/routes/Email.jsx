import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="box-container">
      <div className="form">
        <h1>Enter Email</h1>
        <p>We'll send an OTP in your registred email</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
