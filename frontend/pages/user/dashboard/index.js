import UserLayout from '../../../components/userLayout';
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "../../../components/RideRequestCard";
import AOS from "aos";

const Index = () => {
    const [userPublishride, setUserPublishRide] = useState([]);
    const [requestedRides, setRequestedRides] = useState([]);
    // const user = JSON.parse(localStorage.getItem("user"));
    // const userEmail = user.email;

    // useEffect(() => {
    //     axios.get("http://localhost:3001/user/user-dashboard", {
    //         headers: {
    //             token: localStorage.getItem("authToken"),
    //         },
    //     });
    //     const getUserPublishRide = async () => {
    //         const { data } = await axios.get("http://localhost:3001/publishride");
    //         const userPublishRides = data.filter((ride) => {
    //             return ride.email === userEmail;
    //         });
    //         setUserPublishRide(userPublishRides);
    //     };

    //     const getRequestRides = async () => {
    //         const { data } = await axios.get("http://localhost:3001/requestride");
    //         setRequestedRides(data);
    //     };
    //     getUserPublishRide();
    //     getRequestRides();

    // }, [userEmail]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <UserLayout>
            <div className="col-md-9 userProfile-main">
                <div className="container">
                    <h2 className="text-center mb-5">Your Rides</h2>
                    <div className="row mb-5">
                        {[0, 1, 2, 3].map((ride, index) => {
                            return (
                                <div
                                    className="card border-success mb-3 me-3 col-5"
                                    style={{ maxWidth: "18rem" }}
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="card-header bg-transparent border-success">
                                        {"Abbottabad"} <BsArrowRight /> {"Battagram"}
                                    </div>
                                    <div className="card-body text-success">
                                        <p className="card-text">
                                            You went {"Abbottabad"} from {"Peshawar"} on {"22 July, 2022"}
                                        </p>
                                    </div>
                                    <div className="card-footer bg-transparent border-success">
                                        Date: {"22 July, 2022"}
                                    </div>
                                </div>
                            );
                        })}
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
