import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const logoBottom = ["About", "Careers", "Affiliates"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className=" bg-richblack-800">
      {/* upper part */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between gap-8 py-14 leading-6 text-richblack-400 lg:flex-row">
        <div className=" flex w-[100%] flex-col border-b border-richblack-700 pb-5 lg:flex-row">
          {/* section1 */}
          <div className=" flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:border-r lg1:border-richblack-700 lg:pr-5">
            <div className=" mb-7 flex w-[30%] flex-col gap-3 lg:w-[30%] lg1:pl-0">
              <img src={logo} alt="" className=" object-contain" />
              <h1 className=" text-lg font-semibold text-richblack-50">
                Company
              </h1>
              <div className=" flex flex-col gap-2">
                {logoBottom.map((item, index) => {
                  return (
                    <div
                      className=" cursor-pointer text-sm transition-all duration-200 hover:text-richblack-50"
                      key={index}
                    >
                      <Link to={item.toLowerCase()}>{item}</Link>
                    </div>
                  );
                })}
              </div>
              <div className=" flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className=" mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className=" text-lg font-semibold text-richblack-50">
                Resources
              </h1>
              <div className=" mt-2 flex flex-col gap-2">
                {Resources.map((item, index) => {
                  return (
                    <div key={index} className=" cursor-pointer text-sm transition-all duration-200 hover:text-richblack-50">
                      <Link to={item.split(" ").join("-")}>{item}</Link>
                    </div>
                  );
                })}
              </div>
              <h1 className=" mt-7 text-lg font-semibold text-richblack-50">
                Support
              </h1>
              <div className=" mt-2 cursor-pointer text-sm transition-all duration-200 hover:text-richblack-200">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>
            <div className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className="text-[16px] font-semibold text-richblack-50">
                Plans
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="mt-7 text-[16px] font-semibold text-richblack-50">
                Community
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* section2 */}
          <div className="flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:pl-5">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
                  <h1 className="text-[16px] font-semibold text-richblack-50">
                    {ele.title}
                  </h1>
                  <div className="mt-2 flex flex-col gap-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-row items-center justify-between pb-14  text-sm text-richblack-400">
        {/* Section 1 */}
        <div className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:items-start">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "cursor-pointer border-r border-richblack-700 transition-all duration-200 hover:text-richblack-50"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center">Priyanshu Mittal © 2023 Studynotion</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
