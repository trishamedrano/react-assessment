import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./users/UserList";
import data from "./users/Data/data.json";

function App() {
    const [usersList, setUsersList] = useState(data);

    const addUsersHandler = (
        
        uFirstName,
        uLastName,
        uEmail,
        uEid,
        uBirthDate
    ) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    id: Math.random().toString(),
                    firstName: uFirstName,
                    lastName: uLastName,
                    email: uEmail,
                    eid: uEid,
                    birthDate: uBirthDate,
                },
            ];
        });
    };
    return (
        <div>
            <Form onAddUser={addUsersHandler}></Form>
            <UserList users={usersList}></UserList>
        </div>
    );
}

export default App;
