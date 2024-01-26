import Image, { StaticImageData } from "next/image";

export default function DashboardLink({
  title,
  description,
  src,
  alt,
  action,
}: {
  title: string;
  description: string;
  src: StaticImageData;
  alt: string;
  action: string;
}) {
  return (
    <a
      href="/packs"
      className=" group flex flex-col bg-white text-black rounded-xl p-5 transition-all duration-300 ease-in-out hover:shadow-xl    
          "
    >
      <h1 className="text-3xl font-bold group-hover:text-blue-500 ">{title}</h1>
      <Image src={src} alt={alt} className="w-full"></Image>
      <div className="w-full h-1 bg-blue-500 rounded-full  "></div>
      <p>{description}</p>
      <h2 className="text-2xl font-bold mt-5 group-hover:text-blue-500 mt-auto">
        {action}
      </h2>
      <div className="w-full h-1 bg-blue-500 rounded-full mt-5 group-hover:bg-blue-500 transition-all duration-300 ease-in-out"></div>
    </a>
  );
}
