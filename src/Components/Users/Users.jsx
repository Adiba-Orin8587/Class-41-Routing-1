/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div className='container'>
            <h2 className='py-5'>There are {users.length} users.</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 user">
                {
                    users.map(user => <User
                        key={user?.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;