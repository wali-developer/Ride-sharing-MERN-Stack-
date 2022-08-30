import UserLayout from '../../../components/userLayout';
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "../../../components/RideRequestCard";
import API from '../../../api';
import moment from 'moment';

const Index = () => {
    const [userRides, setUserRides] = useState([]);
    const [requestedRides, setRequestedRides] = useState([]);
    // const userEmail = user.email;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

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

        //     const getRequestRides = async () => {
        //         const { data } = await axios.get("http://localhost:3001/requestride");
        //         setRequestedRides(data);
        //     };
        //     getRequestRides();
        getUserRides();

    }, []);
    return (
        <UserLayout>
            <div className="col-md-9 userProfile-main">
                <div className="container">
                    <h2 className="text-center mb-5">Your Rides</h2>
                    <div className="row mb-5">
                        {/* {userRides ? } */}
                        {userRides ? userRides?.map((ride, index) => {
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
                        }) : (
                            <h1>There is no records of your Previous Rides</h1>
                        )}
                    </div>
                </div>
                <div className='row d-flex flex-row p-5'>
                    <div className='col-12 col-md-6'>
                        {[0, 1].map((ride, index) => {
                            return (
                                <RideRequestCard key={index} />
                            );
                        })}

                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Index;
