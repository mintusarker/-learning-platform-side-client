import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';
import ('./Navber.css')

const Navber = () => {
    const { user, logOut } = useContext(AuthConText)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    console.log(user)
    return (
        <Navbar style={{backgroundColor:'rgb(2,4,24)'}} className='' collapseOnSelect expand="lg" bg="" variant="dark">
            <Container className=''>
                <Navbar.Brand href="" className='text-info nav1 fs-2'><HiAcademicCap className='fs-1'></HiAcademicCap>Learning point</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                   
                   <Nav className="m-auto align-items-center gap-2 justify-content-center d-flex">
                        <Link to="/"><Button className=' text-white' variant="">Home</Button></Link>
                        <Link to="courses"><Button className=' text-white' variant="">Courses</Button></Link>
                        <Link to="questions"><Button className=' text-white' variant="">FAQ</Button></Link>                        
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.email}</span> */}
                                       <Link> <Button onClick={handleLogOut} className=" text-white" style={{ width: '80px',height:'40px' }} variant="">Logout</Button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login"><Button className=' text-white' variant="">Login</Button></Link>
                                        <Link to="/register"><Button className=' text-white' variant="">Register</Button></Link>
                                    </>
                            }
                        </>

                        <>
                            {
                                user?.photoURL ?
                                    <Image className='mt-1'
                                        roundedCircle
                                        style={{ height:'40px' , width:'40px' }}
                                        title={user?.displayName}
                                        src={user?.photoURL}
                                    ></Image>
                                    : <p className='pt-2 text-info' ><FaUser style={{height:'30px'}}></FaUser></p>
                            }
                         </>

                        {/* </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;