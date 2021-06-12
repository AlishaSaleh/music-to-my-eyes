import React from "react";
import { createPopper } from "@popperjs/core";
import ProfilePic from "../ProfilePic";
import API from "../../utils/API";
import "./index.css"

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <div className="flex flex-wrap fix-height pp-hide">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              type="button"
              ref={btnDropdownRef}
              className="pp-btn"
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            ><ProfilePic src={user.image}/>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="/profile-settings"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent no-hov" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                Account
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              <a
                href="/"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent no-hov" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={API.logoutUser}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}