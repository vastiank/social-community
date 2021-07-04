import React from 'react';
import UsersComponent from '../components/Users/UsersComponent';

const Users = (props) => {
    return (
        <div className="body">
            <div className="flexCenter">
                <UsersComponent props={props} />
            </div>
        </div>
    );
}

export default Users;
