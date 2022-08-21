import React, { useEffect } from 'react';
import Layout from '../../../components/layout';
import { useRouter, withRouter } from 'next/router';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import RideCard from '../../../components/RideCard';

const Index = (props) => {
    useEffect(() => {
        const { query } = props.router;
    }, [])


    return (
        <Layout>
            <section className="search">
                <div className="container">
                    <div className="searchContent">
                        <div className="searchedCities d-flex flex-row justify-content-start align-items-center">
                            <div>
                                <BsSearch className="searchIcon" />
                            </div>
                            <div>
                                <h5>
                                    {"Peshawar"} <AiOutlineArrowRight className="arrow" />{" "}
                                    {"Islamabad"}
                                </h5>
                                <span>
                                    {"23 Aug, 2022"}, {"3"} passenger
                                </span>
                            </div>
                        </div>
                        <div className="availableRides">
                            <h4>{"23 Aug, 2022"}</h4>
                            <p>
                                {"Peshawar"} <AiOutlineArrowRight className="arrow" />
                                {"Islamabad"}
                            </p>
                            <span> {4} rides available</span>
                        </div>
                        {[0, 1, 2, 3, 4].map((publishRide, index) => {
                            return (
                                <RideCard key={index} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default withRouter(Index);