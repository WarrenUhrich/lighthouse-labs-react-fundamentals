console.log('my-babel-react.js is loaded!');

// Choose an element in the web page where our React component should render.
const myRootElement = document.getElementById('my-babel-react-element');
console.log('myRootElement:', myRootElement);

// Want to let React know about this element.
const reactRoot = ReactDOM.createRoot(myRootElement);

// Build a component for our application.
function HelloComponent() {
    // Return a representation of HTML... React.createElement('p',{},'Hello, World!')
    return <p>Hello, World!</p>; 
}

// Render the component in our target element.
reactRoot.render(HelloComponent());
