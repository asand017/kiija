import React from 'react';
import { Link } from 'react-router-dom';

const TopicNavigator = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addition">Addition</Link>
                </li>
                <li>
                    <Link to="/subtraction">Subtraction</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopicNavigator;