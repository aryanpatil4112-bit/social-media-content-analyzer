function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold text-cyan-400">
        SocialPulse AI
      </h1>

      <button className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2 rounded-lg font-semibold">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;