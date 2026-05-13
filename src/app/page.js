import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
      <div className="relative">
        <NavBar />
        <Banner/>
        <Projects/>
      </div>
  );
}
