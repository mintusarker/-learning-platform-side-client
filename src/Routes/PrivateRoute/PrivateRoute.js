import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthConText);
    const location = useLocation();

    if(loading){
        return  <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>// <Spinner animation="border" variant="success" />
    }
    if(!user){
        return <Navigate to= "/login" state ={{from: location}} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;