import React from "react";
import {connect} from 'react-redux';
import {User} from "./user";

export const UsersList = ({users}) => (
    <ul>
        <h1>Список пользователей</h1>
        {
            users.map((item) =>
                <User key={item.id} keyid={item.id} name={item.name} lastName={item.lastName} age={item.age}/>
            )
        }
    </ul>
);

const mapStateToProps = (state) => ({
    users: state.list.list
})
export default connect(
    mapStateToProps
)(UsersList);