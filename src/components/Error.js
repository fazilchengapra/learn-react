import { useRouteError } from "react-router-dom";

const Error = () => {
  const tools = "Chrome DevTools";
  console.warn("%s is awesome.", tools);

  return (
    <div>
      <h1>Oopsn something went wrong</h1>
    </div>
  );
};

export default Error;
