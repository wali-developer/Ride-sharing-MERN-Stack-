import { useState } from 'react';
import Link from 'next/link';
import { Dropdown, Button } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { VscGitPullRequest } from "react-icons/vsc";
import {
    IoCarSportOutline,
    IoAddCircleOutline,
    IoCloseOutline,
    IoChatboxOutline,
} from "react-icons/io5";
import { useRouter } from 'next/router';

const Aside = () => {
    const router = useRouter();
    const [selectedItem, setSelectedItem] = useState();
    const menu = [
        {
            id: 1,
            name: 'Dashbaord',
            path: '/admin/dashboard',
            icon: <MdOutlineDashboard
                className='sidebarMenuIcon'
            />
        },
        {
            id: 2,
            name: 'Profile',
            path: '/admin/profile',
            icon: <AiOutlineUser
                className='sidebarMenuIcon'
            // style={{
            //     color: item.path === router.pathname && '#4f56ff'
            // }}
            />
        },
        {
            id: 3,
            name: 'Riders',
            path: '/admin/riders',
            icon: <IoAddCircleOutline
                className='sidebarMenuIcon'
            // style={{
            //     color: item.path === router.pathname && '#4f56ff'
            // }}
            />
        },
        {
            id: 4,
            name: 'Rides',
            path: '/admin/rides',
            icon: <IoCarSportOutline
                className='sidebarMenuIcon'
            // style={{
            //     color: item.path === router.pathname && '#4f56ff'
            // }}
            />
        },
        {
            id: 5,
            name: 'Drivers',
            path: '/admin/drivers',
            icon: <VscGitPullRequest
                className='sidebarMenuIcon'
            // style={{
            //     color: item.path === router.pathname && '#4f56ff'
            // }}
            />
        },
    ]

    const handleLogout = () => {
        alert("Hello")
        // localStorage.clear()

    }
    return (
        <>
            <div
                className="userSidebar"
            // id={toggle ? "toggle-content" : ""}
            >
                <div className="sidebar-menu">
                    <ul>
                        {menu.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item.icon}
                                    <Link href={item.path}>
                                        <span
                                            className="ms-4"
                                            style={{
                                                color: item.path === router.pathname && '#4f56ff'
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            )
                        }
                        )}
                        <li>
                            <VscGitPullRequest
                                className='sidebarMenuIcon'
                                onClick={() => {
                                    setSelectedItem(item)
                                    handleLogout()
                                }}
                            />
                            <span
                                className="ms-4"
                            >
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Aside;
