import React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => (
    <div>
        <nav>
            <Link to="/">Создать пользователя</Link>
            <Link to="/list">Список</Link>
        </nav>
    </div>
);

