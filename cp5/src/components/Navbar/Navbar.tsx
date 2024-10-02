export default function Navbar() {
    return (
      <nav className="w-full bg-blue-500 p-4">
        <ul className="flex justify-around">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">About</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    );
  }
  