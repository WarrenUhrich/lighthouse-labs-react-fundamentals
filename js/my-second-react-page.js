console.log('my-second-react-page.js is loaded!');

// Target our DOM element we want React to live in...
const domContainerElement = document.querySelector('#second-react-div');

// Let React know about this element...
const reactRoot = ReactDOM.createRoot(domContainerElement);

// Function-based Component
function HelloComponent() {
    return (
        <React.Fragment>
            <p className="abc">
                Hello,
                <strong>World!</strong>

                <form>
                    <label htmlFor="first-name">First Name:</label>
                    <input id="first-name"/>
                </form>
            </p>
            <p>
                5 + 78799 = {5+78799}
            </p>
        </React.Fragment>
    );
}

// Render our component in the web page...
reactRoot.render(HelloComponent());

/**
 * Rules of JSX:
 * * Do not use JS-reserved words...
 * ---> class should be className
 * ---> for should be htmlFor
 * * There can only be one root element per JSX expression
 * * Any opening tags MUST have a closing tag
 * * Self-closing element MUST end with />
 * * Multi-line JSX expressions should be wrapped in parentheses
 * * Regular JS functions and expression can be run in {} (curly braces)
 */
