function SayHello(props) {
    return <p>{props.greeting || 'Hello, '}{props.name}!</p>;
}

export default SayHello;
