const heading = React.createElement("h1", {}, "Hello React");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    const root = ReactDOM.createRoot(document.querySelector("body"));
    root.render(heading);
    console.log(root, heading);