const Summary = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="order-2 lg:order-1">
        <div className="flex gap-4 items-center">
          <div className="bg-indigo-800 h-0.5 w-15 md:w-30"></div>
          <h4 className="text-indigo-800">VELİ DOĞAN</h4>
        </div>
        <h1 className="font-bold text-7xl text-gray-800 my-10">
          Creative thinker Minimalism lover
        </h1>
        <p className="my-10">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="button px-8 py-3 ">
              Hire Me
            </a>
          </li>
          <li>
            <a href="#" className="button px-8 py-3 ">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="button px-8 py-3 ">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="./veli.jpg"
          alt="VELİ DOĞAN"
          className="h-100 lg:ms-auto rounded-3xl shadow-2xl"
        ></img>
      </div>
    </div>
  );
};

export default Summary;
