import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + "chaild constructor");

    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log('component didmount');
    
  }

  componentDidUpdate(){
    console.log('component did update');
    
  }

  componentWillUnmount(){
    console.log('component unmount');
    
  }

  render() {
    console.log('render');
    
    const { name, age, contact } = this.props;
    const { count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count1 : {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increse Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
