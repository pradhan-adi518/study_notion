import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/api";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      // console.log("sublinks result", result.data.data);
      setSubLinks(result.data.data);
    } catch (err) {
      console.log("coluld not fetch category list");
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className=" flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className=" flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={160} height={42} />
        </Link>

        <nav>
          <ul className=" flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="flex items-center gap-2 group relative">
                      <p>{link.title}</p>
                      <IoIosArrowDropdown />
                      <div className=" invisible absolute left-[50%] translate-x-[-50%] translate-y-[10%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                        <div className=" absolute left-[50%] top-0 h-7 w-7 rotate-45 rounded bg-richblack-5 translate-x-[60%]" />
                        {subLinks.length ? (
                          subLinks.map((subLink, index) => (
                            <Link
                              key={index}
                              to={`catalog/${subLink.name 
                                .replace(" ", "-")
                                .toLowerCase()}`}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? " text-yellow-25"
                            : " text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className=" flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className=" relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to={"/login"}>
              <button className=" border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Log In
              </button>
            </Link>
          )}

          {token === null && (
            <Link to={"/signup"}>
              <button className=" border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}

          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
