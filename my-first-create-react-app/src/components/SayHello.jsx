import React from 'react';

const SayHello = (props) => { // Props is always an object, think key-value pairs!
    console.log('props', props); // Web dev console log!

    return (
        <p>
            Hello, {props.name}!
            You go to {props.school} for school.
        </p>
    );
};

export default SayHello;
