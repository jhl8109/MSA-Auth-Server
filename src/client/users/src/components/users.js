import React, { useEffect, useState } from 'react';
import {axios} from 'axios';

const UserList = (props) => {
    console.log(props)
    let users = props.userlist
    console.log(typeof users);
    return (
        <div>{users.map(user => {
            return (<div>
                {user.email} - {user.name} - {user.userId}
            </div>) 
        })}
        </div>
    );
};

const Users = ({props}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let access_token = localStorage.getItem('access_token')

        fetch("http://localhost:8000/user-service/users", {
            headers : {
                'Authorization' : access_token,
            }
        })
            .then(response => response.json())
            .then(result => {
                setUsers(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            email - name - userId
            <UserList userlist={users}/>
        </div>
    )
}

export default Users;