function Button({ colour, rounded, children, icon, size }) {
  return (
    <button
      className={`my-2 mt-2 md:h-20 md:w-72 py-2 px-5 bg-${colour}-500 md:text-3xl text-gray-50 hover:bg-${colour}-400 ${
        rounded ? "rounded" : ""
      }`}
    >
      {children}
    </button>
  );
}
function Button2({ children }) {
  return (
    <button className="py-3 px-5 bg-blue-400 text-gray-50 hover:bg-blue-200">
      {children}
    </button>
  );
}

export { Button, Button2 };
//export multiple components like this
