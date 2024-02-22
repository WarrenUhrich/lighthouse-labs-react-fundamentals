console.log('my-second-react.js is running');

// Get the element(s) in which we want our React app to live.
const reactContainerElement = document.getElementById('root');
console.log('reactContainerElement', reactContainerElement);

// // Tell React about this element.
const reactRoot = ReactDOM.createRoot(reactContainerElement);

// // Build a Component.
function HelloComponent() {
    return (
        <React.Fragment>
            <p>
                Hello, World!
            </p>
            <p>
                3 + 567 = {3 + 567}
            </p>
        </React.Fragment>
    );
}

// // Please render the component in the web page...
reactRoot.render(React.createElement(HelloComponent, null, null));
