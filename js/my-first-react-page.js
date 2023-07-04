console.log('Hello, World!');

// Grab an element we want our React app to live in...
const domContainerElement = document.querySelector('#react-app');
console.log(domContainerElement);

// Tell React about this element!
const reactRoot = ReactDOM.createRoot(domContainerElement);

// Build a component from scratch...
class HelloComponent extends React.Component {
    render() {
        return React.createElement(
            'p',
            {},
            'Hello, World!'
        );
    }
}

// Please render our component in the web page.
reactRoot.render(React.createElement(HelloComponent, null, null));
