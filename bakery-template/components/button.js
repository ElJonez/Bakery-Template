function Button() {
  return (
    <button className="py-3 px-5 bg-red-500 text-black hover:bg-red-400">
      Button
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