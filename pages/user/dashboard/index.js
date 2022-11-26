import UserLayout from '../../../components/userLayout';
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "../../../components/RideRequestCard";
import API from '../../../api';
import moment from 'moment';

const Index = () => {
    const [userRides, setUserRides] = useState([]);
    const [requestedRides, setRequestedRides] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem("user"));
        if (user) setUser(loginUser);
    }, []);

    const getRequestRides = async () => {
        const { data } = await API.get("/requestride");
        // console.log(data);
        const filterRequestRides = data?.filter(ride => ride?.publisherId === user?._id);
        setRequestedRides(filterRequestRides);
    };

    useEffect(() => {
        API.get("/user/user-dashboard", {
            headers: {
                token: localStorage.getItem("authToken"),
            }
        });

        const getUserRides = async () => {
            const { data } = await API.get("/publishride/user_rides", {
                headers: {
                    userEmail: user?.email,
                }
            });
            setUserRides(data);
        };

        getRequestRides();
        getUserRides();

    }, []);
    return (
        <UserLayout>
            <div className="col-md-9 userProfile-main">
                <div className="container">
                    <h2 className="text-center mb-5">Your Rides</h2>
                    <div className="row mb-5">
                        {userRides?.map((ride, index) => {
                            return (
                                <div
                                    className="card border-success mb-3 me-3 col-5"
                                    style={{ maxWidth: "18rem" }}
                                    key={index}
                                >
                                    <div className="card-header bg-transparent border-success">
                                        {ride.goingfrom} <BsArrowRight /> {ride.goingto}
                                    </div>
                                    <div className="card-body text-success">
                                        <p className="card-text">
                                            You went {ride.goingto} from {ride.goingfrom} on {moment().format(ride.date)}
                                        </p>
                                    </div>
                                    <div className="card-footer bg-transparent border-success">
                                        Date: {moment().format(ride.date)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {!userRides && (
                        <p>There is no record of your previous rides</p>
                    )}
                </div>
                <h2 className="text-left pt-5">Ride Requests</h2>
                <div className='row p-5'>
                    <div className='col-12'>
                        {
                            requestedRides?.map((ride, index) => {
                                return (
                                    <RideRequestCard
                                        key={index}
                                        ride={ride}
                                        getRequestRides={getRequestRides}
                                    />
                                );
                            })
                        }
                    </div>
                    {!requestedRides && (
                        <p className='text-center' style={{ fontSize: '16px', fontWeight: '500' }}>There is no ride requests</p>
                    )}
                </div>
            </div>
        </UserLayout>
    );
};

export default Index;
