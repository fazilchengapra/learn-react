import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parant contructor");
  }

  componentDidMount() {
    // console.log("parant componentDidMount");
  }

  render() {
    // console.log("parant render");

    return (
      <div className="">
        <h1>About Page</h1>
        <p>hard work broo you one day achive a in google software developer</p>
        <User name={"Fazil (Function)"} age={18} contact={"fazil@gmail.com"} />
        {/* <UserClass name={"First"} age={18} contact={"fazil@gmail.com"} /> */}
      </div>
    );
  }
}

export default About;
