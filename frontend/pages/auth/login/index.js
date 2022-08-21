import React, { useState, useEffect } from "react";
import { FaUserAlt, FaEye } from "react-icons/fa";
import Layout from '../../../components/layout';
import Link from 'next/link';
import API from "../../../api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AOS from "aos";
import axios from 'axios';

const Index = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    // handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/user/login", formData);
            if (!data.token && !data.user) {
                toast.error(data, { position: "top-center" });
            } else {
                alert(data.token);
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.email === "waliullah@trusticar.com") {
                    router.push("/admin-dashboard");
                } else {
                    router.push("/user/dashboard");
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
                            onSubmit={(e) => handleLogin(e)}
                        >
                            <div className="mb-4 input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your Email..."
                                    name="email"
                                    onChange={(event) => {
                                        setFormData({ ...formData, email: event.target.value });
                                    }}
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
                                    onChange={(event) => {
                                        setFormData({ ...formData, password: event.target.value });
                                    }}
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
