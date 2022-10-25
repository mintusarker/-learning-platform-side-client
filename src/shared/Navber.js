import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser} from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AuthConText } from '../Context/UserContext';

const Navber = () => {
    const { user, logOut} = useContext(AuthConText)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
   }

    console.log(user)
    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='text-info me-4'><HiAcademicCap className='w-25 h-25'></HiAcademicCap> Learning point</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="courses"><Button className='me-2 m-1' variant="outline-light">courses</Button></Link>
                        <Link to="faq"><Button className='me-2 m-1' variant="outline-light">FAQ</Button></Link>
                        <Link to="blogs"><Button className='me-2 m-1' variant="outline-light">Blog</Button></Link>
                        <Link to="toggle"><Button className='me-2 m-1' variant="outline-light">Toggle theme</Button></Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                             user?.uid ?
                                    <>
                                        <span>{user?.email}</span>
                                        <Button onClick={handleLogOut} className="me-2" variant="outline-light">Logout</Button>
                                    </>
                                    :
                                    <>
                                     <Link to="/login"><Button className='me-2 m-1' variant="outline-light">Login</Button></Link>
                                     <Link to="/register"><Button className='me-2 m-1' variant="outline-light">Register</Button></Link>
                                   </>
                            }
                        </>

                        <Link to="/profile">
                                {
                                    user?.photoURL ?
                                    <Image
                                    roundedCircle
                                    style={{height:'30px'}}
                                    src={user?.photoURL}
                                    ></Image>
                                    : <p className='pt-2'><FaUser></FaUser></p>
                                }
                            </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;