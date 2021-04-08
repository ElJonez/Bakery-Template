import Image from "next/image";
import Link from "next/link";
export default function Card({
  item = {
    image,
    name,
    price,
  },
}) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white">
      <a href="#">
        <Image
          width={200}
          height={300}
          alt="Placeholder"
          className="block h-auto w-full"
          src="/cinammonbun.jpeg"
        />
      </a>
      <div className="flex items-center justify-between p-2 md:p-4 h-20">
        <h1 className="text-lg">
          <Link href={`/${item.id}`}>
            <a className="no-underline hover:underline text-black">
              {item.name}
            </a>
          </Link>
        </h1>
        <p className="text-grey-darker text-sm">{item.price}</p>
      </div>
      <div className="flex items-center justify-between p-2 md:p-4">
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="#"
        >
          <span className="hidden">Buy</span>
          <i className="fa fa-dollar"></i>
        </a>
      </div>
    </div>
  );
}