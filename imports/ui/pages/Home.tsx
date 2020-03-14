import React from "react";

import { Link } from "react-router-dom";

export default () => (
  <div>
    Home page.
    <p>
      <Link to="/dashboard">Dashboard</Link>
    </p>
  </div>
);
