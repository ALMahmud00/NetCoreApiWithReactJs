import React from "react";
import { Link } from "react-router-dom";
import "./topNavigation.css";

export default function TopNavigation({
  setIsOpenSidebar,
  isOpenSidebar,
  isCartSidebar,
  setIsCartSidebar,
  isProfileSidebar,
  setIsProfileSidebar,
}) {
  return (
    <>
      <div className="top-navigation">
        {/* sidebar */}
        <div className="logo-wrapper">
          <div
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className={
              isOpenSidebar ? "sidebar-toggle" : "sidebar-toggle toggled"
            }
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </div>
          <Link to="/">
            <div className="logo-img">
              Logo
            </div>
          </Link>
        </div>

        {/* profile sidebar */}
        <div className="top-menu">
          <div
            className="top-user"
            onClick={() => setIsProfileSidebar(!isProfileSidebar)}
          >
            <span>
              <i className="fa fa-user"></i>
            </span>
            {/* {profileData?.userName} */}
          </div>
        </div>
      </div>
    </>
  );
}
