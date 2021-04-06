import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";

// *This is the top level component "_app"
// *For pages that have the same component like a navbar or footer you can include them here around the <Component/> which is a page in ./pages/
// *Any component that is inside ./pages/ is a 'route' so it's accessible via the url of the component name such as http://localhost:3000/about, http://localhost:3000/home, http://localhost:3000/contact
function MyApp({ Component, pageProps }) {
  return (
    // * Here I'm adding a div around the component/page so I can put things that always show outside of each page
    <div>
      <Navbar />
      {/* "Here is where I would put the navbar, it will always be positioned above the main page" */}
      <Component {...pageProps} />
      {/* <Footer /> */}
      {/* "Here is where I would put the footer, it will always be positioned below the main page" */}
    </div>
  );
}

export default MyApp;