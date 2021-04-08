import Box from "../components/Box"; //import default
import { Button, Button2 } from "../components/Button"; //import multiepl from 1 file
import Card from "../components/Card";
export default function Home() {
  const items = [
    {
      _id: "606e193ba0ea8e8223b65b9c",
      price: "$2,717.25",
      image: "http://placehold.it/32x32",
      name: "Boyer Dixon",
      description:
        "Ullamco Lorem proident quis sit elit ullamco enim irure. Cillum reprehenderit et exercitation duis consequat eu. Ut tempor consectetur dolore sunt nostrud nulla deserunt dolore duis dolore magna. Aliqua aliquip nulla dolor veniam minim qui dolor duis. Aute incididunt magna aliquip laboris consectetur magna. Dolore Lorem dolore aute id irure consectetur id deserunt fugiat officia labore aliqua dolore cillum. Consectetur officia in est irure ad duis ea aute in consectetur Lorem cupidatat.\r\n",
    },
    {
      _id: "606e193b5e2c09653d3fd024",
      price: "$3,715.04",
      image: "http://placehold.it/32x32",
      name: "Abbott Grant",
      description:
        "Elit officia id minim ex. Lorem voluptate elit et esse non do. Laboris ea aute tempor aliqua labore consectetur cupidatat sit.\r\n",
    },
    {
      _id: "606e193b716db0055999111d",
      price: "$2,588.71",
      image: "http://placehold.it/32x32",
      name: "Perry Osborn",
      description:
        "Enim est elit eu id esse magna aute. Dolore deserunt ut consectetur commodo. Ipsum pariatur consequat aute deserunt deserunt occaecat ullamco adipisicing do elit cupidatat eu aliqua. Culpa tempor amet ex elit ex ipsum elit anim consequat officia et est. Aute non dolore consequat consectetur cillum voluptate dolore.\r\n",
    },
    {
      _id: "606e193bca404b374f47d83a",
      price: "$2,606.17",
      image: "http://placehold.it/32x32",
      name: "Hazel Frank",
      description:
        "Do ut reprehenderit irure aute ea. Esse minim eu non veniam officia exercitation voluptate amet culpa Lorem commodo ex. Eu sunt aute commodo fugiat reprehenderit ullamco est officia. In fugiat aliquip ipsum non cillum deserunt ipsum velit sint ipsum. Velit consectetur laboris quis mollit nostrud anim elit adipisicing aliqua. Aliquip elit aliquip eiusmod aliquip adipisicing consequat enim duis anim incididunt ex ex.\r\n",
    },
    {
      _id: "606e193bc50cbf1d83051d28",
      price: "$2,171.02",
      image: "http://placehold.it/32x32",
      name: "Lucia Wooten",
      description:
        "Esse reprehenderit ipsum amet occaecat cupidatat sunt laboris. Consectetur aute nulla velit esse cupidatat Lorem voluptate dolor fugiat est sit laborum laborum. Pariatur elit quis sint ullamco pariatur aliquip deserunt sint culpa do exercitation. Id nulla pariatur pariatur eiusmod reprehenderit adipisicing sit anim aliquip. Nostrud tempor aliquip cupidatat excepteur amet deserunt laborum do. Ut consequat deserunt voluptate ullamco.\r\n",
    },
    {
      _id: "606e193b349d426ea167756f",
      price: "$1,120.27",
      image: "http://placehold.it/32x32",
      name: "Melissa Gilmore",
      description:
        "Eiusmod aliqua mollit officia ipsum qui tempor reprehenderit velit ipsum ea elit quis. Commodo culpa commodo tempor excepteur veniam et aute do amet. Veniam ea dolore minim nisi eiusmod incididunt et. Nulla ut non ullamco elit. Lorem minim nostrud esse culpa non excepteur exercitation duis dolor Lorem tempor aliquip. Dolor culpa voluptate laborum mollit consectetur eu sunt velit do tempor irure laborum.\r\n",
    },
    {
      _id: "606e193b3800edd0091ed42e",
      price: "$2,987.59",
      image: "http://placehold.it/32x32",
      name: "Guerrero Francis",
      description:
        "Ea do amet magna enim id voluptate duis minim elit dolor ex incididunt. Sit deserunt nisi nisi consectetur non reprehenderit reprehenderit id tempor non ipsum. Ipsum minim ullamco adipisicing dolore elit fugiat id excepteur laborum irure cupidatat ipsum qui incididunt. Voluptate mollit proident esse est consectetur incididunt. Non sunt excepteur exercitation anim cillum proident anim amet officia esse nisi cillum. Reprehenderit exercitation elit ea ea velit do irure eu.\r\n",
    },
  ].map((item, i) => <Card key={i} item={item} />);
  return (
    <div>
      <div className="h-96 md:h-screen bg-pink-100 bg-center md:bg-bottom bg-cover bg-header-pattern p-10 flex justify-end items-end md:items-center pb-10 text-right">
        <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-pink-400 font-extrabold">The Backery</h1>
          <Button colour="pink" rounded>
            Menu
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-5 items-center p-5 h-screen bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-600">
        <marquee>Marquee</marquee>
        <div className="flex flex-wrap">{items}</div>
        <h1 className="text-5xl font-bold">Welcome to The Backery</h1>
        <Box />
        {/* components without children close off in a single tag */}
        <Button2>children go inside of component tags</Button2>
      </div>
    </div>
  );
}