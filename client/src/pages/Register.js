import React, { useState, useEffect } from 'react';

import Alert from 'components/elements/Alert';
import Form, { Heading, Input, SubmitButton } from '../components/elements/Form';

import { connect } from 'react-redux';
import { register, getUser } from 'actions/auth';
import { setError } from 'actions/alerts';
import logo from '../assets/logo.png';


function Register({
    history,
    register,
    getUser,
    setError,
    isAuthenticated,
    error
}) {

    // Check if there's a user to load
    useEffect(() => {
        getUser();

    }, [getUser]);

    // If authenticated, redirect to home
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history])

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        password2: ''
    });

    const { name, password, password2 } = formData;

    // OnChange
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // OnSubmit
    const onSubmit = async e => {
        e.preventDefault();

        if (name === '' || password === '' || password2 === '') {
            return setError('Please fill out all fields');
        }

        if (password !== password2) {
            return setError('Passwords don\'t match');
        }

        register(name, password);
        setFormData({ name: '', password: '', password2: '' })
    }


    return (
        <div className="auth-card">
            <img className="auth-icon" src={logo} alt="logo" />
            <Heading>Create a new account</Heading>
            {error && <Alert message={error} type='danger' />}
            <Form onSubmit={onSubmit}>
                <Input name="name" id="name" placeholder="Username" value={name} onChange={onChange} />
                <Input name="password" id="password" placeholder="Password" value={password} onChange={onChange} type='password' />
                <Input name="password2" id="password2" placeholder="Confirm Password" value={password2} onChange={onChange} type='password' />
                <SubmitButton title="Sign Up" />
            </Form>
        </div>

    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.alerts.error
})

export default connect(mapStateToProps, { register, getUser, setError })(Register);

