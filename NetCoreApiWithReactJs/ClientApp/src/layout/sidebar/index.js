/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuList from "./menu";

// css
import "./sidebar.css";

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [selectedFirstLevelMenu, setSelectedFirstLevelMenu] = useState("");
  const [selectedSecondLevelMenu, setSelectedSecondLevelMenu] = useState("");
  const [selectedThirdLevel, setSelectedThirdLevel] = useState("");

  console.log({ selectedFirstLevelMenu });
  console.log({ selectedSecondLevelMenu });
  console.log({ selectedThirdLevel });

  return (
    <>
      <div className="menu">
        <ul className="list-unstyled components">
          {menuList?.map((firstLevel, index) => (
            <li key={index} className="firstLevel-li">
              {firstLevel?.isFirstLabel ? (
                <>
                  {/* first label parent */}
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() =>
                      setSelectedFirstLevelMenu(
                        firstLevel?.label === selectedFirstLevelMenu
                          ? ""
                          : firstLevel?.label
                      )
                    }
                  >
                    <div className="sidebar-dropdown">
                      <i className="fa fa-cog"></i> {firstLevel?.label}
                    </div>
                    {firstLevel?.subs && (
                      <i
                        className={
                          selectedFirstLevelMenu === firstLevel?.label
                            ? "fa fa-angle-down icon-rotate"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    )}
                  </div>
                  {/* sub-menu */}
                  {firstLevel?.subs?.length > 0 && (
                    <ul
                      className={
                        selectedFirstLevelMenu === firstLevel?.label
                          ? "dropdown-content firstLabel-dropdown-show"
                          : "dropdown-content firstLabel-dropdown-hide"
                      }
                    >
                      {firstLevel?.subs?.map((secondLevel, index) => (
                        <li key={index}>
                          {secondLevel?.isSecondLabel ? (
                            <>
                              <div
                                className="d-flex align-items-center justify-content-around"
                                onClick={() =>
                                  setSelectedSecondLevelMenu(
                                    secondLevel?.label ===
                                      selectedSecondLevelMenu
                                      ? ""
                                      : secondLevel?.label
                                  )
                                }
                              >
                                <div className="sidebar-dropdown sidebar-second-dropdown">
                                  <span className="menu-bullet"></span>{" "}
                                  {secondLevel?.label}
                                </div>
                                {secondLevel?.nestedSubs.length > 0 && (
                                  <i
                                    className={
                                      selectedSecondLevelMenu ===
                                      secondLevel?.label
                                        ? "fa fa-angle-down icon-rotate"
                                        : "fa fa-angle-down"
                                    }
                                  ></i>
                                )}
                              </div>

                              {secondLevel?.nestedSubs?.length > 0 && (
                                <ul
                                  className={
                                    selectedSecondLevelMenu ===
                                    secondLevel?.label
                                      ? "dropdown-content dropdown-second-content secondLevel-dropdown-show"
                                      : "dropdown-content dropdown-second-content secondLevel-dropdown-hide"
                                  }
                                >
                                  {secondLevel?.nestedSubs?.map(
                                    (thirdLevel, index) => (
                                      <li key={index}>
                                        <div
                                          style={{ width: "100%" }}
                                          onClick={() => {
                                            if (window.innerWidth < 991) {
                                              setIsOpenSidebar(true);
                                            }
                                            setSelectedThirdLevel(
                                              thirdLevel?.label ===
                                                selectedThirdLevel
                                                ? ""
                                                : thirdLevel?.label
                                            );
                                          }}
                                        >
                                          <Link
                                            className={
                                              thirdLevel?.label ===
                                              selectedThirdLevel
                                                ? "active"
                                                : ""
                                            }
                                            to={thirdLevel?.to}
                                          >
                                            <span className="menu-bullet"></span>{" "}
                                            {thirdLevel?.label}
                                          </Link>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </>
                          ) : (
                            <div
                              style={{ width: "100%" }}
                              onClick={() => {
                                if (window.innerWidth < 991) {
                                  setIsOpenSidebar(true);
                                }
                                setSelectedSecondLevelMenu(
                                  secondLevel?.label === selectedSecondLevelMenu
                                    ? ""
                                    : secondLevel?.label
                                );
                              }}
                            >
                              <Link
                                className={
                                  secondLevel?.label === selectedSecondLevelMenu
                                    ? "active"
                                    : ""
                                }
                                to={secondLevel?.to}
                              >
                                <span className="menu-bullet"></span>{" "}
                                {secondLevel?.label}
                              </Link>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  style={{ width: "100%" }}
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      setIsOpenSidebar(true);
                    }
                    setSelectedFirstLevelMenu(
                      firstLevel?.label === selectedFirstLevelMenu
                        ? ""
                        : firstLevel?.label
                    );
                    setSelectedThirdLevel(
                      firstLevel?.label === selectedThirdLevel
                        ? ""
                        : firstLevel?.label
                    );
                  }}
                >
                  <Link
                    className={
                      firstLevel?.label === selectedThirdLevel ? "active" : ""
                    }
                    to={firstLevel?.to}
                  >
                    <i className="fa fa-cog"></i> {firstLevel?.label}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
