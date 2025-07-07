export function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-white px-4 shadow-xl"
      style={{
        backgroundImage: "url('images/pexels-fauxels-3184418.jpg')"
      }}
    >
      <div className="bg-black/50 p-8 rounded-xl text-center max-w-2xl">
        <h1 className=" tracking-wide text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-400">SkillMatch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Track your journey. Build real connections. Launch your developer career — all in one place.

        </p>
      </div>
    </div>
  );
}
