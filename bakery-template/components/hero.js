export default function Hero({
  image,
  imgPosition,
  topSubText,
  headText,
  bottomSubText,
  CTA,
  children,
  className,
}) {
  return (
    <div className={`${className} pt-24`}>
      <div className="container flex flex-col flex-wrap items-center px-3 mx-auto md:flex-row bg-transparent">
        {!imgPosition && (
          <div className="w-full py-6 text-center md:w-3/5">
            <img className="z-50 w-full md:w-3/5 mx-auto" src={image} />
          </div>
        )}
        <div className="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left">
          {topSubText && (
            <p className="w-full uppercase tracking-loose">
              {/* What business are you? /} */}
              {/* {/ A Streamlined Automated Configurable Platform/} */}
              {topSubText}
            </p>
          )}
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {headText}
            {/* {/ Main Hero Message to sell yourself! /} */}
            {/* {/ Lending Made Easy /} */}
          </h1>
          {bottomSubText && (
            <p className="mb-8 text-2xl leading-normal">
              {bottomSubText}
              {/* {/ Sub-hero message, not too long and not too short. Make it just right! /} */}
            </p>
          )}
          <div className="w-full">{CTA}</div>
        </div>
        {imgPosition && (
          <div className="w-full py-6 text-center md:w-3/5">
            <img className="z-50 w-full md:w-3/5 mx-auto" src={image} />
            {/* {/ convert to component import? */}
          </div>
        )}
      </div>
    </div>
  );
}