import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//router is used for anything to do with the url
import Logo from "../svgs/logo.svg";

export default function Navbar() {
  // * `state` is all the variables for this component that can't be acessed elsewhere, and they can be used in your html by wrapping the variable name in {}
  const [isOpen, setIsOpen] = useState(false);
  // * Here we're using the variable `isOpen`, this is how you declare things you want to be used in your html
  // * the first item in the array is the variable we want to use `isOpen`
  // * the second item in the array is the function we want to set the variable `setIsOpen`
  // * this will usually be called either setIsOpen, updateIsOpen, the action you perform + the variable name

  // * Here we're making a function using an arrow function
  // * We declare it with const followed by the name, then = () => means function and that's where you put potential parameters
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  // * we could write this a few ways

  // const toggleOpen = () => setIsOpen("false");

  // const toggleOpen = () => setIsOpen(true);

  // const toggleOpen = function () {
  //   setIsOpen(!isOpen);
  // };

  // function isOpen() {
  //   setIsOpen(!isOpen);
  // }

  // function isOpen(isItOpen){
  //   setIsOpen(isItOpen);
  // }

  // * we can go through these different ways of writing functions in the future, for now anything you're familiar with will work just fine

  const setActiveClasses = (link) => {
    const router = useRouter();
    const linkpath = `/${link}`;

    if (
      linkpath == router.pathname ||
      (linkpath == "/Home" && router.pathname == "/")
    ) {
      return true;
    } else {
      return false;
    }
  };

 const links = ["Home", "About", "Gallery", "Shop", "Contact"];
  const linksContent = links.map((link) => {
    return (
      <li className="mr-3">
        <Link href={`/${link != "Home" ? link : ""}`}>
          <a
            className={`${
              setActiveClasses(link)
                ? "font-bold text-pink-500"
                : " text-pink-600"
            } inline-block px-4 py-2 hover:text-pink-400`}
          >
            {link}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <nav className={`fixed top-0 z-30 w-full text-gray-100 py-2`}>
      <div className="container flex flex-wrap items-center justify-between w-full md:mx-auto mt-0">
        <div className="flex justify-start pl-4">
          <Link href="/">
            <a className="text-2xl font-bold text-pink-100 no-underline toggleColour hover:no-underline lg:text-4xl">
              <Logo width="100" height="100" viewBox="64 64 256 256" />
            </a>
          </Link>
        </div>
        <div className="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            colour="pink"
            className="flex items-center p-1 text-pink-400 transition duration-300 ease-in-out transform focus:outline-none focus:shadow-outline hover:scale-105"
            onClick={toggleOpen}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } z-20 flex-grow w-full p-4 mt-2 text-gray-50 bg-pink-200 bg-opacity-75 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0`}
          id="nav-content"
        >
          <ul className="items-center justify-end flex-1 list-reset lg:flex">
          {linksContent}
          </ul>
        </div>
      </div>
    </nav>
  );
}
