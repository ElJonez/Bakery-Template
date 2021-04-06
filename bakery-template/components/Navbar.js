import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//router is used for anything to do with the url

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

  return (
    <nav className={`fixed top-0 z-30 w-full text-gray-800 py-2`}>
      <div className="container flex flex-wrap items-center justify-between w-full mx-auto mt-0">
        <div className="flex justify-start pl-4">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-100 no-underline toggleColour hover:no-underline lg:text-4xl">
              The Backery
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
          } z-20 flex-grow w-full p-4 mt-2 text-black bg-pink-200 bg-opacity-75 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0`}
          id="nav-content"
        >
          <ul className="items-center justify-end flex-1 list-reset lg:flex">
            <li className="mr-3">
              <Link href="/">
                <a
                  className={`${
                    setActiveClasses("Home") ? "font-bold text-gray-900" : ""
                  } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/About">
                <a
                  className={`${
                    setActiveClasses("About") ? "font-bold text-gray-900" : ""
                  } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/Gallery">
                <a
                  className={`${
                    setActiveClasses("Gallery") ? "font-bold text-gray-900" : ""
                  } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
                >
                  Gallery
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/Shop">
                <a
                  className={`${
                    setActiveClasses("Shop") ? "font-bold text-gray-900" : ""
                  } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
                >
                  Shop
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/Contact">
                <a
                  className={`${
                    setActiveClasses("Contact") ? "font-bold text-gray-900" : ""
                  } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Button from "./Button";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const links = ["Home", "About", "Contact"].map((link, key) => {
//     const router = useRouter();

//     const setActiveClasses = (link) => {
//       const linkpath = `/${link}`;

//       if (
//         linkpath == router.pathname ||
//         (linkpath == "/Home" && router.pathname == "/")
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     };

//     return (
//       <li key={key} className="mr-3">
//         <Link href={link == "Home" ? "/" : `/${link}`}>
//           <a
//             className={`${
//               setActiveClasses(link) ? "font-bold text-gray-900" : ""
//             } inline-block px-4 py-2 text-gray-800 hover:text-gray-600`}
//           >
//             {link}
//           </a>
//         </Link>
//       </li>
//     );
//   });
//   return (
//     <nav
//       className={`fixed top-0 z-30 w-full text-gray-800 lg:bg-opacity-90 lg:bg-pink-300 h-30`}
//     >
//       <div className="container flex flex-wrap items-center justify-between w-full mx-auto mt-0">
//         <div className="flex justify-start pl-4">
//           <Link href="/">
//             <a className="text-2xl font-bold text-gray-100 no-underline toggleColour hover:no-underline lg:text-4xl">
//               NOA Lending
//             </a>
//           </Link>
//         </div>
//         <div className="block pr-4 lg:hidden">
//           <button
//             id="nav-toggle"
//             className="flex items-center p-1 text-blue-800 transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105"
//             onClick={toggleOpen}
//           >
//             <svg
//               className="w-6 h-6 fill-current"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Menu</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`${
//             isOpen ? "" : "hidden"
//           } z-20 flex-grow w-full p-4 mt-2 text-black bg-blue-200 bg-opacity-75 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0`}
//           id="nav-content"
//         >
//           <ul className="items-center justify-end flex-1 list-reset lg:flex">
//             {links}
//             {!isOpen && (
//               <Button
//                 type="submit"
//                 text="Instant Demo"
//                 className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-lg shadow lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
//               >
//                 <br />
//                 <small className="text-xs text-gray-600">
//                   No sign up required
//                 </small>
//               </Button>
//             )}
//           </ul>
//         </div>
//       </div>
//       <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
//     </nav>
//   );
// }