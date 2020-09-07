import React from "react";

import {connect} from 'react-redux';
import {changeUserAction} from '../../../actions';

import {Form} from './form';

// классовый компонент т.к. нужно обратиться к location

export class ChangeUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            age: '',
            id: this.props.location.keyid.keyid
        }
    }

    handleChange = (data) => ({target}) => {
        this.setState({
            [data]: target.value
        })
    }

    handleSave = () => {
        this.props.changeUser(this.state, this.props.location.keyid.keyid)
    }

    render() {
        return (
            <>
                <h1 className='changePageTitle'>Редактирование пользователя</h1>
                <Form handleChange={this.handleChange} name={'name'} lastName={'lastName'} age={'age'}
                      handleSave={this.handleSave} title={'Изменить пользователя'}/>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeUser: (user, id) => dispatch(changeUserAction(user, id)),
});

export default connect(
    null,
    mapDispatchToProps
)(ChangeUser);