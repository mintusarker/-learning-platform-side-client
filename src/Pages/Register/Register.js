import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';
import '../Login/Login.css'


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthConText)
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                toast.success('User registered successfully')
                navigate('/');
                handleUpdateUserProfile(name);

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (

        <div className="container-fluid">
            <form
                onSubmit={handleSubmit}
                id='form'
                className="mx-auto">
                <h4 className="text-center">Register</h4>
                <div className="mt-4">
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="my-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p>{error}</p>

                <button type="submit" id="btn-primary" className="btn mt-3 text-uppercase">Register</button>

                <p className='mt-3'>If you have already registered. Please <Link className='text-white' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;