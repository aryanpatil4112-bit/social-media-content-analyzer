import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import Features from "../components/Features";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900">

      <Navbar />

      <Hero />

      <UploadBox />

      <Features />

    </div>
  );
}

export default Home;