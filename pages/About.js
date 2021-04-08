export default function About() {
  return (
    <div>
      <div className="h-96 md:h-screen bg-pink-100 bg-center md:bg-bottom bg-cover bg-header-pattern p-10 flex justify-end items-end md:items-center text-right">
        <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-pink-400 font-extrabold">The Backery</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-5 items-center p-5 h-screen bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-600">
        <div className="h-20 border bg-blue-200 w-full flex justify-center items-center">
          something
        </div>
        <div className="h-20 border bg-blue-200 w-full flex justify-center items-center">
          sdfomsdfsd
        </div>
        <div className="h-20 border bg-blue-200 w-full flex justify-center items-center">
          sfdfsdsdfd
        </div>
        <div className="h-20 border bg-blue-200 w-full flex justify-center items-center">
          gffgsdsdfsd
        </div>
      </div>
    </div>
  );
}