import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "Pune",
        email: "akashbtw@gmail.com",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/aka208");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Child Component did update");
  }

  componentWillUnmount() {
    console.log("Child Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Email: akashbtw@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
