import React from 'react';
import './LightAndDark.css';

const LightAndDark = (props) => {
    const isDark = props.isDark ? true : false;

    return (
        <section className={isDark ? 'dark' : 'light'}>
            <h2>Light and Dark</h2>
            <p>Sample text!</p>
        </section>
    );
};

export default LightAndDark;
