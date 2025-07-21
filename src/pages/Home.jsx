import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Link to="UploadPage">
        <div className="link-container">
          <p>Let's Go <span id="arrow">→</span></p>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

export default Home;
