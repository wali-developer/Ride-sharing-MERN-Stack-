import React, { useState, useEffect } from "react";
import UserLayout from '../../../components/userLayout';
import { BsArrowDown } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import axios from "axios";
import AOS from "aos";

const MyRideRequests = () => {
    const [requestedRides, setRequestedRides] = useState([]);
    // const user = JSON.parse(localStorage.getItem("user"));
    // const [publisherId, setPublisherId] = useState(user.id);
    const [publisherUser, setPublisherUser] = useState([]);
    const [rejectionReason, setRejectionReason] = useState("");

    // useEffect(() => {
    //     const getRequestRides = async () => {
    //         const { data } = await axios.get("http://localhost:3001/requestride");
    //         data.map((ride) => {
    //             setPublisherId(ride.publisherId);
    //             setRejectionReason(ride.rejectionReason);
    //         });
    //         setRequestedRides(data);
    //     };
    //     const getPublisher = async () => {
    //         const { data } = await axios.get("http://localhost:3001/user/register");
    //         const filterUser = data.filter((user) => user._id === publisherId);
    //         setPublisherUser(filterUser);
    //     };

    //     getRequestRides();
    //     getPublisher();
    // }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <UserLayout>
            <div className="col-md-9 userProfile-main">
                <div className="container">
                    {[0, 1, 2].map((ride, index) => {
                        return (
                            <div
                                className="searchCard"
                                key={index}
                                data-aos="zoom-in"
                                data-aos-duration="1200"
                            >
                                <div className="">
                                    <div className="searchCard-content row">
                                        <div className="searchCard-content-col col-sm-2 col-md-2">
                                            <h5>18:00</h5>
                                            <p>2hr40</p>
                                            <h5>20:40</h5>
                                        </div>
                                        <div className="searchCard-content-col col-sm-8 col-md-8">
                                            <h5>
                                                <GrLocation />
                                                {"Lahore"}
                                            </h5>
                                            <BsArrowDown className="my-2" />
                                            <h5>
                                                <GrLocation />
                                                {"Karachi"}
                                            </h5>
                                        </div>
                                        <p className="price col-sm-2 col-md-2">800 pkr</p> <br />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end">
                                        <div className="cardUser">
                                            {[0].map((user) => {
                                                return (
                                                    <p key={index}>
                                                        You booked a given ride with <b>{"Wali"}</b> email{" "}
                                                        <b>{'waliullah@gmail.com'}</b> with <strong>{2}</strong>{" "}
                                                        passengers
                                                        {"12 April, 2022"}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {"status" === "Rejected" ? (
                                        <div>
                                            <span>Ride Publisher Rejection message : </span> <br />
                                            <h6>{"Rejection reason description"}</h6>
                                        </div>
                                    ) : null}
                                    <div className="my-2 mt-3 d-flex justify-content-between">
                                        <button className="btn primaryBtn" disabled>
                                            {"Active"}
                                        </button>
                                        <button className="btn primaryBtn" disabled>
                                            {"Pending"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </UserLayout>
    );
};

export default MyRideRequests;
