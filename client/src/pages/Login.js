import React, { useEffect, useState } from 'react';
import Form, { Heading, Input, SubmitButton } from '../components/elements/Form';
import { connect } from 'react-redux';
import { login, getUser } from '../actions/auth';
import { setError } from 'actions/alerts';
import Alert from 'components/elements/Alert';
import logo from '../assets/logo.png';

function Login({
    history,
    isAuthenticated,
    user,
    error,
    login,
    getUser,
    setError
}) {

    // Check user isn't logged out
    useEffect(() => {
        if (user !== 'loggedOut') {
            getUser();
        }

    }, [getUser, user, history]);

    // If logged in, redirect to home
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history])

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const { name, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (name === '' || password === '') {
            return setError('Please fill out all fields');
        }

        login(name, password);
    }

    return (
        <div className="auth-card">
            <img className="auth-icon" src={logo} alt="logo" />
            <Heading>Sign into your account</Heading>
            {error && <Alert message={error} type='danger' />}
            <Form onSubmit={onSubmit}>
                <Input placeholder="Username" name="name" id="name" value={name} onChange={onChange} />
                <Input placeholder="Password" name="password" id="password" value={password} onChange={onChange} type="password" />

                <SubmitButton title="Log In" />
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.alerts.error
})

export default connect(mapStateToProps, { login, getUser, setError })(Login);
