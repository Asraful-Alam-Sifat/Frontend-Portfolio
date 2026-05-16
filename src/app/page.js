import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";
import SkillsTech from "@/components/Skills&Technologies/SkillsTech";


export default function Home() {
  return (
      <div className="relative">
        <NavBar />
        <Banner/>
        <Projects/>
        <SkillsTech/>
      </div>
  );
}
