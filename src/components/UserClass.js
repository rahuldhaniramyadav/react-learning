import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props); //super(props) is used in the constructor method of a class to call the constructor of the parent class (React.Component)

    // how we can create state variable
    this.state = {
      count: 0,
      count2: 1,
    }
    console.log("Child Constructor");
  }

  // At the end componentDidMount in the class so basically it is used for the api call 
  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render");
    const {name, location} = this.props;
    const {count, count2} = this.state;
    return(
      <div className="class-based">
        <div>
          <div>Count : {count}</div>
          <div>Count2 : {count2}</div>
          <button onClick={() => {
            this.setState({
              count: this.state.count+1
            })
          }}>Increment Count</button>
        </div>
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    )
  }
}

export default UserClass;