import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <Image
        src="/error-image.jpg"
        alt="Error "
        width={500}
        height={500}
        className="mt-6"
      />
    </div>
  );
}
