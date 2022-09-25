import axios from "axios";
import React, { useEffect, useState } from "react";
import UserLayout from '../../../components/userLayout';
import { toast } from "react-toastify";
import API from '../../../api';

const UserProfileEdit = () => {
    const [user, setUser] = useState({
        id: "",
        fullName: "",
        userName: "",
        email: "",
        password: "",
        userType: "",
    });
    const [file, setFile] = useState();

    // update profile Handler
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.patch(
                `http://localhost:3001/user/${user.id}`,
                user
            );
            toast.success(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(
            {
                ...user,
                id: user?._id,
                fullName: user?.fullName,
                userName: user?.userName,
                email: user?.email,
                password: user?.password,
                userType: user?.userType
            }
        )
    }, [])
    return (
        <UserLayout>
            <div className="col-md-9 userProfile-main py-5">
                <div className="container">
                    <h2>Profile</h2>
                    <form
                        className="user-Details"
                        onSubmit={(e) => handleUpdate(e)}
                    >
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="form-control"
                                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                                value={user.fullName}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                className="form-control"
                                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                value={user.userName}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                value={user.email}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                disabled
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                value={user.password}
                            />
                        </div>
                        <div className="mb-3 mt-4">
                            <label>User type</label>
                            <select
                                className="mb-4 form-select"
                                aria-label="Default select example"
                                placeholder="User type"
                                name="userType"
                                onChange={(e) => setUser({ ...user, userType: e.target.value })}
                                value={user.userType}
                            >
                                <option value="Passenger">Passenger</option>
                                <option value="Driver">Driver</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="file">
                                Select Your Image
                            </label>
                            <input
                                type="file"
                                // name="image"
                                className="form-control"
                                onChange={(e) => {
                                    const [file] = e.target.files[0];
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </div>
                        <button className="btn btn-primary">Update Profile</button>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserProfileEdit;
