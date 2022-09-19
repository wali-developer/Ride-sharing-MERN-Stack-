import React, { useState } from "react";
import PassengerDetails from "./PassengerDetails";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import AOS from "aos";
import API from '../../api';
import { useRouter, withRouter } from 'next/router';

const Index = () => {
    const [show, setShow] = useState(false);
    const [rides, setRides] = useState([]);
    const [formData, setFormData] = useState({
        goingFrom: "",
        goingTo: "",
        date: "",
        passengerNeeded: "",
    });
    const router = useRouter();

    // search handler
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (
                formData.goingFrom.length > 0 &&
                formData.goingTo.length > 0 &&
                formData.date.length > 0 &&
                formData.passengerNeeded > 0
            ) {
                const { data } = await API.get('/publishride');
                const searchRides = data.filter(ride => ride.goingfrom === formData.goingFrom && ride.goingto === formData.goingTo);

                router.push({
                    pathname: "/search/available_rides",
                    query: {
                        availableRides: JSON.stringify(searchRides),
                        userFormData: JSON.stringify(formData)
                    }
                }, '/search/available_rides');
            } else {
                toast.error("Please fill all the fields");
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
        <section className="search_ride_wrapper">
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
                        <input
                            type="number"
                            placeholder="0"
                            name="passenger"
                            onChange={(e) => setFormData({ ...formData, passengerNeeded: e.target.value })} />
                    </div>
                    <div className="searchBtn ">
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default withRouter(Index);
