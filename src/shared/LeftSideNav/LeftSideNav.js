import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learning-platform-server-tan.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
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