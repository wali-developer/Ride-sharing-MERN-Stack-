import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../../components/UserCard";
import { toast } from "react-toastify";
import AdminLayout from '../../../components/adminLayout';

const Riders = () => {
    const [riders, setRiders] = useState([]);
    const [search, setSearch] = useState("");
    const [searhUser, setSearhUser] = useState([]);

    //   useEffect(() => {
    //     const getDrivers = async () => {
    //       try {
    //         const { data } = await axios.get("http://localhost:3001/user/register");
    //         setRiders(data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    //     getDrivers();
    //   });

    const handleSearch = (e) => {
        e.preventDefault();

        const filterUser = riders.filter((user) => user.fullName === search);
        console.log(filterUser);
        if (filterUser.length === 0) {
            toast.error("No user found");
        } else {
            setSearhUser(filterUser);
        }
    };
    return (
        <AdminLayout>
            <div className="userProfile-main px-5">
                <div className="">
                    <h2 className="mb-4">Riders</h2>
                    <form
                    // onSubmit={(e) => handleSearch(e)}
                    >
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="Search"
                                placeholder="Search for Rider / User..."
                            //   onChange={(e) => setSearch(e.target.value)}
                            //   value={search}
                            />
                        </div>
                        <div className=" my-2">
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-md-7">
                            {[0, 1].map((user, index) => {
                                return (
                                    <UserCard
                                        key={index}
                                        fullName={"Wali Ullah"}
                                        email={"waliullah@gmail.com"}
                                        userType={"Passenger"}
                                        date={"23 Aug, 2022"}
                                    />
                                );
                            })}
                        </div>
                        <div className="col-md-5 mx-auto">
                            {[0, 1, 2, 3].map((driver, index) => {
                                return (
                                    <div className="card mb-4" key={index}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                                    className="img-fluid rounded-start"
                                                    alt="user"
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Wali Ullah</h5>
                                                    <p className="card-text">card text</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Riders;
