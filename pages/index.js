import Box from "../components/Box"; //import default
import { Button, Button2 } from "../components/Button"; //import multiepl from 1 file
export default function Home() {
  return (
    <div>
      <div className="h-96 md:h-screen bg-pink-100 bg-center md:bg-bottom bg-cover bg-header-pattern p-10 flex justify-end items-end md:items-center pb-10 text-right">
        <div className="w-1/2 h-1/2 flex flex-col justify-center items-center border">
          <h1 className="text-5xl text-pink-400 font-extrabold">The Backery</h1>
          <Button colour="pink" rounded>
            Menu
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-5 items-center p-5 h-screen bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-600">
        <marquee>Marquee</marquee>
        <h1 className="text-5xl font-bold">Welcome to The Backery</h1>
        <Box />
        {/* components without children close off in a single tag */}
        <Button2>children go inside of component tags</Button2>
      </div>
    </div>
  );
}
