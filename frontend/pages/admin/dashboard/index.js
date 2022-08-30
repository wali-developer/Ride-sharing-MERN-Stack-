import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminLayout from '../../../components/adminLayout';
import RideStatisticsCard from "../../../components/RideStatisticsCard";
import RideRequestCard from "../../../components/RideRequestCard";

const AdminDashboard = () => {
    const [ridersLength, setRidersLength] = useState(0);
    const [completedRides, setCompletedRides] = useState(0);
    const [cancelledRides, setCancelledRides] = useState(0);
    const [runningRides, setRunningRides] = useState(0);
    const [inactiveRides, setInactiveRides] = useState([]);

    //   useEffect(() => {
    //     const getStatistics = async () => {
    //       try {
    //         const { data } = await axios.get("http://localhost:3001/publishride");
    //         setRidersLength(data.length);
    //         console.log(`Riders Length: ${data.length}`);

    //         // completed rides
    //         const completedRides = data.filter((ride) => {
    //           return ride.status === "Completed";
    //         });
    //         setCompletedRides(completedRides.length);
    //         console.log(`Completed Rides: ${completedRides.length}`);

    //         // Rinning rides
    //         const runningRides = data.filter((ride) => {
    //           return ride.status === "Active";
    //         });
    //         setRunningRides(runningRides.length);
    //         console.log(`Completed Rides: ${runningRides.length}`);

    //         // Cancelled rides
    //         const cancelledRides = data.filter((ride) => {
    //           return ride.status === "Cancelled";
    //         });
    //         setCancelledRides(cancelledRides.length);
    //         console.log(`Completed Rides: ${cancelledRides.length}`);

    //         //total riders
    //         // const totalRiders = data.map((ride) => {
    //         //   return ride.riderId;
    //         // }

    //         // function to filter inactive rides
    //         const filterInactiveRides = data.filter((ride) => {
    //           return ride.status === "Inactive";
    //         });
    //         setInactiveRides(filterInactiveRides);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    //     getStatistics();

    // get admin dashboard route when user login
    //     const getAdminDashboard = async () => {
    //       const { data } = await axios.get(
    //         "http://localhost:3001/user/user-dashboard",
    //         {
    //           headers: {
    //             token: localStorage.getItem("authToken"),
    //           },
    //         }
    //       );
    //       // alert(data);
    //     };
    //     getAdminDashboard();
    //   }, [ridersLength]);

    // statistics api
    const StatisticsApi = [
        {
            id: "1",
            title: "Total Riders",
            value: 30,
            cardIconbg: "#2f978a",
            statisticColbg: "#5ca199",
            icon: "fas fa-user",
        },
        {
            id: "2",
            title: "Total Drivers",
            value: `${ridersLength}`,
            cardIconbg: "#C63535",
            statisticColbg: "#E74E52",
            icon: "fas fa-user-tie",
        },
        {
            id: "3",
            title: "Total Revenue",
            value: 46,
            cardIconbg: "#329C52",
            statisticColbg: "#3AAD59",
            icon: "fas fa-dollar-sign",
        },
        {
            id: "4",
            title: "Total Rides",
            value: 45,
            cardIconbg: "#2f978a",
            statisticColbg: "#5ca199",
            icon: "fas fa-car",
        },
        {
            id: "5",
            title: "Cancelled Ride",
            value: `${cancelledRides}`,
            cardIconbg: "#C63535",
            statisticColbg: "#E74E52",
            icon: "fas fa-times",
        },
        {
            id: "6",
            title: "Completed Rides",
            value: `${completedRides}`,
            cardIconbg: "#329C52",
            statisticColbg: "#3AAD59",
            icon: "fas fa-check",
        },
        {
            id: "7",
            title: "Running Rides",
            value: `${runningRides}`,
            cardIconbg: "#C5803E",
            statisticColbg: "#FBA95A",
            icon: "fas fa-car-side",
        },
    ];

    return (
        <AdminLayout admin="admin">
            <div className="adminProfile-main">
                <div className="px-5">
                    <h2 className="text-center">Rides Statistics</h2>
                    <div className="row">
                        {StatisticsApi.map((statistic) => {
                            const { id, title, value, statisticColbg, cardIconbg, icon } =
                                statistic;
                            return (
                                <div className="col-md-4" key={id}>
                                    <RideStatisticsCard
                                        title={title}
                                        value={value}
                                        cardIconbg={cardIconbg}
                                        statisticColbg={statisticColbg}
                                        icon={icon}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="row mt-5">
                        {[0, 1, 2].map((ride, index) => {
                            return (
                                <div className="col-12 col-md-6" key={index}>
                                    <RideRequestCard
                                        id={84578475}
                                        goingfrom={"Karachi"}
                                        goingto={"Lahore"}
                                        name={"Hamad khan"}
                                        passenger={3}
                                        date={'23 Aug, 2022'}
                                        email={'hamad@netchainmedia.com'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
