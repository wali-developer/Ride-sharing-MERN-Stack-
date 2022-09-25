import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import { useRouter } from 'next/router';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import RideCard from '../../../components/RideCard';

const Index = ({ availableRides, userFormData }) => {
    console.log(availableRides, userFormData);
    const router = useRouter();
    // const [availableRides, setAvailableRides] = useState(JSON.parse(router?.query?.availableRides));
    // const [userFormData, setUserFormData] = useState(JSON.parse(router?.query?.userFormData))

    console.log("Search data", userFormData);
    console.log("Available Rides", availableRides)
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     setAvailableRides(JSON.parse(router.query.availableRides));
    //     console.log(availableRides);
    // }, []);

    useEffect(() => {
        !userFormData && router.push('/search');
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
                                    {userFormData?.goingFrom} <AiOutlineArrowRight className="arrow" />{" "}
                                    {userFormData?.goingTo}
                                </h5>
                                <span>
                                    {userFormData?.date}, {userFormData?.passengerNeeded} passenger
                                </span>
                            </div>
                        </div>
                        <div className="availableRides">
                            <h4>{userFormData?.date}</h4>
                            <p>
                                {userFormData?.goingFrom} <AiOutlineArrowRight className="arrow" />
                                {userFormData?.goingTo}
                            </p>
                            <span> {availableRides?.length} rides available</span>
                        </div>
                        {availableRides?.map((ride, index) => {
                            return (
                                <div key={index}>
                                    <RideCard
                                        rideData={ride}
                                        userFormData={userFormData}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Index;

export const getServerSideProps = (context) => {
    const availableRides = context?.query?.availableRides;
    const userFormData = context?.query?.userFormData;
    return {
        props: {
            availableRides: JSON.parse(availableRides),
            userFormData: JSON.parse(userFormData)
        }
    }
}