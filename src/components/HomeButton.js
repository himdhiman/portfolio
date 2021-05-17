import React from 'react';
import { Link } from 'react-router-dom';

function HomeButton() {
    return (
        <div>
            <Link to = "/">
                <button className = "big circular ui icon button">
                    <i className = "icon home"></i>
                </button>
            </Link>
        </div>
    )
}

export default HomeButton;
