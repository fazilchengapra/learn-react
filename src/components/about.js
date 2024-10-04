import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./UserContext";

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
      <div className="p-5">
        <h1 className="text-center font-bold text-lg">About Page</h1>
        <UserContext.Consumer>
          {({ logginuser }) => <h1>User: {logginuser}</h1>}
        </UserContext.Consumer>
        <p className="text-center text-lg text-green-600 font-bold">
          hard work broo you one day achive a in google software developer🚀
        </p>
        <User />
        {/* <UserClass name={"First"} age={18} contact={"fazil@gmail.com"} /> */}
      </div>
    );
  }
}

export default About;
