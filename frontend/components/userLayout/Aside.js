import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { VscGitPullRequest } from "react-icons/vsc";
import {
    IoCarSportOutline,
    IoAddCircleOutline,
    IoCloseOutline,
    IoChatboxOutline,
} from "react-icons/io5";
import AOS from "aos";

const Aside = () => {
    //   const [userName, setUserName] = useState("");
    //   useEffect(() => {
    //     const LoginUser = JSON.parse(localStorage.getItem("user"));
    //     setUserName(LoginUser.fullName);
    //   });
    //   const Logout = () => {
    //     localStorage.clear();
    //     window.location.href = "/";
    //     toast.success("You are successfully logout...", { position: "top-center" });
    //   };

    //   useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);
    return (
        <div className="col-md-3 sidebar">
            <div
                className="sidebar-content"
            // data-aos="fade-right"
            // data-aos-duration="1200"
            >
                <div className="sidebar-header">
                    <div className="user-image">
                        <FaUserCircle className="user-photo" />
                    </div>
                    <div className="user-name">
                        <h3>Waliullah</h3>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="nav nav-tabs flex-column">
                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <MdOutlineDashboard className="sidebarMenuIcon" />
                            <Link href="#" >
                                <span className="nav-link">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item active d-flex align-items-center SidebarMenuItem">
                            <AiOutlineUser className="sidebarMenuIcon" />
                            <Link href="#">
                                <span className="nav-link">Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <IoAddCircleOutline className="sidebarMenuIcon" />
                            <Link href="#">
                                <span className="nav-link"> Publish Ride</span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <IoCarSportOutline className="sidebarMenuIcon" />
                            <Link href="#" >
                                <span className="nav-link">Request for Ride</span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <VscGitPullRequest className="sidebarMenuIcon" />
                            <Link href="#" >
                                <span className="nav-link">My Ride Requests</span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <IoChatboxOutline className="sidebarMenuIcon" />
                            <Link href="#">
                                <span className="nav-link">Messaging</span>
                            </Link>
                        </li>

                        <li className="nav-item d-flex align-items-center SidebarMenuItem">
                            <IoCloseOutline className="sidebarMenuIcon" />
                            <Link href="#">
                                <span className="nav-link">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Aside;
