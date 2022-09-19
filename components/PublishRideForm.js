import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import API from '../api';
import CustomLoader from '../components/CustomeLoader';
import Modal from '../components/modal';
import { Button } from "react-bootstrap";

const PulishRideFormCard = () => {

    const [loginUser, setLoginUser] = useState(

    );
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [passenger, setpassenger] = useState(0);
    const [goingfrom, setGoingfrom] = useState("");
    const [goingto, setGoingto] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Inactive");

    useEffect(() => {
        // console.log(loginUser?._id) 
        setLoginUser(JSON.parse(localStorage?.getItem("user")))

    }, [])

    // hanlde Publish Ride
    const publishRideHandle = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await API.post("publishride", {
                goingfrom: goingfrom,
                goingto: goingto,
                status: status,
                passenger: passenger,
                date: date,
                ridePublisherId: loginUser?._id,
                ridePublisheremail: loginUser?.email
            });
            if (data) {
                toast.success(data);
            }
        } catch (err) {
            console.log(err);
        }
        setOpenModal(false);
        setLoading(false);
    };

    const publishRide = async (e) => {
        e.preventDefault();
        setOpenModal(true)
    }

    return (
        <>
            {loading && <CustomLoader />}
            <Modal show={openModal} setShow={setOpenModal}>
                <h5 className="text-center" style={{ fontFamily: 'Poppins' }}>Are you sure to Publish Ride from {goingfrom} to {goingto} on {date} with {passenger}</h5>
                <div className="d-flex justify-content-between mt-5">
                    <Button variant="secondary" onClick={() => setOpenModal(false)}>Close</Button>
                    <Button variant="primary" onClick={publishRideHandle}>Book Ride</Button>
                </div>
            </Modal>
            <div data-aos="fade-left" data-aos-duration="1200" className="user_publish_ride_form">
                <h1 className="text-center my-5">Publish Your Ride</h1>
                <form
                    onSubmit={(e) => publishRide(e)}
                >
                    <div className="mb-4 input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Leaving from..."
                            name="Goingfrom"
                            required
                            onChange={(e) => setGoingfrom(e.target.value)}
                            value={goingfrom}
                        />
                    </div>
                    <div className="mb-4 input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Destination..."
                            name="goingto"
                            required
                            onChange={(e) => setGoingto(e.target.value)}
                            value={goingto}
                        />
                    </div>
                    {/* <div className="mb-4 input-group">
                    <select
                        type="text"
                        className="form-control"
                        placeholder="Select Ride status..."
                        name="select"
                        disabled
                    // onChange={(e) => setStatus(e.target.value)}
                    // value={status}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div> */}
                    <div className="row">
                        <div className="passenger-needed my-4 col-7">
                            <span className="me-3">Passenger Needed:</span>
                            <AiOutlinePlusCircle
                                className="icon me-3"
                                onClick={() => setpassenger(passenger + 1)}
                            />
                            <span className="me-3">{passenger}</span>
                            <AiOutlineMinusCircle
                                className="me-3 icon"
                                onClick={() => setpassenger(passenger > 1 && passenger - 1)}
                            />
                        </div>
                        <div className="date col-5 mt-2">
                            <input
                                type="date"
                                name="date"
                                required
                                onChange={(e) => setDate(e.target.value)}
                                value={date}
                            />
                        </div>
                    </div>
                    <label htmlFor="status" className="text-danger
                 mt-3 mb-5">
                        The Ride status will be Inactive untill it does not Approve from Admin
                    </label>
                    <button type="submit" className="btn btn-primary primaryBtn">
                        Publish Ride
                    </button>
                </form>
            </div>
        </>
    );
};

export default PulishRideFormCard;
