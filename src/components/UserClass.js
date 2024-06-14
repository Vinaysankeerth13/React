import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child component did mount");
    const data = await fetch("https://api.github.com/users/vinaysankeerth13");
    const json = await data.json();

    this.setState({
        userInfo: json,
    })
    console.log(json);
  }

  render() {
    const { name, location, email } = this.state.userInfo;
    // console.log("Child render");
    return (
      <div className="user-card p-3 font-semibold">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h5>Email: {email}</h5>
      </div>
    );
  }
}

export default UserClass;
