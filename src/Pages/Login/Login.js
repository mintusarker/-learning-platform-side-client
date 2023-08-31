import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthConText } from '../../Context/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, SignIn, githubLogin, setLoading } = useContext(AuthConText);
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                if (user) {
                    navigate(from, { replace: true });
                }
                toast.success('User Login successfully')
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user) {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => console.error(error));
    }


    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container-fluid">
            <form
                onSubmit={handleSubmit}
                id="form"
                className="mx-auto login-form">
                <h4 className="text-center">Login</h4>
                <div className="mb-3 mt-5">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p className='text-warning'>{error}</p>

                <button type="submit"  id="btn-primary" className="btn  mt-3 text-uppercase">Login</button>

                <button onClick={handleGoogleSignIn} id="btn-primary" className="btn mt-3 text-uppercase">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
                <button onClick={handleGithubSignIn} id="btn-primary" className="btn mt-3 text-uppercase">
                    <FaGithub></FaGithub> Login With Github
                </button>
                <p className='mt-4 text-center'>New to here ? please <Link className='text-white' to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;


