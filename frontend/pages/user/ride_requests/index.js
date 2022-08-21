import React from 'react';
import UserLayout from '../../../components/userLayout';
import SearchRide from "../../../components/SearchRide";

const Index = () => {
    return (
        <UserLayout>
            <div className="userProfile-main">
                <div className="container">
                    <SearchRide />
                </div>
            </div>
        </UserLayout>
    );
};

export default Index;
