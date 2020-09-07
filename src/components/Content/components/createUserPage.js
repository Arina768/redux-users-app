import React from "react";
import {useState} from 'react';

import {connect} from 'react-redux';
import {saveUserAction} from '../../../actions';

import {v4 as uuidv4} from 'uuid';
import {Form} from './form';


export const CreateUser = ({saveUser}) => {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        age: '',
        id: ''
    });

    const handleChange = (data) => ({target}) => {
        setUser({
            ...user,
            [data]: target.value,
            id: uuidv4()
        })
    };

    const handleSave = () => {
        saveUser(user);
    }

    return (
        <>
            <h1 className='title'>Новый пользователь</h1>
            <Form handleChange={handleChange} name={'name'} lastName={'lastName'} age={'age'} handleSave={handleSave}
                  title={'Сохранить пользователя'}/>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    saveUser: (user) => dispatch(saveUserAction(user)),
});

export default connect(
    null,
    mapDispatchToProps
)(CreateUser);
