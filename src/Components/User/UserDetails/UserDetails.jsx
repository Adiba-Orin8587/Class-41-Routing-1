/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userId = useLoaderData()
    return (
        <div>
            <h2 className='pt-5 px-5 mx-5 mt-5 text-center'>Show user details</h2>
            <div className="col-11 m-5 pb-5 px-5 rounded">
                <div className="card mb-5">
                    <div className="card-body px-5 fw-semibold m-5 fs-6 text-center text-secondary">
                        <h5 className="card-title fw-bold text-center">Id : {userId.id}</h5>
                        <p className="card-text">Name : {userId.name}</p>
                        <p className="card-text">Email : {userId.email}</p>
                        <p className="card-text">Username : {userId.username}</p>
                        <p className="card-text">Address : {userId.address.street}</p>
                        <p className="card-text">Phone: {userId.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;