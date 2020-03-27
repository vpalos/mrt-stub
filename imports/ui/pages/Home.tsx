import React from "react";

import { Link } from "react-router-dom";

export default () => (
  <div>
    <Link to="/sign-in">Sign-in</Link>
    <br />
    <Link to="/sign-up">Sign-up</Link>
    <br />
    <Link to="/forgot-password">Forgot password</Link>
    <br />
    <Link to="/reset-password">Reset password</Link>
    <br />
    <Link to="/dashboard">Dashboard</Link>
    <br />
  </div>
);
