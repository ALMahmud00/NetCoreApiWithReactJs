import React, { useState, Suspense, lazy } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";

// layout
import TopNavigation from "../layout/topNavigation/topNavigation";
import ProfileSidebar from "./../layout/profileSidebar/profileSidebar";
import Sidebar from "../layout/sidebar";

// module
const Home = lazy(() => import("../modules/Home"));
const About = lazy(() => import("../modules/About"));
const FirstLevelPages = lazy(() =>
  import("../modules/FirstLevel/firstLevelPages")
);

const BasePage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [isProfileSidebar, setIsProfileSidebar] = useState(true);
  // offline
  window.addEventListener("offline", (event) => {
    toast.warning("No Internet connection", {
      toastId: "offline",
    });
  });

  // online
  window.addEventListener("online", (event) => {
    toast.success("Back Online", {
      toastId: "online",
    });
  });
  

  // useEffect(() => {
  //   window.location.reload(false);
  // }, [])

  return (
    <div className="main">
      <Router>
        {/* topNavigation */}
        <div className="top-navigation-wrapper" id="topNav">
          <TopNavigation
            setIsOpenSidebar={setIsOpenSidebar}
            isOpenSidebar={isOpenSidebar}
            setIsProfileSidebar={setIsProfileSidebar}
            isProfileSidebar={isProfileSidebar}
          />
        </div>

        {/* sidebar section */}
        <div className={isOpenSidebar ? "sidebar width-15" : "sidebar width-0"}>
          <Sidebar
            setIsOpenSidebar={setIsOpenSidebar}
            isOpenSidebar={isOpenSidebar}
          />
        </div>

        {/* body */}
        <div className={isOpenSidebar ? "body width-85" : "body width-100"}>
          {/* body-inner */}
          <div className="body-inner">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/first-level" component={FirstLevelPages} />
                <Route path="/error" component={() => <h1>Error 404!</h1>} />
                <Redirect to="/error" />
              </Switch>
            </Suspense>
          </div>
        </div>

        {/* Profile-sidebar */}
        <div
          className={
            isProfileSidebar ? "profile-sidebar" : "profile-sidebar view"
          }
        >
          <ProfileSidebar
            isProfileSidebar={isProfileSidebar}
            setIsProfileSidebar={setIsProfileSidebar}
          />
        </div>

        {/* footer */}
        <div className="footer"></div>
      </Router>
    </div>
  );
};

export default BasePage;
