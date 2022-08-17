import React from 'react';
import UserLayout from '../../../components/userLayout';
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "../../../components/user/RideRequestCard";
import axios from "axios";

const Index = () => {
    //     onst [userPublishride, setUserPublishRide] = useState([]);
    //   const [requestedRides, setRequestedRides] = useState([]);
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   const userEmail = user.email;

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
    return (
        <UserLayout>
            Dashboard
        </UserLayout>
    )
}

export default Index