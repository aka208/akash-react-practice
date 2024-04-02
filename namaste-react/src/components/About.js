// import User from "./User";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    // Used to make api call
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <UserClass
          name={"Akash Singh"}
          location={"Pune"}
          email="akashbtw@gmail.com"
        />
        {/* <User /> */}
      </div>
    );
  }
}
export default About;
