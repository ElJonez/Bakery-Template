export default function Testimonials() {
  const testimonials = [
    {
      company: "Metro Bank PLC",
      title: "Simplest Method Ever.",
      text:
        "Origination with NOA Lending has been made the process simple and fast, it's undenyable the best platform out there.",
      caseStudy: "/Solutions",
    },
    {
      company: "Starling",
      title: "A dream to work with.",
      text:
        "NOA Lending made origination as well as servicing the easiest I've dealt with in years, and I've been in the industry for 20+ years.",
      caseStudy: "/Solutions",
    },
    {
      company: "Mettle",
      title: "Fastest Process We've Seen",
      text: `We got to market in just 4 weeks!
        The process was so streamlined and easy to go through.`,
      caseStudy: "/Solutions",
    },
  ].map(({ company, title, text, caseStudy }, i) => {
    return (
      <div
        key={i}
        className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3"
      >
        <div className="flex-1 overflow-hidden bg-white bg-opacity-75 p-3 rounded-t rounded-b-none shadow">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              -{company}
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-800">
              {title}
            </div>
            <p className="px-6 mb-5 text-base text-gray-800">{text}</p>
          </a>
        </div>
        <div className="flex-none mt-auto overflow-hidden bg-white bg-opacity-75 p-3 rounded-t-none rounded-b shadow">
          <div className="flex items-center justify-start">
            <button className="bg-white px-8 py-4 mx-auto my-6 font-bold text-gray-700 transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
              Case Study
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="py-8 bg-blue-100 border-b">
      <div className="container flex flex-wrap pt-4 pb-12 mx-auto">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Our Proof
        </h1>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 bg-gradient-to-bl from-blue-200 via-blue-100 to-blue-600"></div>
        </div>
        {testimonials}
      </div>
    </section>
  );
}