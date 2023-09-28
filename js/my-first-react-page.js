console.log('my-first-react-page.js is loaded.');

// Grab an element we want our React app to live inside of...
const domContainerElement = document.getElementById('my-react-div');
                         // document.querySelector('#my-react-div');

console.log(domContainerElement);

// Tell React about the element...
const reactRoot = ReactDOM.createRoot(domContainerElement);

// Build a component...
class HelloComponent extends React.Component {
    render() {
        return React.createElement(
            'p', // Which HTML element this should be.
            {},
            'Hello, World!'
        );
    }
}

// Please render the component in the web page...
reactRoot.render(React.createElement(HelloComponent, null, null));
