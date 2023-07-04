const domContainerElement = document.querySelector('#my-other-react-app');
const reactRoot = ReactDOM.createRoot(domContainerElement);

// var paragraph =
//   <p>Test. 123!</p>;

// console.log(paragraph);

function HelloComponent() {
    return (
        <p className="test-class">
            Hello
            <strong>World!</strong>
            &nbsp;
            3 + 5 = {3 + 5 /* 8 */}

            <form>
                <label htmlFor="your-name">
                    Enter your name:
                </label>
                <input id="your-name" />
            </form>
        </p>
    );
}

reactRoot.render(HelloComponent());

/**
 * Rules of JSX:
 * * There can only be one root element per JSX expression
 * * Any opening tags MUST have a closing tag
 * * Self-closing elements MUST end with />
 * * Multi-line JSX expressions should be wrapped in parenthesis
 * * Regular JS functions / code can be run in {} (curly braces)
 * * In JSX, do not use JS-reserved words...
 * ---> class should be className
 * ---> for should be htmlFor
 */
