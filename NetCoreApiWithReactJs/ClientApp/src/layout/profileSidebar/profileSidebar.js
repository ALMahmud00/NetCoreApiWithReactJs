import React from "react";
import "./profileSidebar.css";

export default function ProfileSidebar({
  isProfileSidebar,
  setIsProfileSidebar,
}) {
  return (
    <>
      <div className="profile-sidebar-innerbody">
        <div
          onClick={() => setIsProfileSidebar(!isProfileSidebar)}
          className="d-flex justify-content-between align-items-center px-2"
        >
          <span className="profile-sidebar-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ height: "26px", width: "26px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="profile-sidebar-innerbody-txt mt-4">
          <div className="profile-inner-txt text-center">
            <h3>
              <b>{"Logout"}</b>
            </h3>
            <h3>
              <b>{"Setting"}</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
