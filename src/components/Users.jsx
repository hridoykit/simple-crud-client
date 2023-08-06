import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>total users: {users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.name}</p>)
            }
        </div>
    );
};

export default Users;