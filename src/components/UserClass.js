import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props); //super(props) is used in the constructor method of a class to call the constructor of the parent class (React.Component)
  }
  render() {
    const {name, location} = this.props;
    return(
      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    )
  }
}

export default UserClass;