import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const { loading } = useContext(AuthConText)

    useEffect(() => {
        fetch('https://learning-platform-server-tan.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    if(loading){
        return <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    return (
        <div>
            {/* <h4>All Category : {categories.length}</h4> */}
            <div>
                {
                    categories.map(category => <p
                        key={category.id}>

                        <Link to={`/courses/${category.id}`}><Button>{category.name}</Button></Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;