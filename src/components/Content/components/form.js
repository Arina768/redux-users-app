import React from "react";
import {Link} from "react-router-dom";



export const Form = ({handleChange, name, lastName, age, handleSave, title}) => (
    <section className='center'>
        <input style={{'display': 'block'}} onChange={handleChange(name)} placeholder={'Имя'}/>
        <input style={{'display': 'block'}} onChange={handleChange(lastName)} placeholder={'Фамилия'}/>
        <input style={{'display': 'block'}} onChange={handleChange(age)} placeholder={'Возраст'}/>
        <button onClick={handleSave}>{title}</button>
        <Link to="/list" className='back'>Вернуться к списку пользователей</Link>
    </section>
);