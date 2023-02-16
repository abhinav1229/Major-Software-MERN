import React, { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="box-container">
      <div className="form">
        <h1>Enter OTP</h1>
        <p>
          We have send an OTP in your registred gmail. It is valid only for 10
          minutes.
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="OTP"
            required
            onChange={(e) => setOtp(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
