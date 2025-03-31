import { Component } from "react"

class NewUserClass extends Component {
  constructor() {
    super();
    console.log("Other component constructor");
  }

  componentDidMount() {
    console.log("Other component componentDidMount");
  }

  render() {
    console.log("Other component render");
    return (
      <div>Another component</div>
    )
  }
}

export default NewUserClass;