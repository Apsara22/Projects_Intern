import Profile1 from "../assets/profile1.jpeg";
export default function Profile() {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={Profile1}
        className="mx-auto mb-48 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400  to-blue-500">
          {" "}
          Apsara Paneru
        </span>
        , MERN DEVELOPER
      </h1>
      <p className="mt-4 text-lg text-gray-300 ">
        I specialize in building in building modern and responsive web
        applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-500 to-blue-500
         text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500
         text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
}
