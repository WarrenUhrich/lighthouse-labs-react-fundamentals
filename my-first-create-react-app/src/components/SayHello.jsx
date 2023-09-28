import React from 'react';

// Components are usually named in PascalCase
const SayHello = (props) => {
    console.log('props:', props);

    // const name = props.name;

    // All components should return JSX
    return (
        <p>Hello, {props.name ? props.name : 'World'}!</p>
    );
};

export default SayHello; // Don't forget to export so you can use this component elsewhere!
