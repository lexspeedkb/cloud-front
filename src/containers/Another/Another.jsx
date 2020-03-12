import React, { Fragment } from 'react';

const Another = ({ users, removeUser}) => (
    <Fragment>
        <div>Hi! I'm another component!</div>
        {users.map((user, index) => (
            <div key={user.id}>
                {user.id} : {user.token}
                <button onClick={() => removeUser(user.id)}></button>
            </div>
        ))}
    </Fragment>
);

export default Another;
