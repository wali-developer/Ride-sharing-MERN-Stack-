import React from 'react';
import Aside from '../../components/userLayout/Aside';

export default function Index({ children }) {
    return (
        <section className="user-dashboard">
            <div className="container">
                <div className="row userDashboard-row">
                    <Aside />
                    <main className='col-md-3 sidebar'>{children}</main>
                </div>
            </div>
        </section>
    );
};
