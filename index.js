import React from "react";
import ReactDOM from "react-dom/client";

// Coding Assignment:

// ○ Pass attributes into the tag in JSX
// ○ Composition of Component(Add a component inside another)
// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”

const root = ReactDOM.createRoot(document.getElementById('root'));
// const eleWrap =  React.createElement('div', {className: 'title', id: 'divId'}, [
//   React.createElement('h1', {}, 'Header 1'),
//   React.createElement('h2', {}, 'Header 2'),
//   React.createElement('h3', {}, 'Header 3')
// ]);

//Error: Each child in a list should have a unique "key" prop.

// Create the same element using JSX

const eleWrap =  (<div className="title">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
</div>);

console.log(eleWrap); //{$$typeof: Symbol(react.transitional.element), type: 'div', key: null, props: {…}, _owner: null, …}

// Create a functional component of the same with JSX

const ElementWrap =  () => (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

// root.render(<ElementWrap />);

// ● Create a Header Component from scratch using Functional Components with

// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const HeaderComponent = () =>  (
  <header>
    <img src="images/react-logp.png" />
    <input type="search" />
    <img src="" />
  </header>
);

// Error

root.render(<HeaderComponent />);