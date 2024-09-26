import { useEffect, useState } from "react";

const User = ({ name, age, contact }) => {
  useEffect(() => {
    console.log('useEffect');
  },[])
  const [count1] = useState(0);
  const [count2] = useState(1);
  console.log('render');
  
  return (
    <div className="user-card">
      <h1>Count1 : {count1}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
