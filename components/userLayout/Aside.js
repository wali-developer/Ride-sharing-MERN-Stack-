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

const Animation = (position) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: position,
                right: "0",
                transition: 'all 300ms ease-in-out',
            }}
        >
            <img src='/images/animation-icon.svg' alt='Circle' />
        </div>
    )
}

const Aside = () => {
    const [position, setPosition] = useState(0);
    const router = useRouter();
    const menu = [
        {
            id: 1,
            name: 'Dashbaord',
            path: '/user/dashboard',
            icon: 'MdOutlineDashboard'
        },
        {
            id: 2,
            name: 'Profile',
            path: '/user/profile',
            icon: 'AiOutlineUser'
        },
        {
            id: 3,
            name: 'Publish Ride',
            path: '/user/publish_ride',
            icon: 'IoAddCircleOutline'
        },
        {
            id: 4,
            name: 'Request for Ride',
            path: '/user/ride_requests',
            icon: 'IoCarSportOutline'
        },
        {
            id: 5,
            name: 'Riders Request',
            path: '/user/riders_request',
            icon: 'VscGitPullRequest'
        },
        {
            id: 6,
            name: 'Messaging',
            path: '/user/messaging',
            icon: 'IoChatboxOutline'
        },
    ]
    const handleClick = (index) => {
        setPosition(index + 15 + 52 + "px")
    }
    return (
        <>
            <div
                className="userSidebar"
            // id={toggle ? "toggle-content" : ""}
            >
                <div className="sidebar-menu" style={{ position: 'relative' }}>
                    <ul>
                        {menu.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => setPosition(50)}
                                >
                                    <MdOutlineDashboard
                                        className="sidebarMenuIcon"
                                        style={{
                                            color: item.path === router.pathname && '#4f56ff'
                                        }}
                                    />
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
                    </ul>
                    {/* <Animation position={position} /> */}
                </div>
                <div className='' style={{ cursor: 'pointer' }}>
                    <IoCloseOutline className="sidebarMenuIcon" />
                    <span className="ms-4">
                        Logout
                    </span>
                </div>
            </div>
        </>
    );
};

export default Aside;
