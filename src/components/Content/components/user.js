import React from "react";
import {Link} from "react-router-dom";


export const User = ({name, lastName, age, keyid}) => (
    <Link to={{
        pathname: '/changeinfo',
        keyid: {keyid}
    }}>
        <li> {name} {lastName} {age} года </li>
    </Link>
);

