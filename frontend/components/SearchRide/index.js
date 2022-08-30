import React, { useState } from "react";
import PassengerDetails from "./PassengerDetails";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import AOS from "aos";
import API from '../../api';
import { useRouter } from 'next/router';

const Index = () => {
    const [passengerNeeded, setPassengerNeeded] = useState(0);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        goingFrom: "",
        goingTo: "",
        date: "",
    });
    const [publishRides, setPublishRides] = useState([]);
    const router = useRouter();

    // show dropdown content
    const showDropdown = () => {
        setShow(!show);
    };

    // search handler
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (
                formData.goingFrom.length > 0 &&
                formData.goingTo.length > 0 &&
                formData.date.length > 0
            ) {
                const { data } = await API.get('/publishride');
                const searchRides = data.filter(ride => ride.goingfrom === formData.goingFrom && ride.goingto === formData.goingTo);
                // console.log(searchRides)
                router.push({
                    pathname: "/search/available_rides",
                    query: searchRides
                }, '/search/available_rides');
            } else {
                toast.warn("Please fill all the fields");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const places = [
        {
            id: 1,
            location: "Select a location",
        },
        {
            id: 2,
            location: "Peshawar",
        },
        {
            id: 3,
            location: "Islamabad",
        },
        {
            id: 4,
            location: "Lahore",
        },
        {
            id: 5,
            location: "Abbottabad",
        },
        {
            id: 6,
            location: "Battagram",
        },
    ];

    return (
        <section data-aos="fade-right" data-aos-duration="1200 search_ride_wrapper">
            <h2>Search for a Ride</h2>
            <form
                onSubmit={(e) => handleSearch(e)}
            >
                <div className="mb-3">
                    <select
                        type="text"
                        className="form-control"
                        name="goingFrom"
                        placeholder="Going from..."
                        onChange={(e) => {
                            setFormData({ ...formData, goingFrom: e.target.value });
                        }}
                        value={formData.goingFrom}
                    >
                        {places.map((place) => {
                            const { id, location } = place;
                            return <option key={id}>{location}</option>;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select
                        type="text"
                        className="form-control"
                        name="goingTo"
                        placeholder="Going to..."
                        onChange={(e) =>
                            setFormData({ ...formData, goingTo: e.target.value })
                        }
                        value={formData.goingTo}
                        required
                    >
                        {places.map((place) => {
                            const { id, location } = place;
                            return <option key={id}>{location}</option>;
                        })}
                    </select>
                </div>
                <div className=" mainInnerRow">
                    <div className="date">
                        <input
                            type="date"
                            name="date"
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                            value={formData.date}
                        />
                    </div>
                    <div className="user">
                        <FaUser className="userIcon" />
                        {/* <span>{passengerNeeded}</span> */}
                        <input type="number" placeholder="0" />
                    </div>
                    <div className="searchBtn">
                        <button className="btn btn-outline-success search" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Index;
