import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props); //super(props) is used in the constructor method of a class to call the constructor of the parent class (React.Component)

    // how we can create state variable
    this.state = {
      gitUser: {
        name: "Rahul Dhaniram Yadav",
        location: "Mumbai Maharashtra",
        avatar_url: "https://avatars.githubusercontent.com/u/85781732?v=4"
      }
    }
    console.log(this.props.name + "Child Constructor");
  }

  // At the end componentDidMount in the class so basically it is used for the api call 
  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    //fetching the user profilr from the github
    const data = await fetch("https://api.github.com/users/rahuldhaniramyadav");
    const json = await data.json();

    console.log(json);
    // this.setState({
    //   gitUser: {
    //     name: json.name,
    //     location: json.location,
    //     avatar_url: json.avatar_url
    //   }
    // })
    this.setState({
      gitUser: json
    })

    this.setInter = setInterval(() => {
      console.log("A");
    }, 1000); // it will continus running wheather you move to other component still it is working, so we need to clear the interval
  }

  componentDidUpdate() {
    console.log(this.props.name + "component Did Update");
  }

  //mostly it used to remove the variable or timer which is created by self
  componentWillUnmount() {
    console.log(this.props.name + "Unmount the component");
    clearInterval(this.setInter); // this will create the interval in class we can access the propert nly with this keyword
  }

  render() {
    console.log(this.props.name + "Child Render");
    // const {name, location} = this.props;
    const {name, location, avatar_url} = this.state.gitUser;
    return(
      <div className="class-based">
        <div>
          {/* <div>Count : {count}</div>
          <div>Count2 : {count2}</div> */}
          <button onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}>Increment Count</button>
        </div>
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    )
  }
}

export default UserClass;