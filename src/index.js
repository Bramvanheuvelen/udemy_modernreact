import React from 'react';
import ReactDom from 'react-dom'

// Create a new component. This component should produce
// some HTML
const App = () => {
    return <div>Hi!</div>
}

//take this components generated html, and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))