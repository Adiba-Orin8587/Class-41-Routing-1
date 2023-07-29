/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./User.css"
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, username } = user
    return (
        <div className='container  my-5'>
            <div className="col">
                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" className="card-img-top" alt="..." />
                    <div className="card-body px-5 fw-semibold mb-3 border mx-5 ">
                        <h5 className="card-title fw-bold text-center">Id : {id}</h5>
                        <p className="card-text">Name : {name}</p>
                        <p className="card-text">Email : {email}</p>
                        <p className="card-text">Username : {username}</p>
                    </div>
                    <button className='btn btn-outline-secondary py-2 mt-3'> <Link className='link' to={`/user/${id}`}>Show Details</Link></button>
                </div>
            </div>
        </div>

    );
};

export default User;