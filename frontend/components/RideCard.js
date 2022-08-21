import React, { useState, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { toast } from "react-toastify";
import AOS from "aos";

const SearchedCard = () => {
    //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const handleBook = () => {
        if (!user) {
            toast.info("Please Login to Book a Ride", { position: "top-center" });
            history.push("/login");
        } else {
            history.push({
                pathname: "/availablerides/book",
                state: {
                    goingfrom,
                    goingto,
                    name,
                    date,
                    email,
                    status,
                    publishRideId,
                    formData,
                },
            });
        }
    };

    // initialize animation library
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div
            className="searchCard"
            data-aos="zoom-in"
            data-aos-duration="1200"
        >
            <p className="text-center">
                <strong style={{ color: "#4F56FF" }}>{2}</strong> Passengers
                Needed for the ride
            </p>
            <div className="searchCard-content row">
                <div className="searchCard-content-col col-sm-2 col-md-2">
                    <h5>18:00</h5>
                    <p>2hr40</p>
                    <h5>20:40</h5>
                </div>
                <div className="searchCard-content-col col-sm-8 col-md-8">
                    <h5>
                        <GrLocation />
                        {"Peshawar"}
                    </h5>
                    <BsArrowDown className="my-2" />
                    <h5>
                        <GrLocation />
                        {"Islamabad"}
                    </h5>
                </div>
                <p className="price col-sm-2 col-md-2">800 pkr</p>
            </div>

            <div className="d-flex justify-content-between align-items-end">
                <div className="cardUser">
                    <FaUserCircle className="userIcon" />
                    <span>{"wali"}</span>
                </div>
                <div className="cardDate">
                    <span>{"23 Aug, 2022"}</span>
                </div>
            </div>
            <div className="my-2 mt-3 d-flex justify-content-between">
                <button className="btn primaryBtn" disabled>
                    {"Active"}
                </button>
                <button className="btn primaryBtn">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default SearchedCard;
