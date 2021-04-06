import Box from "../components/Box"; //import default
import { Button, Button2 } from "../components/Button"; //import multiepl from 1 file
export default function Home() {
  return (
    <div>
      <div className="h-96 bg-pink-100 bg-cover bg-center md:bg-contain bg-header-pattern p-6 flex justify-end items-end">
        <div className="pb-5">
          <h1 className="text-3xl text-pink-400 font-extrabold">The Backery</h1>
          <Button colour="pink" rounded>
            Menu
          </Button>
        </div>
        <marquee>Marquee</marquee>
      </div>
      <div className="flex flex-col justify-center space-y-5 items-center p-5 h-screen bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-600">
        <h1 className="text-5xl font-bold">Welcome to The Backery</h1>
        <Box />
        {/* components without children close off in a single tag */}
        <Button2>children go inside of component tags</Button2>
      </div>
    </div>
  );
}