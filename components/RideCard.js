import React, { useState, useEffect, useContext } from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { toast } from "react-toastify";
import AOS from "aos";
import { useRouter } from "next/router";
import Modal from '../components/modal';
import Button from 'react-bootstrap/Button';
import API from "../api";
import CustomLoader from '../components/CustomeLoader';
import SearchRideContext from "../context/state";

const SearchedCard = ({
    rideData,
    userFormData
}) => {

    const { searchData, setSearchData } = useContext(SearchRideContext);
    console.log("Search Data : ", searchData)

    const router = useRouter();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [ridePublisher, setRidePublisher] = useState();
    const [openModal, setOpenModal] = useState(false);

    const [loader, setLoader] = useState(false);

    const getRidePublisherData = async () => {
        try {
            const { data } = await API.get('/user/register');

            const ridePublisherData = data?.filter((user) => user?.email === rideData?.email);

            ridePublisherData?.map((user) => setRidePublisher(user));
            // console.log(ridePublisher?._id);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRidePublisherData()
        // console.log(ridePublisher)
    }, [])

    const addBookerToConversation = async (e) => {
        await API.post('/conversations'), {
            senderId: user?._id,
            receiverId: ridePublisher?.id,
        };
    };

    // Booking Ride...
    const BookRide = async () => {
        setOpenModal(false)
        if (rideData?.goingfrom === userFormData?.goingFrom && rideData?.goingto === userFormData?.goingTo) {
            setLoader(true)
            try {
                const payload = {
                    goingfrom: userFormData?.goingFrom,
                    goingto: userFormData?.goingTo,
                    passenger: userFormData?.passengerNeeded,
                    bookingDate: userFormData?.date,
                    rideStatus: rideData?.status,
                    requestStatus: "pending",
                    bookerEmail: user?.email,
                    bookerId: user?._id,
                    publisherId: ridePublisher?._id,
                    rideId: rideData?._id,
                }
                const { data } = await API.post('/requestride', payload);
                addBookerToConversation()
                toast(data);
                setTimeout(() => {
                    router.push('/user/messaging');
                }, 8000);
                // setLoader(false)
            } catch (error) {
                // setLoader(true)
                console.log(error)
            }
            setLoader(false)
            setSearchData({})
            console.log(searchData);

        }
    }


    const handleBook = () => {
        if (!user) {
            toast.info("Please Login to Book a Ride", { position: "top-center" });
            router.push("/auth/login");
        } else {
            setOpenModal(true)
        }
    };

    return (
        <>
            {loader && (
                <CustomLoader />
            )}
            <Modal show={openModal} setShow={setOpenModal} className="">
                <h5 className="text-center" style={{ fontFamily: 'Poppins' }}>Are you sure to book this ride</h5>
                <div className="d-flex justify-content-between mt-5">
                    <Button variant="secondary" onClick={() => setOpenModal(false)}>Close</Button>
                    <Button variant="primary" onClick={BookRide}>Book Ride</Button>
                </div>
            </Modal>
            <div
                className="searchCard"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                <p className="text-center">
                    <strong style={{ color: "#4F56FF" }}>{rideData?.passenger}</strong>{rideData?.passenger > 1 ? " Passengers " : ' Passenger '}
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
                            {rideData?.goingfrom}
                        </h5>
                        <BsArrowDown className="my-2" />
                        <h5>
                            <GrLocation />
                            {rideData?.goingto}
                        </h5>
                    </div>
                    <p className="price col-sm-2 col-md-2">800 pkr</p>
                </div>

                <div className="d-flex justify-content-between align-items-end">
                    <div className="cardUser">
                        <FaUserCircle className="userIcon" />
                        <span>{rideData?.name}</span>
                    </div>
                    <div className="cardDate">
                        <span>{rideData?.date}</span>
                    </div>
                </div>
                <div className="my-2 mt-3 d-flex justify-content-between">
                    {rideData?.status && (
                        <button className="btn primaryBtn" disabled>
                            {rideData?.status}
                        </button>
                    )}
                    <button
                        className="btn primaryBtn"
                        onClick={handleBook}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchedCard;
