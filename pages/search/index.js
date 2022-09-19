import React from "react";
import SearchRide from '../../components/SearchRide'
import Head from "next/head";

import Layout from '../../components/layout';

const Index = () => {
    return (
        <>
            <Head>
                <title>Trusticar -  Search Ride</title>
                <meta name="description" content="TrustiCar Ride search page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <section style={{
                    width: '620px',
                    maxWidth: '100%',
                    margin: '50px auto',
                    textAlign: 'center',
                }}>
                    <SearchRide />
                </section>
            </Layout>
        </>
    )
}

export default Index