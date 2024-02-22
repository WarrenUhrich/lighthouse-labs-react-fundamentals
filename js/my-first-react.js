console.log('my-first-react.js is running');

// Get the element(s) in which we want our React app to live.
const reactContainerElement = document.getElementById('my-react-element');
console.log('reactContainerElement', reactContainerElement);

// Tell React about this element.
const reactRoot = ReactDOM.createRoot(reactContainerElement);

// Build a Component.
class HelloComponent extends React.Component {
    render() {
        return React.createElement(
            'p', // Which HTML element should this component be?
            {},
            'Hello, World!' // Text inside of our element.
        );
    }
}

// Please render the component in the web page...
reactRoot.render(React.createElement(HelloComponent, null, null));
