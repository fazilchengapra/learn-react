const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Contact Page</h1>
      <form action="">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter a Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter a Mail"
        />
        <button className="py-2 px-4 m-2 bg-black font-semibold text-white rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact
