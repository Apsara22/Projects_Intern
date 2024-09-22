export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold md:inline">Paneru</div>

        <div className="space-x-6">
          <a href="" id="home" className="hover:text-gray-400">
            Home
          </a>
          <a href="" id="about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="" id="service" className="hover:text-gray-400">
            Services
          </a>
          <a href="" id="Project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="" id="contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-r from-green-500 to-blue-500
         text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>
      </div>
    </nav>
  );
}
