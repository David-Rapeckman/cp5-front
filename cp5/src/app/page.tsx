import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
 
export default function Home() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
<Head>
<title>Astronomy Picture of the Day</title>
</Head>
<Navbar />
<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
<h1 className="text-6xl font-bold">APOD: Astronomy Picture of the Day</h1>
<p className="mt-3 text-2xl">
          One of the most popular websites at NASA is the Astronomy Picture of the Day.
</p>
<Image
          src="/example-image.jpg"
          alt="Astronomy Pictur"
          width={500}
          height={500}
          className="mt-6"
        />
</main>
</div>
  );
}