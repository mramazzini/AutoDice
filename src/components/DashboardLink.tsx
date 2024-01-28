import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
    <Link
      href="/packs"
      className="group flex flex-col rounded-xl bg-white p-5 text-black transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      <h1 className="text-3xl font-bold group-hover:text-blue-500 ">{title}</h1>
      <Image src={src} alt={alt} className="w-full" />
      <div className="h-1 w-full rounded-full bg-blue-500" />
      <p>{description}</p>
      <h2 className="mt-5 text-2xl font-bold group-hover:text-blue-500">
        {action}
      </h2>
      <div className="mt-5 h-1 w-full rounded-full bg-blue-500 transition-all duration-300 ease-in-out group-hover:bg-blue-500" />
    </Link>
  );
}
