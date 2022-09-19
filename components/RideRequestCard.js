import axios from "axios";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

const RideRequestCard = ({
    id,
    requestStatus,
    passenger,
    rideId,
}) => {
    const [rejectionMessage, setRejectionMessage] = useState("");

    // handle approve ride request
    const handleApprove = async () => {
        try {
            await axios.patch(`http://localhost:3001/publishride/${rideId}`, {
                passenger: passenger - passenger,
            });
            const { data } = await axios.patch(
                `http://localhost:3001/requestride/${id}`,
                {
                    requestStatus: "Accepted",
                }
            );
            if (data) {
                toast.success("You have accepted the ride request");
            } else {
                toast(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // handle disapprove ride request
    const handleDisapprove = async () => {
        try {
            const { data } = await axios.patch(
                `http://localhost:3001/requestride/${id}`,
                {
                    requestStatus: "Rejected",
                    rejectionReason: rejectionMessage,
                }
            );
            if (data) {
                alert("You have rejected the ride request");
            } else {
                alert(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="card text-center mb-4">
                <div className="card-header" style={{ textAlign: "left" }}>
                    Booking Ride Request from {"Swat"} to {"Kalam"}
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {"Swat"} <BsArrowRight /> {"Kalam"}
                    </h5>
                    <p className="card-text">
                        User with email <b> {"example@gmail.com"} </b> has requested to book your{" "}
                        <b>{"Active"}</b> ride with <b>{3}</b> passengers
                        on {"20 Aug, 2022"}, you can either Approve or
                        Disapprove
                    </p>
                    <div className="d-flex justify-content-between">
                        <button className="btn primaryBtn">
                            Approve
                        </button>
                        <button
                            type="button"
                            href="/"
                            className="btn primaryBtn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Disapprove
                        </button>
                    </div>
                    {/* Rejection modal */}
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Rejection Reason
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Tell the Request sender why you are rejected his ride request "
                                    //   onChange={(e) => setRejectionMessage(e.target.value)}
                                    //   value={rejectionMessage}
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn primaryBtn"
                                    >
                                        Dissapprove Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">{"21 Aug, 2022"}</div>
            </div>
        </>
    );
};

export default RideRequestCard;
