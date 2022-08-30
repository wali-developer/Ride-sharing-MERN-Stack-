import React from "react";
import { useEffect, useState } from "react";
import LatestRides from "../../../components/admin/LatestRides";
import AdminLayout from '../../../components/adminLayout';

const Rides = () => {
    const [rides, setRides] = useState([]);
    // useEffect(() => {
    //     const getPublishRides = async () => {
    //         try {
    //             const { data } = await axios.get("http://localhost:3001/publishride");
    //             setRides(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     getPublishRides();
    // }, []);
    return (
        <AdminLayout>
            <div className="col-md-9 userProfile-main">
                <div className="container">
                    <h2>Total Rides</h2>
                    {[0, 1, 2, 3].map((ride, index) => {
                        return (
                            <LatestRides
                                key={index}
                                goingfrom={"Peshawar"}
                                goingto={"Abbottabad"}
                                date={"29 Aug, 2022"}
                                name={"Hammad khan"}
                            />
                        );
                    })}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Rides;
