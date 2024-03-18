console.log('my-first-react.js is loaded!');

// Choose an element in the web page where our React component should render.
const myHTMLElement = document.getElementById('react-app-here');
console.log('myHTMLElement:', myHTMLElement);

// Want to let React know about this element.
const reactRoot = ReactDOM.createRoot(myHTMLElement);

// Build a component for our application.
class HelloComponent extends React.Component {
    render() {
        // Any component render should return a representation of the expected HTML.
        return React.createElement(
            'p', // Name of the HTML element
            {},  // Any options
            'Hello, World!' // Text/children that should appear in the HTML element
        );
    }
}

// Render the component in our target element.
reactRoot.render(React.createElement(HelloComponent, null, null));
