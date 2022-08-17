import React, { useState, useEffect } from "react";
import { FaUserAlt, FaEye } from "react-icons/fa";
import Layout from '../../../components/layout';
import axios from "axios";
import Link from 'next/link'
import { toast } from "react-toastify";
import AOS from "aos";

const Index = () => {
    // state to store email and password details
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const history = useHistory();

    // handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            //Wrong way
            const { data } = await axios.post(
                "http://localhost:3001/user/login",
                formData
            );
            if (!data.token && !data.user) {
                toast.error(data, { position: "top-center" });
            } else {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.email === "waliullah@trusticar.com") {
                    history.push("/admin-dashboard");
                } else {
                    history.push("/user-dashboard");
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <Layout>
            <section className="formContainer">
                <div className="container">
                    <div className="Login" data-aos="flip-right" data-aos-duration="1000">
                        <h1>Welcome Back !</h1>
                        <h2 className="text-start my-4">Login to your Account</h2>
                        <form
                        // onSubmit={(e) => handleLogin(e)}
                        >
                            <div className="mb-4 input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your Email..."
                                    name="email"
                                //   onChange={(event) => {
                                //     setFormData({ ...formData, email: event.target.value });
                                //   }}
                                />
                                <FaUserAlt className="loginIon" />
                            </div>
                            <div className="mb-4 input-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password..."
                                    autoComplete="off"
                                    name="password"
                                //   onChange={(event) => {
                                //     setFormData({ ...formData, password: event.target.value });
                                //   }}
                                />
                                <FaEye className="loginIon" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <Link href="#">
                                <p className="forgot">Forgot Password</p>
                            </Link>

                            <button type="submit" className="btn btn-primary primaryBtn">
                                Login
                            </button>
                            <Link href="/auth/register">
                                <p className="alreadyAccount">Not have Account yet ?</p>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
