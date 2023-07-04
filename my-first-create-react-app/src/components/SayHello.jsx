const SayHello = (props) => {
    const nameFromProps = props.name;
    
    let name;
    if(nameFromProps) {
        name = nameFromProps;
    } else {
        name = 'World';
    }

    return (
        <p>
            Hello, {name}!
            {props.children}
        </p>
    );
};

export default SayHello;
