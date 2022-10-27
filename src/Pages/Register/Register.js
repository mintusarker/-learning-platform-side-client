import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile} = useContext(AuthConText)
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Form onSubmit={handleSubmit} className="w-50 pt-5 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p><small>If you have already registered. Please Login <Link to = '/login'>Login</Link></small></p>
        </Form>
    );
};

export default Register;