import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";

import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthConText } from '../../Context/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('')
    const {providerLogin, SignIn} = useContext(AuthConText)
    const googleProvider = new GoogleAuthProvider();


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        SignIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
            setError('');
          })
          .catch(error => {
            console.error(error);
            setError(error.message);
        })
}

    const handleGoogleSignIn = () => {
          providerLogin(googleProvider)
          .then(result => {
            const user = result.user
            console.log(user)
          })
          .catch(error => console.error(error));
    }


    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            
            <ButtonGroup vertical>
            <Button className='mb-2 rounded' variant="outline-info" type="submit">
                Login
            </Button>

            <Form.Text className="text-danger">
               {error}
            </Form.Text>

            <Button onClick={handleGoogleSignIn} className='mb-2 rounded' variant="outline-dark" type="submit">
               <FaGoogle></FaGoogle> Login With Google
            </Button>
            <Button className='mb-2 rounded' variant="outline-primary" type="submit">
              <FaGithub></FaGithub>  Login With Github
            </Button>

            </ButtonGroup>

            
            <Form.Text className="text-danger">
            </Form.Text>
        </Form>
    );
};

export default Login;