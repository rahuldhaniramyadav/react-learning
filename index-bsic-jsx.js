import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: 'heading'}, "Heading of H1");


// React Element
const heading = (<h1 id="hea">
  HH
</h1>);

//React Component 

const Heading = () => (
  <div>
    <h1 id="heading1">Heading H1</h1>
    <span>span tag</span>
  </div>
);

const Heading2 = () => (
  <>
  <h3 id="heading2">Heading H2</h3>
  {/* // component compositions - adding component inside another component */}
  <Heading />
  {/* //how many ways to load the component */}
  {Heading()}
  <Heading></Heading>
  {/*  */}
  <Rahul />
  </>
);

function Rahul() {
  return (
    <span className='rahul'>HHH</span>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<Heading2 />);

// root.render(<Heading1 Heading2 />);