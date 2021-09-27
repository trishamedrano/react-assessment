import React from "react";
import "./UserList.css";

const UserList = (props) => {
    return (
        <div className="wrapper">
            <div className="users">
                <table>
                    <thead>
                        <tr>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email </th>
                            <th> EID </th>
                            <th> Birthdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((user) => (
                            <tr key={user.id}>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.email}</td>
                                <td> {user.eid}</td>
                                <td>{user.birthDate} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;


